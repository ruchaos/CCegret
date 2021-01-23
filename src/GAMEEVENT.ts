class GAMEEVENT extends egret.Event{
	public constructor(type:string, bubbles:boolean=false, cancelable:boolean=false)
    {
        super(type,bubbles,cancelable);
    }

	public static PIECESELECTED:string="PIECESELECTED";
	public static SELECTEDCANCELED:string="SELECTEDCANCELED";

	public pieceName:string;
	public pieceBelong:number;
	public pieceType:string;
	public piecePx:number;
	public piecePy:number;
	public piecePname:string;

}