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
var Create = (function (_super) {
    __extends(Create, _super);
    function Create() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "resource/custom_skins/Create.exml";
        return _this;
    }
    Create.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Create.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    //加载完成添加监听	
    Create.prototype.uiCompHandler = function () {
        this.addListeners();
        this.init();
    };
    Create.prototype.init = function () {
        this.hostName = username;
        this.title.text = this.hostName + " 's game";
        this.type4Handler();
        this.time1Handler();
    };
    //添加各按钮监听
    Create.prototype.addListeners = function () {
        this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnCloseHandler, this);
        this.curtain.addEventListener(egret.TouchEvent.TOUCH_TAP, this.curtainHandler, this);
        this.btnSubmit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnSubmitHandler, this);
        this.type1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.type1Handler, this);
        this.type2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.type2Handler, this);
        this.type4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.type4Handler, this);
        this.time1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.time1Handler, this);
        this.time2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.time2Handler, this);
        this.time3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.time3Handler, this);
    };
    //handlers
    //curtain
    Create.prototype.curtainHandler = function () {
        this.closePanel();
    };
    //close
    Create.prototype.btnCloseHandler = function () {
        this.closePanel();
    };
    //提交
    Create.prototype.btnSubmitHandler = function () {
        var data = { username: "", token: "", gameName: "", gameType: 1, gameTime: 1 };
        data.username = username;
        data.token = token;
        data.gameName = username + " 's game";
        data.gameType = this.gameType;
        data.gameTime = this.gameTime;
        var disapthcher = this;
        //提交 username time type
        socket.emit("CreateRoom", data);
        this.closePanel();
        //如果成功，关闭对话框，发出事件，携带房间ID
        // socket.on("EnterRoomSuccessAfterCreate",(roomData)=>{
        // 	console.log("Server:EnterRoomSuccessAfterCreate");
        // 	var LobbyEvent:LOBBYEVENT=new LOBBYEVENT(LOBBYEVENT.ENTERROOM);			
        // 	LobbyEvent.roomData=roomData;
        // 	disapthcher.dispatchEvent(LobbyEvent);
        // });
        // var success=true;
        // var roomID:number=1234;//测试
        // if(success){
        // 	var LobbyEvent:LOBBYEVENT=new LOBBYEVENT(LOBBYEVENT.ENTERROOM);
        // 	LobbyEvent.roomID=roomID;
        // 	LobbyEvent.roomState=1;
        // 	this.parent.parent.parent.dispatchEvent(LobbyEvent);
        // }
        //（事件由Main完成，进入指定ID的ROOM，并移除HOME）
    };
    //type1 2 3 
    Create.prototype.type1Handler = function () {
        //设置样式
        this.setBtnTypeFocus(this.type1);
        //修改数据
        this.gameType = 1; //1-1V1模式
        //修改提示文本
        this.typehint.text = "每人控制两方棋子，房主决定先后手";
    };
    Create.prototype.type2Handler = function () {
        //设置样式
        this.setBtnTypeFocus(this.type2);
        //修改数据
        this.gameType = 2; //2-2V2模式
        //修改提示文本
        this.typehint.text = "每人各控制一方棋子";
    };
    Create.prototype.type4Handler = function () {
        //设置样式
        this.setBtnTypeFocus(this.type4);
        //修改数据
        this.gameType = 4; //4-1V1 随机先手
        //修改提示文本
        this.typehint.text = "每人控制两方棋子，随机先后手";
    };
    //time1 2 3
    Create.prototype.time1Handler = function () {
        //设置样式
        this.setBtnTimeFocus(this.time1);
        //修改数据
        this.gameTime = 1; //1-快棋
        //修改提示文本
        this.timehint.text = "每步1分钟，步超时消耗长考时间，长考时间每人10分钟";
    };
    Create.prototype.time2Handler = function () {
        //设置样式
        this.setBtnTimeFocus(this.time2);
        //修改数据
        this.gameTime = 2; //2-长考
        //修改提示文本
        this.timehint.text = "每人45分钟包干，单步不限时长，包干时间用尽1分钟读秒";
    };
    Create.prototype.time3Handler = function () {
        //设置样式
        this.setBtnTimeFocus(this.time3);
        //修改数据
        this.gameTime = 3; //3-不限
        //修改提示文本
        this.timehint.text = "不限步时长（游戏最多保留24小时）";
    };
    //页面方法
    //关闭此dialog
    Create.prototype.closePanel = function () {
        this.parent.removeChild(this);
    };
    //type组样式
    Create.prototype.setBtnTypeFocus = function (btn) {
        this.type1.selected = false;
        this.type2.selected = false;
        this.type4.selected = false;
        btn.selected = true;
    };
    //time组样式
    Create.prototype.setBtnTimeFocus = function (btn) {
        this.time1.selected = false;
        this.time2.selected = false;
        this.time3.selected = false;
        btn.selected = true;
    };
    return Create;
}(eui.Component));
__reflect(Create.prototype, "Create", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Create.js.map