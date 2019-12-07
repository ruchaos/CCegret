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
var Toast = (function (_super) {
    __extends(Toast, _super);
    function Toast(msg, w, h) {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/custom_skins/ToastUI.exml";
        _this.toastMsg.text = msg;
        _this.anchorOffsetX = _this.width / 2;
        _this.anchorOffsetY = _this.height / 2;
        _this.x = w / 2;
        _this.y = h * 1 / 3;
        _this.alpha = 0;
        egret.Tween.get(_this)
            .to({ alpha: 1 }, 600, egret.Ease.quintOut)
            .wait(1200)
            .to({ alpha: 0 }, 1200, egret.Ease.quintIn).call(function () {
            if (_this.parent) {
                _this.parent.removeChild(_this);
            }
        });
        return _this;
    }
    Toast.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Toast.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Toast.init = function (cont) {
        this._cont = cont;
    };
    Toast.launch = function (msg) {
        if (this._cont) {
            var toast = new Toast(msg, this._cont.stage.stageWidth, this._cont.stage.stageHeight);
            this._cont.addChild(toast);
        }
    };
    return Toast;
}(eui.Component));
__reflect(Toast.prototype, "Toast", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=ToastUI.js.map