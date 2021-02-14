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
var Target = (function (_super) {
    __extends(Target, _super);
    function Target(type, Px, Py) {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/custom_skins/Target.exml";
        var typeimg = "";
        if (type == 1) {
            typeimg = "destination";
        }
        else {
            typeimg = "skilltarget";
        }
        _this.targeting.source = "resource/pic/game/" + typeimg + ".png";
        _this.Px = Px;
        _this.Py = Py;
        _this.hold = false;
        return _this;
    }
    Target.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Target.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return Target;
}(eui.Component));
__reflect(Target.prototype, "Target", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Target.js.map