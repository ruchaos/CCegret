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
var Piece = (function (_super) {
    __extends(Piece, _super);
    function Piece(belong, pieceName, revive) {
        var _this = _super.call(this) || this;
        _this.skillname = "";
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "resource/custom_skins/Piece.exml";
        //var bl=['x','A','F','W','E'];
        _this.pieceName = pieceName;
        _this.pieceType = pieceName[1];
        // if(revive){
        // 	picName=bl[belong]+this.pieceType+'r';
        // }else{
        // 	picName=bl[belong]+this.pieceType;
        // }
        var picName = "";
        if (revive) {
            picName = pieceName[0] + pieceName[1] + 'r';
        }
        else {
            picName = pieceName[0] + pieceName[1];
        }
        //A气（Air） F火（Fire） W水(Water) E土（Earth）
        //E元素师(Elementalist) D预言师(Diviner) N死灵师(Necromancer) W权杖（Wand） P力场师（Psychic) I幻术师（Illusionist） S召唤师(Summoner) M召唤兽(Monster)
        _this.p.source = "resource/pic/game/" + picName + ".png";
        _this.s.source = "resource/pic/game/" + picName + "s.png";
        _this.selected = false;
        _this.belong = belong;
        _this.revive = revive;
        _this.restricted = false;
        if (_this.pieceType == "W" || _this.pieceType == "M") {
            _this.maxmoves = 1;
        }
        else if (_this.pieceType == "N" || _this.pieceType == "P") {
            _this.maxmoves = 2;
        }
        else if (_this.pieceType == "D" || _this.pieceType == "I") {
            _this.maxmoves = 3;
        }
        else if (_this.pieceType == "E" || _this.pieceType == "S") {
            _this.maxmoves = 4;
        }
        if (_this.pieceType == "I") {
            _this.setInvisable(true);
        }
        else {
            _this.setInvisable(false);
        }
        _this.LDE = 0; //live=0,death=1,exiled=2
        return _this;
    }
    Piece.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Piece.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Piece.prototype.uiCompHandler = function () {
        this.addListeners();
    };
    Piece.prototype.addListeners = function () {
        // this.p.addEventListener(egret.TouchEvent.TOUCH_TAP,this.setSelect1,this);
        // this.s.addEventListener(egret.TouchEvent.TOUCH_TAP,this.setSelect0,this);
    };
    Piece.prototype.switchSelect = function () {
        if (this.selected) {
            this.p.visible = false;
            this.s.visible = true;
        }
        else {
            this.s.visible = false;
            this.p.visible = true;
        }
    };
    Piece.prototype.setSelect = function (select) {
        this.selected = select;
        this.switchSelect();
    };
    Piece.prototype.setSelect1 = function () {
        var GameEvent = new GAMEEVENT(GAMEEVENT.PIECESELECTED);
        GameEvent.pieceName = this.pieceName;
        GameEvent.pieceType = this.pieceType;
        GameEvent.pieceBelong = this.belong;
        GameEvent.piecePname = this.Pname;
        GameEvent.piecePx = this.Px;
        GameEvent.piecePy = this.Py;
        this.dispatchEvent(GameEvent);
        this.setSelect(true);
    };
    Piece.prototype.setSelect0 = function () {
        var GameEvent = new GAMEEVENT(GAMEEVENT.SELECTEDCANCELED);
        GameEvent.pieceName = this.pieceName;
        GameEvent.pieceType = this.pieceType;
        GameEvent.pieceBelong = this.belong;
        GameEvent.piecePname = this.Pname;
        GameEvent.piecePx = this.Px;
        GameEvent.piecePy = this.Py;
        this.dispatchEvent(GameEvent);
        this.setSelect(false);
    };
    Piece.prototype.getSelect = function () {
        return this.selected;
    };
    Piece.prototype.getName = function () {
        return this.pieceName;
    };
    Piece.prototype.setInvisable = function (invisable) {
        this.invisable = invisable;
        if (invisable) {
            this.p.alpha = 0.6;
            this.s.alpha = 0.6;
        }
        else {
            this.p.alpha = 1;
            this.s.alpha = 1;
        }
    };
    Piece.prototype.setRestrict = function (restrict) {
        this.restricted = restrict;
        this.restrict.visible = restrict;
    };
    return Piece;
}(eui.Component));
__reflect(Piece.prototype, "Piece", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Piece.js.map