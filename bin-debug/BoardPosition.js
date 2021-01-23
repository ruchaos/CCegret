var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BoardPostion = (function () {
    function BoardPostion() {
        this.Piece = null;
        this.connect = [1, 1, 1, 1, 0, 0, 0, 0];
        //up-0,down-1,left-2,right-3,↖leftup-4，↗rightup-5，↙leftdown-6，↘rightdown-7
        this.up = 1;
        this.down = 1;
        this.left = 1;
        this.right = 1;
        this.leftup = 0;
        this.rightup = 0;
        this.leftdown = 0;
        this.rightdown = 0;
        this.Aenchant = 0;
        this.Fenchant = 0;
        this.Wenchant = 0;
        this.Eenchant = 0;
        this.Afield = 0;
        this.Ffield = 0;
        this.Wfield = 0;
        this.Efield = 0;
    }
    return BoardPostion;
}());
__reflect(BoardPostion.prototype, "BoardPostion");
//# sourceMappingURL=BoardPosition.js.map