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
var Login = (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "resource/custom_skins/Login.exml";
        return _this;
    }
    Login.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Login.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    //加载完成添加监听	
    Login.prototype.uiCompHandler = function () {
        this.addListeners();
    };
    Login.prototype.addListeners = function () {
        this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnCloseHandler, this);
        this.curtain.addEventListener(egret.TouchEvent.TOUCH_TAP, this.curtainHandler, this);
        this.btnSubmit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnSubmitHandler, this);
        this.toRegister.addEventListener(egret.TouchEvent.TOUCH_TAP, this.toRegisterHandler, this);
        this.toChangePW.addEventListener(egret.TouchEvent.TOUCH_TAP, this.toChangePWHandler, this);
    };
    Login.prototype.curtainHandler = function () {
        this.closePanel();
    };
    Login.prototype.btnCloseHandler = function () {
        this.closePanel();
    };
    Login.prototype.btnSubmitHandler = function () {
        var username;
        var password;
        var success = false;
        var approved = true;
        if (this.userName.text == "") {
            this.lhintUN.text = " 请填写用户名 ";
            this.lhintUN.visible = true;
            approved = false;
        }
        else {
            this.lhintUN.visible = false;
        }
        if (this.password.text == "") {
            this.lhintPW.text = " 请填写密码 ";
            this.lhintPW.visible = true;
            approved = false;
        }
        else {
            this.lhintPW.visible = false;
        }
        //提交请求
        if (approved) {
            var req = { type: "login", username: "", password: "" };
            req.username = this.userName.text;
            req.password = this.password.text;
            this.httppost(LoginSrv, req);
        }
        //如果成功，则返回主页并
    };
    Login.prototype.LoginSuccess = function (usernamesuccess) {
        var LobbyEvent = new LOBBYEVENT(LOBBYEVENT.LOGIN);
        username = usernamesuccess;
        console.log(usernamesuccess + " 登录成功！");
        this.dispatchEvent(LobbyEvent);
        this.closePanel();
    };
    Login.prototype.LoginFailed = function (error) {
        if (error.username) {
            this.lhintUN.text = error.username;
            this.lhintUN.visible = true;
        }
        ;
        if (error.password) {
            this.lhintPW.text = error.password;
            this.lhintPW.visible = true;
        }
        ;
        Toast.launch("登录失败 " + error.msg);
    };
    //网络部分
    Login.prototype.httppost = function (url, params) {
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
    Login.prototype.onGetComplete = function (event) {
        //根据msg.type分别处理
        var request = event.currentTarget;
        var res = JSON.parse(request.response);
        if (res.type) {
            //验证类别
            switch (res.type) {
                case "login":
                    this.LoginSuccess(res.username);
                    break;
                case "error":
                    this.LoginFailed(res.error);
                    break;
            }
        }
    };
    Login.prototype.onPostIOError = function (event) {
        Toast.launch("IOError");
        console.log("post error : " + event);
    };
    Login.prototype.onPostProgress = function (event) {
        console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    };
    Login.prototype.toRegisterHandler = function () {
        var LobbyEvent = new LOBBYEVENT(LOBBYEVENT.OPEN);
        LobbyEvent.pageName = "Register";
        this.dispatchEvent(LobbyEvent);
        //this.closePanel();
    };
    Login.prototype.toChangePWHandler = function () {
        var LobbyEvent = new LOBBYEVENT(LOBBYEVENT.OPEN);
        LobbyEvent.pageName = "FindPW";
        this.dispatchEvent(LobbyEvent);
        //this.closePanel();
    };
    Login.prototype.closePanel = function () {
        //清除文本
        this.userName.text = "";
        this.password.text = "";
        this.lhintUN.visible = false;
        this.lhintPW.visible = false;
        //关闭面板显示		
        this.parent.removeChild(this);
    };
    return Login;
}(eui.Component));
__reflect(Login.prototype, "Login", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Login.js.map