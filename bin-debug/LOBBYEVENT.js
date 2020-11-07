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
var LOBBYEVENT = (function (_super) {
    __extends(LOBBYEVENT, _super);
    function LOBBYEVENT(type, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        var _this = _super.call(this, type, bubbles, cancelable) || this;
        _this.pageName = "Home";
        return _this;
    }
    LOBBYEVENT.OPEN = "OPEN_PAGE";
    LOBBYEVENT.LOGIN = "LOGIN";
    LOBBYEVENT.LOGOUT = "LOGOUT";
    LOBBYEVENT.ENTERROOM = "ENTERROOM";
    LOBBYEVENT.SOCKETMSG = "SOCKETMSG";
    return LOBBYEVENT;
}(egret.Event));
__reflect(LOBBYEVENT.prototype, "LOBBYEVENT");
//# sourceMappingURL=LOBBYEVENT.js.map