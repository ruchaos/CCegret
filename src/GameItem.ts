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
		this.gameName.text=this.data.gameName;
		if(this.data.gameDate==0){
			this.gameDate.text="";
		}
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
		//todo重写 改为先判断登录，然后请求服务器，如果可以进入则进入并跳转，如果不可以则toast错误信息。
		//连接socketio，然后申请“create”，{hostName：username,gameType:gameType,gameTime:gameTime}
		//on("created",function(data) {进入房间页面，roomID，roomState,“host”}）
		
		if(!isLogin){
			Toast.launch("请先登录");
		}else{
			var enterRoom={username:"",token:"",roomID:""};
			enterRoom.username=username;
			enterRoom.token=token;
			enterRoom.roomID=this.data.roomID;
			socket.emit("EnterRoom",enterRoom);
			console.log("emit EnterRoom");
			var disapthcher=this;
		}



		





		// if(this.data.roomState==2){
		// 	var LobbyEvent:LOBBYEVENT=new LOBBYEVENT(LOBBYEVENT.ENTERROOM);
		// 	LobbyEvent.roomID=this.data.roomID;
		// 	LobbyEvent.roomState=this.data.roomState;
		// 	this.parent.parent.parent.dispatchEvent(LobbyEvent);
		// }else if(isLogin||this.data.roomState!=1){
		// 	var LobbyEvent:LOBBYEVENT=new LOBBYEVENT(LOBBYEVENT.ENTERROOM);
		// 	LobbyEvent.roomID=this.data.roomID;
		// 	LobbyEvent.roomState=this.data.roomState;
		// 	this.parent.parent.parent.dispatchEvent(LobbyEvent);
		// }else{
		// 	Toast.launch("请先登录");
		// }

		
	}


//定义
	private roomState:number;//1-等待中；2-进行中；3-已结束；4-当前游戏

	private roomEnter:eui.Button;
	private gameName:eui.Label;
	private gameType:eui.Label;
	private gameTime:eui.Label;
	private gameDate:eui.Label;

}