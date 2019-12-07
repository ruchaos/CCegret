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
var Person = (function (_super) {
    __extends(Person, _super);
    function Person() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "resource/custom_skins/Person.exml";
        return _this;
    }
    Person.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Person.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    //加载完成添加监听	
    Person.prototype.uiCompHandler = function () {
        this.addListeners();
        this.init();
    };
    Person.prototype.addListeners = function () {
        this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnCloseHandler, this);
        this.curtain.addEventListener(egret.TouchEvent.TOUCH_TAP, this.curtainHandler, this);
        this.btnSubmit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnSubmitHandler, this);
        this.toChangePW.addEventListener(egret.TouchEvent.TOUCH_TAP, this.toChangePWHandler, this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    };
    Person.prototype.init = function () {
        this.title.text = "hi," + username;
        var req = { type: "record", username: "" };
        req.username = username;
        this.httppost(RecordSrv, req);
    };
    Person.prototype.httppost = function (url, params) {
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        //设置方法为POST
        request.open(url, egret.HttpMethod.POST);
        //设置响应头为json
        request.setRequestHeader("Content-Type", "application/json");
        //对象转化为json文本
        var req = JSON.stringify(params);
        request.send(req);
        request.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onPostIOError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.onPostProgress, this);
    };
    Person.prototype.onGetComplete = function (event) {
        //根据msg.type分别处理
        var request = event.currentTarget;
        var res = JSON.parse(request.response);
        if (res.type) {
            //验证类别
            switch (res.type) {
                case "record":
                    this.games.text = "您已进行了" + res.record.toString() + "场游戏";
                    break;
                case "error":
                    this.games.text = "错误，尚未查出您的战绩";
                    break;
            }
        }
    };
    Person.prototype.onPostIOError = function (event) {
        Toast.launch("IOError");
        console.log("post error : " + event);
    };
    Person.prototype.onPostProgress = function (event) {
        console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    };
    Person.prototype.curtainHandler = function () {
        this.closePanel();
    };
    Person.prototype.btnCloseHandler = function () {
        this.closePanel();
    };
    Person.prototype.btnSubmitHandler = function () {
        var LobbyEvent = new LOBBYEVENT(LOBBYEVENT.LOGOUT);
        this.dispatchEvent(LobbyEvent);
        this.closePanel();
    };
    Person.prototype.toChangePWHandler = function () {
        var LobbyEvent = new LOBBYEVENT(LOBBYEVENT.OPEN);
        LobbyEvent.pageName = "ChangePW";
        this.dispatchEvent(LobbyEvent);
        this.closePanel();
    };
    Person.prototype.closePanel = function () {
        this.parent.removeChild(this);
    };
    return Person;
}(eui.Component));
__reflect(Person.prototype, "Person", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Person.js.map