var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Notation = (function () {
    function Notation() {
        this.currentPostions = [
            { pieceName: "AE", belong: 1, pieceType: "E", revive: false, LDE: 0, Px: 2, Py: 0 },
            { pieceName: "AD", belong: 1, pieceType: "D", revive: false, LDE: 0, Px: 3, Py: 0 },
            { pieceName: "AN", belong: 1, pieceType: "N", revive: false, LDE: 0, Px: 4, Py: 0 },
            { pieceName: "AW", belong: 1, pieceType: "W", revive: false, LDE: 0, Px: 5, Py: 0 },
            { pieceName: "AP", belong: 1, pieceType: "P", revive: false, LDE: 0, Px: 6, Py: 0 },
            { pieceName: "AI", belong: 1, pieceType: "I", revive: false, LDE: 0, Px: 7, Py: 0 },
            { pieceName: "AS", belong: 1, pieceType: "S", revive: false, LDE: 0, Px: 8, Py: 0 },
            { pieceName: "AM1", belong: 1, pieceType: "M1", revive: false, LDE: 2, Px: 0, Py: 0 },
            { pieceName: "AM2", belong: 1, pieceType: "M2", revive: false, LDE: 2, Px: 0, Py: 0 },
            { pieceName: "AM3", belong: 1, pieceType: "M3", revive: false, LDE: 2, Px: 0, Py: 0 },
            { pieceName: "AM4", belong: 1, pieceType: "M4", revive: false, LDE: 2, Px: 0, Py: 0 },
            { pieceName: "FE", belong: 2, pieceType: "E", revive: false, LDE: 0, Px: 0, Py: 8 },
            { pieceName: "FD", belong: 2, pieceType: "D", revive: false, LDE: 0, Px: 0, Py: 7 },
            { pieceName: "FN", belong: 2, pieceType: "N", revive: false, LDE: 0, Px: 0, Py: 6 },
            { pieceName: "FW", belong: 2, pieceType: "W", revive: false, LDE: 0, Px: 0, Py: 5 },
            { pieceName: "FP", belong: 2, pieceType: "P", revive: false, LDE: 0, Px: 0, Py: 4 },
            { pieceName: "FI", belong: 2, pieceType: "I", revive: false, LDE: 0, Px: 0, Py: 3 },
            { pieceName: "FS", belong: 2, pieceType: "S", revive: false, LDE: 0, Px: 0, Py: 2 },
            { pieceName: "FM1", belong: 2, pieceType: "M1", revive: false, LDE: 2, Px: 0, Py: 0 },
            { pieceName: "FM2", belong: 2, pieceType: "M2", revive: false, LDE: 2, Px: 0, Py: 0 },
            { pieceName: "FM3", belong: 2, pieceType: "M3", revive: false, LDE: 2, Px: 0, Py: 0 },
            { pieceName: "FM4", belong: 2, pieceType: "M4", revive: false, LDE: 2, Px: 0, Py: 0 },
            { pieceName: "WE", belong: 3, pieceType: "E", revive: false, LDE: 0, Px: 8, Py: 10 },
            { pieceName: "WD", belong: 3, pieceType: "D", revive: false, LDE: 0, Px: 7, Py: 10 },
            { pieceName: "WN", belong: 3, pieceType: "N", revive: false, LDE: 0, Px: 6, Py: 10 },
            { pieceName: "WW", belong: 3, pieceType: "W", revive: false, LDE: 0, Px: 5, Py: 10 },
            { pieceName: "WP", belong: 3, pieceType: "P", revive: false, LDE: 0, Px: 4, Py: 10 },
            { pieceName: "WI", belong: 3, pieceType: "I", revive: false, LDE: 0, Px: 3, Py: 10 },
            { pieceName: "WS", belong: 3, pieceType: "S", revive: false, LDE: 0, Px: 2, Py: 10 },
            { pieceName: "WM1", belong: 3, pieceType: "M1", revive: false, LDE: 2, Px: 0, Py: 0 },
            { pieceName: "WM2", belong: 3, pieceType: "M2", revive: false, LDE: 2, Px: 0, Py: 0 },
            { pieceName: "WM3", belong: 3, pieceType: "M3", revive: false, LDE: 2, Px: 0, Py: 0 },
            { pieceName: "WM4", belong: 3, pieceType: "M4", revive: false, LDE: 2, Px: 0, Py: 0 },
            { pieceName: "EE", belong: 4, pieceType: "E", revive: false, LDE: 0, Px: 10, Py: 2 },
            { pieceName: "ED", belong: 4, pieceType: "D", revive: false, LDE: 0, Px: 10, Py: 3 },
            { pieceName: "EN", belong: 4, pieceType: "N", revive: false, LDE: 0, Px: 10, Py: 4 },
            { pieceName: "EW", belong: 4, pieceType: "W", revive: false, LDE: 0, Px: 10, Py: 5 },
            { pieceName: "EP", belong: 4, pieceType: "P", revive: false, LDE: 0, Px: 10, Py: 6 },
            { pieceName: "EI", belong: 4, pieceType: "I", revive: false, LDE: 0, Px: 10, Py: 7 },
            { pieceName: "ES", belong: 4, pieceType: "S", revive: false, LDE: 0, Px: 10, Py: 8 },
            { pieceName: "EM1", belong: 4, pieceType: "M1", revive: false, LDE: 2, Px: 0, Py: 0 },
            { pieceName: "EM2", belong: 4, pieceType: "M2", revive: false, LDE: 2, Px: 0, Py: 0 },
            { pieceName: "EM3", belong: 4, pieceType: "M3", revive: false, LDE: 2, Px: 0, Py: 0 },
            { pieceName: "EM4", belong: 4, pieceType: "M4", revive: false, LDE: 2, Px: 0, Py: 0 }
        ];
        this.currentboard = [
            ["", "", "AE", "AD", "AN", "AW", "AP", "AI", "AS", "", ""],
            ["", "", "", "", "", "", "", "", "", "", ""],
            ["FS", "", "", "", "", "", "", "", "", "", "EE"],
            ["FI", "", "", "", "", "", "", "", "", "", "ED"],
            ["FP", "", "", "", "", "", "", "", "", "", "EN"],
            ["FW", "", "", "", "", "", "", "", "", "", "EW"],
            ["FN", "", "", "", "", "", "", "", "", "", "EP"],
            ["FD", "", "", "", "", "", "", "", "", "", "EI"],
            ["FE", "", "", "", "", "", "", "", "", "", "ES"],
            ["", "", "", "", "", "", "", "", "", "", ""],
            ["", "", "WS", "WI", "WP", "WW", "WN", "WD", "WE", "", ""]
        ];
        this.currentPlayer = 1;
        this.moveHistory = [];
        this.boardHistory = [];
        this.boardHistory.push(this.currentboard);
    }
    Notation.prototype.movePiece = function (pieceName, nPx, nPy) {
        for (var i = 0; i < this.currentPostions.length; i++) {
            if (this.currentPostions[i].pieceName == pieceName) {
                this.currentPostions[i].Px = nPx;
                this.currentPostions[i].Py = nPy;
            }
        }
    };
    return Notation;
}());
__reflect(Notation.prototype, "Notation");
//# sourceMappingURL=Notation.js.map