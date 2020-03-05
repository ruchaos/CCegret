class GameItem extends eui.ItemRenderer{
	public constructor() {
		super();
		this.addEventListener(eui.UIEvent.COMPLETE,this.uiCompHandler,this);
		this.skinName="resource/custom_skins/GameItem.exml";
	
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();		
	}
	
	protected dataChanged():void{
		this.hostName.text=this.data.hostName+" 's game";
	}
//加载完成添加监听
	private uiCompHandler():void{
		this.addListeners();
		this.init();		
	}
//方法
	//添加监听
	private addListeners():void{
		this.roomEnter.addEventListener(egret.TouchEvent.TOUCH_TAP,this.roomEnterHandler,this)

	}
	//初始化
	private init():void{

	}

//监听的Handlers
	private roomEnterHandler():void{
		if(this.data.roomState==2){
			var LobbyEvent:LOBBYEVENT=new LOBBYEVENT(LOBBYEVENT.ENTERROOM);
			LobbyEvent.roomID=this.data.roomID;
			LobbyEvent.roomState=this.data.roomState;
			this.parent.parent.parent.dispatchEvent(LobbyEvent);
		}else if(isLogin||this.data.roomState!=1){
			var LobbyEvent:LOBBYEVENT=new LOBBYEVENT(LOBBYEVENT.ENTERROOM);
			LobbyEvent.roomID=this.data.roomID;
			LobbyEvent.roomState=this.data.roomState;
			this.parent.parent.parent.dispatchEvent(LobbyEvent);
		}else{
			Toast.launch("请先登录");
		}

		
	}


//定义
	private roomState:number;//1-等待中；2-进行中；3-已结束；4-当前游戏

	private roomEnter:eui.Button;
	private hostName:eui.Label;
	private gameType:eui.Label;
	private gameTime:eui.Label;
	private gameDate:eui.Label;

}