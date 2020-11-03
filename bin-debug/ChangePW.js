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
var ChangePW = (function (_super) {
    __extends(ChangePW, _super);
    function ChangePW() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "resource/custom_skins/ChangePW.exml";
        return _this;
    }
    ChangePW.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    ChangePW.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    //加载完成添加监听	
    ChangePW.prototype.uiCompHandler = function () {
        this.addListeners();
    };
    ChangePW.prototype.addListeners = function () {
        this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnCloseHandler, this);
        this.curtain.addEventListener(egret.TouchEvent.TOUCH_TAP, this.curtainHandler, this);
        this.btnSubmit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnSubmitHandler, this);
        this.password.addEventListener(egret.FocusEvent.FOCUS_OUT, this.passwordCheck, this);
        this.repeatPW.addEventListener(egret.FocusEvent.FOCUS_OUT, this.repeatPWCheck, this);
        this.clueName.addEventListener(egret.FocusEvent.FOCUS_OUT, this.clueNameCheck, this);
    };
    ChangePW.prototype.curtainHandler = function () {
        this.closePanel();
    };
    ChangePW.prototype.btnCloseHandler = function () {
        this.closePanel();
    };
    ChangePW.prototype.passwordCheck = function () {
        //密码要求 6-18位，英文、数字、符号组合
        var regPW = new RegExp("^[\u0021-\u007E]{6,18}$");
        if (!regPW.test(this.password.text)) {
            this.lhintPW.text = " 密码格式错误 6-18位，英文、数字、符号 ";
            this.lhintPW.visible = true;
            return false;
        }
        else {
            this.lhintPW.visible = false;
            return true;
        }
    };
    ChangePW.prototype.repeatPWCheck = function () {
        //重复密码 与密码相同
        if (this.repeatPW.text != this.password.text) {
            this.lhintRP.text = " 请重复密码 ";
            this.lhintRP.visible = true;
            return false;
        }
        else {
            this.lhintRP.visible = false;
            return true;
        }
    };
    ChangePW.prototype.clueNameCheck = function () {
        //喜欢的角色 非空格 不能为空
        var regCN = new RegExp("^[\u4e00-\u9fa5\u0021-\u007E]{1,18}$");
        if (!regCN.test(this.clueName.text)) {
            this.lhintCN.text = " 不能使用空格或为空 ";
            this.lhintCN.visible = true;
            return false;
        }
        else {
            this.lhintCN.visible = false;
            return true;
        }
    };
    ChangePW.prototype.btnSubmitHandler = function () {
        var success = false;
        var approved = false;
        if (this.passwordCheck() && this.repeatPWCheck() && this.clueNameCheck()) {
            approved = true;
        }
        //提交请求
        if (approved) {
            var req = { type: "changePW", username: "", password: "", cluename: "" };
            req.username = username;
            req.password = this.password.text;
            req.cluename = this.clueName.text;
            this.httppost(ChangePWSrv, req);
        }
    };
    ChangePW.prototype.changePWSuccess = function (usernamesuccess) {
        console.log(usernamesuccess + " 修改成功！");
        var LobbyLogout = new LOBBYEVENT(LOBBYEVENT.LOGOUT);
        this.dispatchEvent(LobbyLogout);
        var LobbyEvent = new LOBBYEVENT(LOBBYEVENT.OPEN);
        LobbyEvent.pageName = "Login";
        LobbyEvent.username = usernamesuccess;
        this.dispatchEvent(LobbyEvent);
        this.closePanel();
    };
    ChangePW.prototype.changePWFailed = function (error) {
        if (error.password) {
            this.lhintPW.text = error.password;
            this.lhintPW.visible = true;
        }
        ;
        if (error.cluename) {
            this.lhintCN.text = error.cluename;
            this.lhintCN.visible = true;
        }
        ;
        Toast.launch("修改失败 " + error.msg);
    };
    //网络部分
    ChangePW.prototype.httppost = function (url, params) {
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
    ChangePW.prototype.onGetComplete = function (event) {
        //根据msg.type分别处理
        var request = event.currentTarget;
        var res = JSON.parse(request.response);
        if (res.type) {
            //验证类别
            switch (res.type) {
                case "changePW":
                    this.changePWSuccess(res.username);
                    break;
                case "error":
                    this.changePWFailed(res.error);
                    break;
            }
        }
    };
    ChangePW.prototype.onPostIOError = function (event) {
        Toast.launch("IOError");
        console.log("post error : " + event);
    };
    ChangePW.prototype.onPostProgress = function (event) {
        console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    };
    ChangePW.prototype.closePanel = function () {
        //清除文本
        this.password.text = "";
        this.repeatPW.text = "";
        this.clueName.text = "";
        this.lhintPW.visible = false;
        this.lhintRP.visible = false;
        this.lhintCN.visible = false;
        //关闭面板显示
        this.parent.removeChild(this);
    };
    return ChangePW;
}(eui.Component));
__reflect(ChangePW.prototype, "ChangePW", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=ChangePW.js.map