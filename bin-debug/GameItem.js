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
var GameItem = (function (_super) {
    __extends(GameItem, _super);
    function GameItem() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "resource/custom_skins/GameItem.exml";
        return _this;
    }
    GameItem.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    GameItem.prototype.dataChanged = function () {
        this.hostName.text = this.data.hostName + " 's game";
    };
    //加载完成添加监听
    GameItem.prototype.uiCompHandler = function () {
        this.addListeners();
        this.init();
    };
    //方法
    //添加监听
    GameItem.prototype.addListeners = function () {
        this.roomEnter.addEventListener(egret.TouchEvent.TOUCH_TAP, this.roomEnterHandler, this);
    };
    //初始化
    GameItem.prototype.init = function () {
    };
    //监听的Handlers
    GameItem.prototype.roomEnterHandler = function () {
        //todo重写 改为先判断登录，然后请求服务器，如果可以进入则进入并跳转，如果不可以则toast错误信息。
        //连接socketio，然后申请“create”，{hostName：username,gameType:gameType,gameTime:gameTime}
        //on("created",function(data) {进入房间页面，roomID，roomState,“host”}）
        if (this.data.roomState == 2) {
            var LobbyEvent = new LOBBYEVENT(LOBBYEVENT.ENTERROOM);
            LobbyEvent.roomID = this.data.roomID;
            LobbyEvent.roomState = this.data.roomState;
            this.parent.parent.parent.dispatchEvent(LobbyEvent);
        }
        else if (isLogin || this.data.roomState != 1) {
            var LobbyEvent = new LOBBYEVENT(LOBBYEVENT.ENTERROOM);
            LobbyEvent.roomID = this.data.roomID;
            LobbyEvent.roomState = this.data.roomState;
            this.parent.parent.parent.dispatchEvent(LobbyEvent);
        }
        else {
            Toast.launch("请先登录");
        }
    };
    return GameItem;
}(eui.ItemRenderer));
__reflect(GameItem.prototype, "GameItem");
