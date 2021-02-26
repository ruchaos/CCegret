var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Room = (function (_super) {
    __extends(Room, _super);
    function Room() {
        var _this = _super.call(this) || this;
        _this.players = [];
        _this.timerAs = [];
        _this.timerBs = [];
        _this.timeA = [];
        _this.timeB = [];
        _this.timer = new egret.Timer(1000, 0);
        _this.currentStepNum = 0;
        _this.PxNames = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
        _this.PyNames = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "resource/custom_skins/Room.exml";
        return _this;
    }
    Room.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Room.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Room.prototype.uiCompHandler = function () {
        this.quit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.quitHandler, this);
        this.exit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.exitHandler, this);
        this.dismiss.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dismissHandler, this);
        this.kick1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.kick1Handler, this);
        this.kick2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.kick2Handler, this);
        this.kick3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.kick3Handler, this);
        this.kick4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.kick4Handler, this);
        this.switch12.addEventListener(egret.TouchEvent.TOUCH_TAP, this.switch12Handler, this);
        this.switch23.addEventListener(egret.TouchEvent.TOUCH_TAP, this.switch23Handler, this);
        this.switch34.addEventListener(egret.TouchEvent.TOUCH_TAP, this.switch34Handler, this);
        this.drawoffer.addEventListener(egret.TouchEvent.TOUCH_TAP, this.drawofferHandler, this);
        this.surrender.addEventListener(egret.TouchEvent.TOUCH_TAP, this.surrenderHandler, this);
        this.pan.visible = false;
        this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnCloseHandler, this);
        this.panBack.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnCloseHandler, this);
        this.btnSubmit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnSubmitHandler, this);
        this.addEventListener(LOBBYEVENT.SOCKETMSG, this.SocketHandler, this);
        this.start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startHandler, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        this.prev.addEventListener(egret.TouchEvent.TOUCH_TAP, this.prevHandler, this);
        this.next.addEventListener(egret.TouchEvent.TOUCH_TAP, this.nextHandler, this);
        this.beginning.addEventListener(egret.TouchEvent.TOUCH_TAP, this.beginningHandler, this);
    };
    Room.prototype.prevHandler = function () {
        if (this.currentStepNum > 0) {
            this.currentStepNum--;
            var notation = this.Game.notation.getNotation(this.currentStepNum);
            this.Game.setupwithNotation(notation);
            this.stepNum.text = "#" + this.currentStepNum;
            this.lastMove.text = this.textMove(notation.lastMove);
        }
        if (this.currentStepNum == this.Game.notation.NotationHistory.length - 1) {
            this.result.visible = true;
        }
        else {
            this.result.visible = false;
        }
    };
    Room.prototype.nextHandler = function () {
        if (this.currentStepNum < this.Game.notation.NotationHistory.length - 1) {
            this.currentStepNum++;
            var notation = this.Game.notation.getNotation(this.currentStepNum);
            this.Game.setupwithNotation(notation);
            this.stepNum.text = "#" + this.currentStepNum;
            this.lastMove.text = this.textMove(notation.lastMove);
        }
        if (this.currentStepNum == this.Game.notation.NotationHistory.length - 1) {
            this.result.visible = true;
        }
        else {
            this.result.visible = false;
        }
    };
    Room.prototype.beginningHandler = function () {
        this.currentStepNum = 0;
        var notation = this.Game.notation.getNotation(0);
        this.Game.setupwithNotation(notation);
        this.stepNum.text = "#" + this.currentStepNum;
        this.lastMove.text = "";
        if (this.currentStepNum == this.Game.notation.NotationHistory.length - 1) {
            this.result.visible = true;
        }
        else {
            this.result.visible = false;
        }
    };
    Room.prototype.textMove = function (move) {
        if (move.currentPieceName) {
            var textMove = "";
            var pieceName = move.currentPieceName;
            var skill = "";
            var tgt = "";
            if (move.currentSkill == "move" || move.currentSkill == "kill") {
                skill = "-";
            }
            else {
                skill = "+";
            }
            if (move.currentSkill == "move") {
                tgt = this.PxNames[move.currentTargets[0].Px] + this.PyNames[move.currentTargets[0].Py];
            }
            else if (move.currentSkill == "Convene" || move.currentSkill == "Summon") {
                for (var i = 0; i < move.currentTargets.length; i++) {
                    tgt += "/" + this.PxNames[move.currentTargets[i].Px] + this.PyNames[move.currentTargets[i].Py];
                }
            }
            else {
                tgt = move.currentTargets[0].targetPiece + "/" + this.PxNames[move.currentTargets[1].Px] + this.PyNames[move.currentTargets[1].Py];
            }
            textMove = pieceName + skill + tgt;
            return textMove;
        }
        else {
            return "";
        }
    };
    Room.prototype.btnCloseHandler = function () {
        this.pan.visible = false;
    };
    Room.prototype.startHandler = function () {
        //向socket发送start
        var data = { username: "", token: "", roomID: "" };
        data.username = username;
        data.token = token;
        data.roomID = this.roomID;
        socket.emit("StartGame", data);
    };
    Room.prototype.toGaming = function (roomData) {
        //开始游戏
        this.Game.gameInfo.players = roomData.players;
        this.Game.gameInfo.roomID = roomData.roomID;
        this.Game.gameInfo.gameID = roomData.gameID;
        this.Game.setupwithNotation(roomData.notation);
        //切换到游戏状态	
        this.setBtn(roomData);
    };
    Room.prototype.toFinished = function (roomData) {
        //游戏结束
        //切换到游戏结束状态
        this.setBtn(roomData);
        //基于this.Game.notation
        //提取指定notation
        this.currentStepNum = roomData.notation.NotationHistory.length - 1;
        var notation = roomData.notation;
        this.Game.SyncNotation(notation);
        this.Game.setupwithNotation(notation);
        this.stepNum.text = "#" + this.currentStepNum;
        this.lastMove.text = this.textMove(notation.lastMove);
        if (roomData.gameResult.reason == 3) {
            this.reason.text = "对方认输";
        }
        else if (roomData.gameResult.reason == 4) {
            this.reason.text = "约和";
        }
        else if (roomData.gameResult.reason == 5) {
            this.reason.text = "对方超时";
        }
    };
    Room.prototype.SocketHandler = function (evt) {
        var roomData = evt.roomData;
        switch (evt.socketevent) {
            case "PlayersChanges":
                if (roomData.roomState == 1) {
                    this.playerChange(roomData);
                }
                break;
            case "LeaveRoomSuccess":
                this.BacktoHome();
                break;
            case "RoomDismissed":
                this.BacktoHome();
                Toast.launch("房间已解散");
                break;
            case "BeKicked":
                this.BacktoHome();
                break;
            case "GameStarted":
                this.toGaming(roomData);
                this.playerChange(roomData);
                this.changeCurrentPlayer(roomData);
                this.Game.SyncNotation(roomData.notation);
                this.Game.setupwithNotation(roomData.notation);
                break;
            case "GameOver":
                this.toFinished(roomData);
                break;
            case "GotNotation":
                this.toFinished(roomData);
                break;
            case "NewNotation":
                this.setPlayerTimer(roomData);
                this.changeCurrentPlayer(roomData);
                this.Game.setupwithNotation(roomData.notation);
                this.Game.SyncNotation(roomData.notation);
                this.currentPlayer = roomData.notation.currentPlayer;
                if (!this.timer.running) {
                    this.timer.start();
                }
                break;
            case "OfferingDraw":
                var auth = false;
                for (var i = 0; i < roomData.drawAccepter.length; i++) {
                    if (username == roomData.drawAccepter[i]) {
                        auth = true;
                    }
                }
                this.drawoffer.selected = auth;
                break;
            case "EnterGameSuccess":
                this.toGaming(roomData);
                this.playerChange(roomData);
                this.changeCurrentPlayer(roomData);
                this.Game.SyncNotation(roomData.notation);
                this.Game.setupwithNotation(roomData.notation);
                this.currentPlayer = roomData.notation.currentPlayer;
                if (!this.timer.running) {
                    this.timer.start();
                }
                break;
        }
        ;
    };
    Room.prototype.quitHandler = function () {
        var data = { username: "", token: "", roomID: "" };
        data.username = username;
        data.token = token;
        data.roomID = this.roomID;
        socket.emit("LeaveRoom", data);
    };
    Room.prototype.exitHandler = function () {
        this.BacktoHome();
    };
    Room.prototype.dismissHandler = function () {
        var data = { username: "", token: "", roomID: "" };
        data.username = username;
        data.token = token;
        data.roomID = this.roomID;
        socket.emit("DismissRoom", data);
    };
    Room.prototype.drawofferHandler = function () {
        if (this.drawoffer.selected == true) {
            this.pan.visible = true;
            this.panTitle.text = "要提和吗？";
            this.panContent.text = "点击提交键确认提出和棋\n若对方继续行棋表示拒绝";
            this.submitEvent = "DrawOffer";
            this.drawoffer.selected = false;
        }
        else {
            this.pan.visible = true;
            this.panTitle.text = "要和棋吗？";
            this.panContent.text = "点击提交>>本局和棋\n继续行棋>>拒绝和棋";
            this.submitEvent = "DrawOfferAccept";
            this.drawoffer.selected = true;
        }
        //如果当前是按下状态，向服务器提交设置为提合，否则设置为未提合
    };
    Room.prototype.surrenderHandler = function () {
        this.pan.visible = true;
        this.panTitle.text = "要认输吗？";
        this.submitEvent = "Surrender";
        if (this.Game.notation.NotationHistory.length < 5) {
            this.panContent.text = "点击提交-确认认输\n(本局不满4步不记录)";
        }
        else {
            this.panContent.text = "点击提交-确认认输";
        }
    };
    Room.prototype.btnSubmitHandler = function () {
        var data = { username: "", token: "", roomID: "", gameID: "" };
        data.username = username;
        data.token = token;
        data.roomID = this.roomID;
        data.gameID = this.Game.gameInfo.gameID;
        socket.emit(this.submitEvent, data);
        this.pan.visible = false;
    };
    Room.prototype.kick1Handler = function () {
        var data = { username: "", token: "", roomID: "", bekickedPlayer: "" };
        data.username = username;
        data.token = token;
        data.roomID = this.roomID;
        data.bekickedPlayer = this.player1.text;
        socket.emit("KickPlayer", data);
    };
    Room.prototype.kick2Handler = function () {
        var data = { username: "", token: "", roomID: "", bekickedPlayer: "" };
        data.username = username;
        data.token = token;
        data.roomID = this.roomID;
        data.bekickedPlayer = this.player2.text;
        socket.emit("KickPlayer", data);
    };
    Room.prototype.kick3Handler = function () {
        var data = { username: "", token: "", roomID: "", bekickedPlayer: "" };
        data.username = username;
        data.token = token;
        data.roomID = this.roomID;
        data.bekickedPlayer = this.player3.text;
        socket.emit("KickPlayer", data);
    };
    Room.prototype.kick4Handler = function () {
        var data = { username: "", token: "", roomID: "", bekickedPlayer: "" };
        data.username = username;
        data.token = token;
        data.roomID = this.roomID;
        data.bekickedPlayer = this.player4.text;
        socket.emit("KickPlayer", data);
    };
    Room.prototype.switch12Handler = function () {
        var switchPlayer = { username: "", token: "", roomID: "" };
        switchPlayer.username = username;
        switchPlayer.token = token;
        switchPlayer.roomID = this.roomID;
        socket.emit("Switch12", switchPlayer);
    };
    Room.prototype.switch23Handler = function () {
        var switchPlayer = { username: "", token: "", roomID: "" };
        switchPlayer.username = username;
        switchPlayer.token = token;
        switchPlayer.roomID = this.roomID;
        socket.emit("Switch23", switchPlayer);
    };
    Room.prototype.switch34Handler = function () {
        var switchPlayer = { username: "", token: "", roomID: "" };
        switchPlayer.username = username;
        switchPlayer.token = token;
        switchPlayer.roomID = this.roomID;
        socket.emit("Switch34", switchPlayer);
    };
    Room.prototype.updateroomData = function (roomData) {
        this.init(roomData);
    };
    Room.prototype.init = function (roomData) {
        //roomState如果是3，则查询棋谱库，否则查询当前房间列表，查询roomID（唯一索引）
        //确定UI内容
        // var roomState:number;
        // console.log("roomID:"+roomID);
        var Roomui = this;
        this.roomID = roomData.roomID;
        this.roomState = roomData.roomState;
        this.gameName.text = roomData.gameName;
        this.gameType.text = gameTypeNo[roomData.gameType - 1];
        this.gameTime.text = gameTimeNo[roomData.gameTime - 1];
        this.gameDate.text = roomData.gameDate;
        this.player1.text = roomData.players[0].playerName;
        this.player2.text = roomData.players[1].playerName;
        this.player3.text = roomData.players[2].playerName;
        this.player4.text = roomData.players[3].playerName;
        //Roomui.addStar4Me();//改为加横线，忽略房主问题
        //Roomui.player1.textFlow=[{text:Roomui.player1.text,style:{"underline":true}}];//改为加横线，忽略房主问题
        this.setPlayerTimer(roomData);
        this.setBtn(roomData);
        this.gameStateVS.selectedIndex = roomData.roomState - 1;
        this.players = [];
        this.timerAs = [];
        this.timerBs = [];
        this.players.push(this.player1);
        this.players.push(this.player2);
        this.players.push(this.player3);
        this.players.push(this.player4);
        this.timerAs.push(this.timerA1);
        this.timerAs.push(this.timerA2);
        this.timerAs.push(this.timerA3);
        this.timerAs.push(this.timerA4);
        this.timerBs.push(this.timerB1);
        this.timerBs.push(this.timerB2);
        this.timerBs.push(this.timerB3);
        this.timerBs.push(this.timerB4);
        //测试代码
        // var data={
        // 	roomID:"r1",
        // 	notation:{
        // 		currentPlayer:1
        // 	},
        // 	players:[
        // 		{playerName:"ruchaos",playerTimeA:60,playerTimeB:600},//time和游戏类型对应;如果是1v1,player[2],player[3]和[0][1]一样。
        // 		{playerName:"lynn",playerTimeA:60,playerTimeB:600},
        // 		{playerName:"ruchaos",playerTimeA:60,playerTimeB:600},
        // 		{playerName:"lynn",playerTimeA:60,playerTimeB:600},
        // 		]
        // };
        // this.changeCurrentPlayer(data);
        //测试代码结束
    };
    Room.prototype.playerChange = function (roomData) {
        this.player1.text = roomData.players[0].playerName;
        this.player2.text = roomData.players[1].playerName;
        this.player3.text = roomData.players[2].playerName;
        this.player4.text = roomData.players[3].playerName;
        this.setPlayerTimer(roomData);
        this.setBtn(roomData);
    };
    Room.prototype.setBtn = function (roomData) {
        this.gameDate.text = roomData.gameDate;
        this.roomState = roomData.roomState;
        this.gameStateVS.selectedIndex = this.roomState - 1;
        this.quit.visible = false;
        this.exit.visible = false;
        this.dismiss.visible = false;
        this.surrender.visible = false;
        this.start.visible = false;
        this.curtain.visible = false;
        this.hint.visible = false;
        this.drawoffer.visible = false;
        if (this.roomState == 1) {
            this.curtain.visible = true;
            this.hint.visible = true;
            this.gameDate.visible = true;
            this.kick1.visible = false;
            this.kick2.visible = false;
            this.kick3.visible = false;
            this.kick4.visible = false;
            this.switch12.visible = false;
            this.switch23.visible = false;
            this.switch34.visible = false;
            if (roomData.hostName == username) {
                this.dismiss.visible = true;
                this.start.visible = true;
                if (roomData.gameType == 1) {
                    this.kick1.visible = true;
                    this.kick2.visible = true;
                    this.switch12.visible = true;
                }
                else if (roomData.gameType == 4) {
                    this.kick1.visible = true;
                    this.kick2.visible = true;
                }
                else if (roomData.gameType == 2) {
                    this.kick1.visible = true;
                    this.kick2.visible = true;
                    this.kick3.visible = true;
                    this.kick4.visible = true;
                    this.switch12.visible = true;
                    this.switch23.visible = true;
                    this.switch34.visible = true;
                }
                else if (roomData.gameType == 3) {
                    this.kick1.visible = true;
                    this.kick2.visible = true;
                    this.kick3.visible = true;
                    this.kick4.visible = true;
                }
                ;
                if ((roomData.players[0].playerName == username) || (roomData.players[0].playerName == "")) {
                    this.kick1.visible = false;
                }
                ;
                if ((roomData.players[1].playerName == username) || (roomData.players[1].playerName == "")) {
                    this.kick2.visible = false;
                }
                ;
                if ((roomData.players[2].playerName == username) || (roomData.players[2].playerName == "")) {
                    this.kick3.visible = false;
                }
                ;
                if ((roomData.players[3].playerName == username) || (roomData.players[3].playerName == "")) {
                    this.kick4.visible = false;
                }
                ;
            }
            else {
                this.quit.visible = true;
            }
        }
        else if (this.roomState == 2) {
            var isPlayer = false;
            if (roomData.players[0].playerName == username) {
                isPlayer = true;
            }
            ;
            if (roomData.players[1].playerName == username) {
                isPlayer = true;
            }
            ;
            if (roomData.players[2].playerName == username) {
                isPlayer = true;
            }
            ;
            if (roomData.players[3].playerName == username) {
                isPlayer = true;
            }
            ;
            if (isPlayer) {
                this.surrender.visible = true;
                this.drawoffer.visible = true;
                this.gameDate.visible = false;
            }
            else {
                this.quit.visible = true;
                this.gameDate.visible = true;
            }
        }
        else if (this.roomState == 3) {
            this.quit.visible = false;
            this.exit.visible = true;
            this.gameDate.visible = true;
            this.T1win.visible = false;
            this.T2win.visible = false;
            this.Draw.visible = false;
            if (roomData.gameResult.winnerteam == 1) {
                this.T1win.visible = true;
            }
            else if (roomData.gameResult.winnerteam == 2) {
                this.T2win.visible = true;
            }
            else if (roomData.gameResult.winnerteam == 3) {
                this.Draw.visible = true;
            }
            ;
        }
        else {
            this.exit.visible = true;
        }
    };
    // private addStar4Me():void{
    // 	if(this.player1.text==username){
    // 		this.player1.text="*"+this.player1.text;
    // 	};
    // 	if(this.player2.text==username){
    // 		this.player2.text="*"+this.player2.text;
    // 	};
    // 	if(this.player3.text==username){
    // 		this.player3.text="*"+this.player3.text;
    // 	};		
    // 	if(this.player4.text==username){
    // 		this.player4.text="*"+this.player4.text;
    // 	};
    // }
    // private noStar(str:string):string{
    // 	if(str.charAt(0)=="*"){
    // 		str=str.slice(1,str.length);
    // 	}
    // 	return str;
    // }
    Room.prototype.setPlayerTimer = function (roomData) {
        this.timerA1.text = this.S2MMSS(roomData.players[0].playerTimeA);
        this.timerB1.text = this.S2MMSS(roomData.players[0].playerTimeB);
        this.timerA2.text = this.S2MMSS(roomData.players[1].playerTimeA);
        this.timerB2.text = this.S2MMSS(roomData.players[1].playerTimeB);
        this.timerA3.text = this.S2MMSS(roomData.players[2].playerTimeA);
        this.timerB3.text = this.S2MMSS(roomData.players[2].playerTimeB);
        this.timerA4.text = this.S2MMSS(roomData.players[3].playerTimeA);
        this.timerB4.text = this.S2MMSS(roomData.players[3].playerTimeB);
    };
    Room.prototype.changeCurrentPlayer = function (data) {
        // 	"NewNotation":{ s2c
        // roomID:"r1",
        // notation:notation
        // players:[
        // 	{playerName:"ruchaos",playerTimeA:60,playerTimeB:600},//time和游戏类型对应;如果是1v1,player[2],player[3]和[0][1]一样。
        // 	{playerName:"lynn",playerTimeA:60,playerTimeB:600},
        // 	{playerName:"ruchaos",playerTimeA:60,playerTimeB:600},
        // 	{playerName:"lynn",playerTimeA:60,playerTimeB:600},
        // 	]
        // }
        this.timeA = [];
        this.timeB = [];
        var playerNum = data.notation.currentPlayer - 1;
        var CurrentPlayerName = data.players[playerNum].playerName;
        for (var i = 0; i < data.players.length; i++) {
            this.timeA.push(data.players[i].playerTimeA);
            this.timeB.push(data.players[i].playerTimeB);
            if (i == playerNum) {
                this.players[i].textFlow = [{ text: this.players[i].text, style: { "underline": true } }];
            }
            else {
                this.players[i].textFlow = [{ text: this.players[i].text, style: { "underline": false } }];
            }
        }
    };
    Room.prototype.timerFunc = function () {
        //倒计时-设定时间，并每1秒减1，然后转为时间格式更新对应label
        //如果A倒计时为0，则启动B倒计时，
        //A倒计时总是优先，如果是快棋，则每次会重置A，如果是长考，则每次会重置B，B耗尽时，判负
        var i = this.currentPlayer - 1;
        if (this.timeA[i] > 0) {
            this.timeA[i]--;
            this.timerAs[i].text = this.S2MMSS(this.timeA[i]);
        }
        else if (this.timeB[i] > 0) {
            this.timeB[i]--;
            this.timerBs[i].text = this.S2MMSS(this.timeB[i]);
        }
        //设置Timer颜色
        for (var m = 0; m < 4; m++) {
            if (this.timeA[m] <= 10) {
                this.timerAs[m].textColor = 0xFF0000;
            }
            else {
                this.timerAs[m].textColor = 0xCCCCCC;
            }
            if (this.timeB[m] <= 10) {
                this.timerBs[m].textColor = 0xFF0000;
            }
            else {
                this.timerBs[m].textColor = 0xCCCCCC;
            }
        }
    };
    Room.prototype.S2MMSS = function (seconds) {
        var MMSS = "00:00";
        var t;
        t = seconds % 60;
        MMSS = t.toString();
        if (MMSS.length == 1) {
            MMSS = "0" + MMSS;
        }
        t = (seconds - t) / 60;
        MMSS = t.toString() + ":" + MMSS;
        if (MMSS.length == 4) {
            MMSS = "0" + MMSS;
        }
        return MMSS;
    };
    Room.prototype.BacktoHome = function () {
        var LobbyEvent = new LOBBYEVENT(LOBBYEVENT.OPEN);
        LobbyEvent.pageName = "Home";
        this.dispatchEvent(LobbyEvent);
        this.parent.removeChild(this);
    };
    ;
    return Room;
}(eui.Component));
__reflect(Room.prototype, "Room", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Room.js.map