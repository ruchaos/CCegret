class Room extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
		this.addEventListener(eui.UIEvent.COMPLETE,this.uiCompHandler,this);
		this.skinName="resource/custom_skins/Room.exml";
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
		this.quit.addEventListener(egret.TouchEvent.TOUCH_TAP,this.quitHandler,this);
		this.dismiss.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dismissHandler,this);
		this.kick1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.kick1Handler,this);
		this.kick2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.kick2Handler,this);
		this.kick3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.kick3Handler,this);
		this.kick4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.kick4Handler,this);
		this.switch12.addEventListener(egret.TouchEvent.TOUCH_TAP,this.switch12Handler,this);
		this.switch23.addEventListener(egret.TouchEvent.TOUCH_TAP,this.switch23Handler,this);
		this.switch34.addEventListener(egret.TouchEvent.TOUCH_TAP,this.switch34Handler,this);
		this.drawoffer.addEventListener(egret.TouchEvent.TOUCH_TAP,this.drawofferHandler,this);
		this.surrender.addEventListener(egret.TouchEvent.TOUCH_TAP,this.surrenderHandler,this);
	}

	private quitHandler():void{
		this.BacktoHome();
	}

	private dismissHandler():void{
		this.BacktoHome();
	}

	private drawofferHandler():void{
		if(this.drawoffer.selected==true){
			Toast.launch("正在提合，再次点击取消");
		}else{
			Toast.launch("已取消提合");
		}
		
		//如果当前是按下状态，向服务器提交设置为提合，否则设置为未提合
	}

	private surrenderHandler():void{
		//如果当前是按下状态，向服务器提交设置为提合，否则设置为未提合	
		this.BacktoHome();
	}		

	private kick1Handler():void{

	}
	private kick2Handler():void{

	}
	private kick3Handler():void{

	}
	private kick4Handler():void{

	}

	private switch12Handler():void{
		
	}
	private switch23Handler():void{

	}
	private switch34Handler():void{

	}

	private updateRoomInfo():void{
		this.init(this.roomID,this.roomState);
	}
	


	public init(roomID:number,searchState:number):void{
		//roomState如果是3，则查询棋谱库，否则查询当前房间列表，查询roomID（唯一索引）
		//确定UI内容
		var roomState:number;
		console.log("roomid:"+roomID);
		//测试代码
		roomState=1;//roomState 1-等待中；2-进行中；3-已结束；(4-当前游戏)
		var roomInfo={
			roomID:123,	
			roomState:3,		
			gameType:"2v2",
			gameTime:"快棋",
			gameDate:"20190615",
			hostName:"rux",
			player1:"rux",
			player2:"lynn",
			player3:"rux",
			player4:"lynn",
			timerA1:600,
			timerB1:60,
			timerA2:600,
			timerB2:60,
			timerA3:600,
			timerB3:60,
			timerA4:600,
			timerB4:60,
			ready:true,
			history:{},
		};
		roomInfo.roomState=searchState;

		//测试代码结束
		this.roomID=roomInfo.roomID;
		this.roomState=roomInfo.roomState;

		this.roomName.text=roomInfo.hostName+" 's game";
		this.gameType.text=roomInfo.gameType;
		this.gameTime.text=roomInfo.gameTime;
		this.gameDate.text=roomInfo.gameDate;
		this.player1.text=roomInfo.player1;
		this.player2.text=roomInfo.player2;
		this.player3.text=roomInfo.player3;
		this.player4.text=roomInfo.player4;
		this.addStar4Me();
		this.player1.textFlow=[{text:this.player1.text,style:{"underline":true}}];
		this.setPlayerTimer(roomInfo);
		roomState=roomInfo.roomState;
		this.setBtn(roomInfo);
		this.gameStateVS.selectedIndex=roomState-1;



	}
	private setBtn(roomInfo):void{
		this.quit.visible=false;
		this.dismiss.visible=false;
		this.surrender.visible=false;
		this.start.visible=false;
		this.curtain.visible=false;
		this.hint.visible=false;
		this.start.visible=false;
		this.drawoffer.visible=false;	
		

		if(this.roomState==2){
			var isPlayer=false;
			if(username==roomInfo.player1){
				isPlayer=true;
			}
			if(username==roomInfo.player2){
				isPlayer=true;
			}
			if(username==roomInfo.player3){
				isPlayer=true;
			}
			if(username==roomInfo.player4){
				isPlayer=true;
			}
			
			if(isPlayer){
				this.surrender.visible=true;
				this.drawoffer.visible=true;	
				this.gameDate.visible=false;			
			}else{
				this.quit.visible=true;
				this.gameDate.visible=true;
			}

		}
		else if(this.roomState==1){
			this.curtain.visible=true;
			this.hint.visible=true;
			this.gameDate.visible=true;
			this.kick1.visible=false;
			this.kick2.visible=false;
			this.kick3.visible=false;
			this.kick4.visible=false;
			this.switch12.visible=false;
			this.switch23.visible=false;
			this.switch34.visible=false;
			if(roomInfo.hostName==username){
				this.dismiss.visible=true;
				this.start.visible=true;
				this.kick1.visible=true;
				this.kick2.visible=true;
				this.kick3.visible=true;
				this.kick4.visible=true;
				this.switch12.visible=true;
				this.switch23.visible=true;
				this.switch34.visible=true;
				if(roomInfo.player1==username){
					this.kick1.visible=false;
				}
				if(roomInfo.player2==username){
					this.kick2.visible=false;
				}
				if(roomInfo.player3==username){
					this.kick3.visible=false;
				}
				if(roomInfo.player4==username){
					this.kick4.visible=false;
				}
				

			}else{
				this.quit.visible=true;	
							
			}
		}
		else{
			this.quit.visible=true;
		}
	}
	private addStar4Me():void{
		if(this.player1.text==username){
			this.player1.text="*"+this.player1.text;
		};
		if(this.player2.text==username){
			this.player2.text="*"+this.player2.text;
		};
		if(this.player3.text==username){
			this.player3.text="*"+this.player3.text;
		};		
		if(this.player4.text==username){
			this.player4.text="*"+this.player4.text;
			
		};
	}
	private noStar(str:string):string{
		if(str.charAt(0)=="*"){
			str=str.slice(1,str.length);
		}
		return str;
	}

	private setPlayerTimer(roomInfo):void{
		this.timerA1.text=this.S2MMSS(roomInfo.timerA1);
		this.timerB1.text=this.S2MMSS(roomInfo.timerB1);
		this.timerA2.text=this.S2MMSS(roomInfo.timerA2);
		this.timerB2.text=this.S2MMSS(roomInfo.timerB2);
		this.timerA3.text=this.S2MMSS(roomInfo.timerA3);
		this.timerB3.text=this.S2MMSS(roomInfo.timerB3);
		this.timerA4.text=this.S2MMSS(roomInfo.timerA4);
		this.timerB4.text=this.S2MMSS(roomInfo.timerB4);
	}

	private S2MMSS(seconds:number):string{
		var MMSS:string="00:00";
		var t:number;
		t=seconds%60;
		MMSS=t.toString()
		if(MMSS.length==1){
			MMSS="0"+MMSS;
		}
		t=(seconds-t)/60;
		MMSS=t.toString()+":"+MMSS;
		if(MMSS.length==4){
			MMSS="0"+MMSS;
		}

		return MMSS;
	}



	private BacktoHome():void{
		var LobbyEvent:LOBBYEVENT=new LOBBYEVENT(LOBBYEVENT.OPEN);
		LobbyEvent.pageName="Home";
		this.dispatchEvent(LobbyEvent);
		this.parent.removeChild(this);
	}

	//定义变量
	public roomID:number;
	public roomState:number;


	public roomName:eui.Label;
	public gameType:eui.Label;
	public gameTime:eui.Label;
	public gameDate:eui.Label;
	public quit:eui.Button;
	public dismiss:eui.Button;
	public surrender:eui.Button;
	public drawoffer:eui.ToggleButton;
	public BOARD:eui.Rect;
	public Game:Game;
	public curtain:eui.Rect;
	public hint:eui.Label;
	public start:eui.Button;
	public player1:eui.Label;
	public player2:eui.Label;
	public player3:eui.Label;
	public player4:eui.Label;
	public gameStateVS:eui.ViewStack;
	public switch12:eui.Button;
	public switch23:eui.Button;
	public switch34:eui.Button;
	public kick2:eui.Button;
	public kick3:eui.Button;
	public kick4:eui.Button;
	public kick1:eui.Button;
	public timerA1:eui.Label;
	public timerB1:eui.Label;
	public timerA2:eui.Label;
	public timerB2:eui.Label;
	public timerA3:eui.Label;
	public timerB3:eui.Label;
	public timerA4:eui.Label;
	public timerB4:eui.Label;
	public stepNum:eui.Label;
	public result:eui.Image;
	public beginning:eui.Button;
	public prev:eui.Button;
	public next:eui.Button;

	
}