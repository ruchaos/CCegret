class LOBBYEVENT extends egret.Event{
	public constructor(type:string, bubbles:boolean=false, cancelable:boolean=false)
    {
        super(type,bubbles,cancelable);
    }

	public static OPEN:string="OPEN_PAGE";
	public static LOGIN:string="LOGIN";
	public static LOGOUT:string="LOGOUT";
	public static ENTERROOM:string="ENTERROOM";

	public pageName:string="Home";
	public roomID:string;
	public roomState:number;
	public username:string;
}