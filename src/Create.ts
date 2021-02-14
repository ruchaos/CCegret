class Create extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
		this.addEventListener(eui.UIEvent.COMPLETE,this.uiCompHandler,this);
		this.skinName="resource/custom_skins/Create.exml";
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
	//加载完成添加监听	
	private uiCompHandler():void{
		this.addListeners();
		this.init();
				
	}

	private init():void{
		this.hostName=username;
		this.title.text=this.hostName+" 's game";
		this.type4Handler();
		this.time1Handler();

	}
//添加各按钮监听
	private addListeners():void{
		this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnCloseHandler,this);
		this.curtain.addEventListener(egret.TouchEvent.TOUCH_TAP,this.curtainHandler,this);
		this.btnSubmit.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnSubmitHandler,this);
		this.type1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.type1Handler,this);
		this.type2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.type2Handler,this);
		this.type4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.type4Handler,this);
		this.time1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.time1Handler,this);
		this.time2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.time2Handler,this);
		this.time3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.time3Handler,this);
	}

//handlers
	//curtain
	private curtainHandler():void{
		this.closePanel();
		
	}
	//close
	private btnCloseHandler():void{
		this.closePanel();
	}

	//提交
	private btnSubmitHandler():void{
		var data={username:"",token:"",gameName:"",gameType:1,gameTime:1};
		data.username=username;
		data.token=token;		
		data.gameName=username+" 's game";
		data.gameType=this.gameType;
		data.gameTime=this.gameTime;
		var disapthcher=this;

		//提交 username time type
		socket.emit("CreateRoom",data);
		this.closePanel();
		//如果成功，关闭对话框，发出事件，携带房间ID


		// socket.on("EnterRoomSuccessAfterCreate",(roomData)=>{
		// 	console.log("Server:EnterRoomSuccessAfterCreate");
		// 	var LobbyEvent:LOBBYEVENT=new LOBBYEVENT(LOBBYEVENT.ENTERROOM);			
		// 	LobbyEvent.roomData=roomData;
		// 	disapthcher.dispatchEvent(LobbyEvent);
		// });

		// var success=true;
		// var roomID:number=1234;//测试
		
		// if(success){
		// 	var LobbyEvent:LOBBYEVENT=new LOBBYEVENT(LOBBYEVENT.ENTERROOM);
		// 	LobbyEvent.roomID=roomID;
		// 	LobbyEvent.roomState=1;
		// 	this.parent.parent.parent.dispatchEvent(LobbyEvent);
		// }
	

		//（事件由Main完成，进入指定ID的ROOM，并移除HOME）

	}

	//type1 2 3 
	private type1Handler():void{
		//设置样式
		this.setBtnTypeFocus(this.type1);
		//修改数据
		this.gameType=1;//1-1V1模式
		//修改提示文本
		this.typehint.text="每人控制两方棋子，房主决定先后手";
		
	}

	private type2Handler():void{
		//设置样式
		this.setBtnTypeFocus(this.type2);
		//修改数据
		this.gameType=2;//2-2V2模式
		//修改提示文本
		this.typehint.text="每人各控制一方棋子";		
		
	}

	private type4Handler():void{
		//设置样式
		this.setBtnTypeFocus(this.type4);
		//修改数据
		this.gameType=4;//4-1V1 随机先手
		//修改提示文本
		this.typehint.text="每人控制两方棋子，随机先后手";		
		
	}

	//time1 2 3
	private time1Handler():void{
		//设置样式
		this.setBtnTimeFocus(this.time1);
		//修改数据
		this.gameTime=1;//1-快棋
		//修改提示文本
		this.timehint.text="每步1分钟，步超时消耗长考时间，长考时间每人10分钟";		
	}

	private time2Handler():void{
		//设置样式
		this.setBtnTimeFocus(this.time2);
		//修改数据
		this.gameTime=2;//2-长考
		//修改提示文本
		this.timehint.text="每人45分钟包干，单步不限时长，包干时间用尽1分钟读秒";		
	}

	private time3Handler():void{
		//设置样式
		this.setBtnTimeFocus(this.time3);
		//修改数据
		this.gameTime=3;//3-不限
		//修改提示文本
		this.timehint.text="不限步时长（游戏最多保留24小时）";		
	}
//页面方法
	//关闭此dialog
	private closePanel():void{
		this.parent.removeChild(this);
	}

	//type组样式
	private setBtnTypeFocus(btn:eui.ToggleButton):void{
		
		
			this.type1.selected=false;
		
			this.type2.selected=false;
	
			this.type4.selected=false;
				
		btn.selected=true;
	}
	//time组样式
	private setBtnTimeFocus(btn:eui.ToggleButton):void{
		
		
			this.time1.selected=false;
		
			this.time2.selected=false;
	
			this.time3.selected=false;
				
		btn.selected=true;
	}	

//页面数据定义
	private hostName:string;
	private gameType:number;
	private gameTime:number;

//页面UI定义
	private btnClose:eui.Button;
	private curtain:eui.Image;	

	private title:eui.Label;

	private btnSubmit:eui.Button;

	private time1:eui.ToggleButton;
	private time2:eui.ToggleButton;
	private time3:eui.ToggleButton;
	private timehint:eui.Label;

	private type1:eui.ToggleButton;
	private type2:eui.ToggleButton;
	private type4:eui.ToggleButton;
	private typehint:eui.Label;
	
}