class Piece extends eui.Component implements  eui.UIComponent {
	public constructor(belong:number,pieceName:string) {
		super();
		this.addEventListener(eui.UIEvent.COMPLETE,this.uiCompHandler,this);
		this.skinName="resource/custom_skins/Piece.exml";


		//var bl=['x','A','F','W','E'];
		
		this.pieceName=pieceName;
		this.pieceType=pieceName[1];
		

		// if(revive){
		// 	picName=bl[belong]+this.pieceType+'r';
		// }else{
		// 	picName=bl[belong]+this.pieceType;
		// }

		var picName="";

		
			
		picName=pieceName[0]+pieceName[1];
		

		//A气（Air） F火（Fire） W水(Water) E土（Earth）
		//E元素师(Elementalist) D预言师(Diviner) N死灵师(Necromancer) W权杖（Wand） P力场师（Psychic) I幻术师（Illusionist） S召唤师(Summoner) M召唤兽(Monster)

		this.p.source="resource/pic/game/"+picName+".png";
		this.s.source="resource/pic/game/"+picName+"s.png";

		this.selected=false;

		this.belong=belong;		
		this.revive=false;

		this.restricted=false;

		if(this.pieceType=="W"||this.pieceType=="M"){
			this.maxmoves=1;
		}else if(this.pieceType=="N"||this.pieceType=="P"){
			this.maxmoves=2;
		}else if(this.pieceType=="D"||this.pieceType=="I"){
			this.maxmoves=3;
		}else if(this.pieceType=="E"||this.pieceType=="S"){
			this.maxmoves=4;
		}
		
		if(this.pieceType=="I"){			
			this.setInvisable(true);
		}else{			
			this.setInvisable(false);
		}
		this.LDE=0;//live=0,death=1,exiled=2
		
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}

	private uiCompHandler():void{
		this.addListeners();		
	}

	private addListeners():void{
		// this.p.addEventListener(egret.TouchEvent.TOUCH_TAP,this.setSelect1,this);
		// this.s.addEventListener(egret.TouchEvent.TOUCH_TAP,this.setSelect0,this);

	}

	private switchSelect():void{
		if(this.selected){
			this.p.visible=false;
			this.s.visible=true;
		}else{
			this.s.visible=false;
			this.p.visible=true;
		}
	}

	public setRevive(revive:boolean):void{
		this.revive=revive;
		var picName="";		
			
		picName=this.pieceName[0]+this.pieceName[1];
		if(revive){
			picName=picName+"r";
		}
		
		//A气（Air） F火（Fire） W水(Water) E土（Earth）
		//E元素师(Elementalist) D预言师(Diviner) N死灵师(Necromancer) W权杖（Wand） P力场师（Psychic) I幻术师（Illusionist） S召唤师(Summoner) M召唤兽(Monster)

		this.p.source="resource/pic/game/"+picName+".png";
		this.s.source="resource/pic/game/"+picName+"s.png";

	}

	public setSelect(select:boolean):void{
		this.selected=select;
		this.switchSelect();
	}

	private setSelect1():void{
		var GameEvent:GAMEEVENT=new GAMEEVENT(GAMEEVENT.PIECESELECTED);
		GameEvent.pieceName=this.pieceName;
		GameEvent.pieceType=this.pieceType;
		GameEvent.pieceBelong=this.belong;
		GameEvent.piecePname=this.Pname;
		GameEvent.piecePx=this.Px;
		GameEvent.piecePy=this.Py;
		this.dispatchEvent(GameEvent);

		this.setSelect(true);
	}

	private setSelect0():void{
		var GameEvent:GAMEEVENT=new GAMEEVENT(GAMEEVENT.SELECTEDCANCELED);
		GameEvent.pieceName=this.pieceName;
		GameEvent.pieceType=this.pieceType;
		GameEvent.pieceBelong=this.belong;
		GameEvent.piecePname=this.Pname;
		GameEvent.piecePx=this.Px;
		GameEvent.piecePy=this.Py;
		this.dispatchEvent(GameEvent);

		this.setSelect(false);
	}

	public getSelect():boolean{
		return this.selected;
	}

	public getName():string{
		return this.pieceName;
	}

	public setInvisable(invisable:boolean):void{
		this.invisable=invisable;
		if(invisable){
			this.p.alpha=0.6;
			this.s.alpha=0.6;
		}else{
			this.p.alpha=1;
			this.s.alpha=1;
		}

	}

	public setRestrict(restrict:boolean):void{
		this.restricted=restrict;
		this.restrict.visible=restrict;
	}
		
	private selected:boolean;

	public piece:eui.Group;	
	public p:eui.Image;
	public s:eui.Image;
	public restrict:eui.Image;



	public skill:eui.Image;
	public skillname:string="";


	public pieceName:string;
	public belong:number;
	public pieceType:string;
	public revive:boolean;

	public LDE:number;//live=0,death=1,exiled=2	

	public restricted:boolean;
	public invisable:boolean;	
	public maxmoves:number;

	public Pname:string;
	public Px:number;
	public Py:number;
}