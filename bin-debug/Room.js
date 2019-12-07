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
        this.dismiss.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dismissHandler, this);
    };
    Room.prototype.quitHandler = function () {
        this.BacktoHome();
    };
    Room.prototype.dismissHandler = function () {
        this.BacktoHome();
    };
    Room.prototype.init = function (roomID, searchState) {
        //roomState如果是3，则查询棋谱库，否则查询当前房间列表，查询roomID（唯一索引）
        //确定UI内容
        var roomState;
        console.log("roomid:" + roomID);
        //测试代码
        roomState = 1; //roomState 1-等待中；2-进行中；3-已结束；(4-当前游戏)
        var roomInfo = {
            roomID: 123,
            roomState: 3,
            gameType: "2v2",
            gameTime: "快棋",
            gameDate: "20190615",
            hostName: "Rux",
            player1: "Rux",
            player2: "lynn",
            player3: "Rux",
            player4: "lynn",
            timerA1: 600,
            timerB1: 60,
            timerA2: 600,
            timerB2: 60,
            timerA3: 600,
            timerB3: 60,
            timerA4: 600,
            timerB4: 60,
            ready: true,
            history: {},
        };
        roomInfo.roomState = searchState;
        //测试代码结束
        this.roomName.text = roomInfo.hostName + " 's game";
        this.gameType.text = roomInfo.gameType;
        this.gameTime.text = roomInfo.gameTime;
        this.gameDate.text = roomInfo.gameDate;
        this.player1.text = roomInfo.player1;
        this.player2.text = roomInfo.player2;
        this.player3.text = roomInfo.player3;
        this.player4.text = roomInfo.player4;
        this.addStar4Me();
        this.player4.textFlow = [{ text: this.player4.text, style: { "underline": true } }];
        this.setPlayerTimer(roomInfo);
        roomState = roomInfo.roomState;
        this.setBtn(roomInfo);
        this.gameStateVS.selectedIndex = roomState - 1;
    };
    Room.prototype.setBtn = function (roomInfo) {
        this.quit.visible = false;
        this.dismiss.visible = false;
        this.surrender.visible = false;
        this.start.visible = false;
        this.curtain.visible = false;
        this.hint.visible = false;
        this.start.visible = false;
        if (roomInfo.roomState == 2) {
            var isPlayer = false;
            if (username == roomInfo.player1) {
                isPlayer = true;
            }
            if (username == roomInfo.player2) {
                isPlayer = true;
            }
            if (username == roomInfo.player3) {
                isPlayer = true;
            }
            if (username == roomInfo.player4) {
                isPlayer = true;
            }
            if (isPlayer) {
                this.surrender.visible = true;
            }
            else {
                this.quit.visible = true;
            }
        }
        else if (roomInfo.roomState == 1) {
            this.curtain.visible = true;
            this.hint.visible = true;
            if (roomInfo.hostName == username) {
                this.dismiss.visible = true;
                this.start.visible = true;
            }
            else {
                this.quit.visible = true;
            }
        }
        else {
            this.quit.visible = true;
        }
    };
    Room.prototype.addStar4Me = function () {
        if (this.player1.text == username) {
            this.player1.text = "*" + this.player1.text;
        }
        ;
        if (this.player2.text == username) {
            this.player2.text = "*" + this.player2.text;
        }
        ;
        if (this.player3.text == username) {
            this.player3.text = "*" + this.player3.text;
        }
        ;
        if (this.player4.text == username) {
            this.player4.text = "*" + this.player4.text;
        }
        ;
    };
    Room.prototype.noStar = function (str) {
        if (str.charAt(0) == "*") {
            str = str.slice(1, str.length);
        }
        return str;
    };
    Room.prototype.setPlayerTimer = function (roomInfo) {
        this.timerA1.text = this.S2MMSS(roomInfo.timerA1);
        this.timerB1.text = this.S2MMSS(roomInfo.timerB1);
        this.timerA2.text = this.S2MMSS(roomInfo.timerA2);
        this.timerB2.text = this.S2MMSS(roomInfo.timerB2);
        this.timerA3.text = this.S2MMSS(roomInfo.timerA3);
        this.timerB3.text = this.S2MMSS(roomInfo.timerB3);
        this.timerA4.text = this.S2MMSS(roomInfo.timerA4);
        this.timerB4.text = this.S2MMSS(roomInfo.timerB4);
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
    return Room;
}(eui.Component));
__reflect(Room.prototype, "Room", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Room.js.map