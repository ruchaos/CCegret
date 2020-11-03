class Home extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
		this.addEventListener(eui.UIEvent.COMPLETE,this.uiCompHandler,this);
		this.skinName="resource/custom_skins/Home.exml";
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
//方法
	//添加监听
	private addListeners():void{
		this.logo.addEventListener(egret.TouchEvent.TOUCH_TAP,this.logoHandler,this);
		this.person.addEventListener(egret.TouchEvent.TOUCH_TAP,this.personHandler,this);
		this.join.addEventListener(egret.TouchEvent.TOUCH_TAP,this.joinHandler,this);
		this.observe.addEventListener(egret.TouchEvent.TOUCH_TAP,this.observeHandler,this);
		this.history.addEventListener(egret.TouchEvent.TOUCH_TAP,this.historyHandler,this);
		this.create.addEventListener(egret.TouchEvent.TOUCH_TAP,this.createHandler,this);
		this.searchCondition.addEventListener(egret.FocusEvent.FOCUS_IN,this.searchConditionHandler,this);
		this.search.addEventListener(egret.TouchEvent.TOUCH_TAP,this.searchHandler,this);
		this.clear.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clearHandler,this);
	}
	//初始化
	private init():void{
		this.refreshTime=2000;


		this.dsRooms=[
			{roomID:123,roomState:1,gameName:"ruchaos 's game",hostName:"ruchaos",gameType:"1v1",gameTime:"快棋",gameDate:"20190615"},
			{roomID:124,roomState:1,gameName:"ruchaos 's game",hostName:"ruchaos",gameType:"1v1",gameTime:"快棋",gameDate:"20190615"},
			{roomID:125,roomState:1,gameName:"ruchaos 's game",hostName:"ruchaos",gameType:"1v1",gameTime:"快棋",gameDate:"20190615"}
		];

		this.dpRooms=new eui.ArrayCollection(this.dsRooms);				
		this.rooms.dataProvider=this.dpRooms;
		this.rooms.itemRenderer=GameItem;//绑定到GameItem

		this.joinHandler();	
		this.refreshRooms();

	}



//监听的Handlers
	//1 LOGO logoHandler
	private logoHandler():void{
		
	}
	//2 个人 personHandler
	private personHandler():void{
		var openLoginEvent:LOBBYEVENT= new LOBBYEVENT(LOBBYEVENT.OPEN);
		if(isLogin){
		openLoginEvent.pageName="Person";	
		}else{
		openLoginEvent.pageName="Login";		
		}
		this.dispatchEvent(openLoginEvent);	
	
	}	
	//3 加入
	private joinHandler():void{
		this.setBtnFocus(this.join);
		this.roomState=1;
	}	
	//4 观战
	private observeHandler():void{
		this.setBtnFocus(this.observe);
		this.roomState=2;
	}		
	//5 棋谱
	private historyHandler():void{
		this.setBtnFocus(this.history);
		this.roomState=3;
		
	}		
	//6 创建
	private createHandler():void{
		if(isLogin){
			var openCreateEvent:LOBBYEVENT= new LOBBYEVENT(LOBBYEVENT.OPEN);
			openCreateEvent.pageName="Create";
			this.dispatchEvent(openCreateEvent);	
		}else{
			Toast.launch("请先登录");
		}
	
		
	}		
	//7 搜索输入
	private searchConditionHandler():void{
		
	}	
	//8 搜索键
	private searchHandler():void{	
		this.searchHostName=this.searchCondition.text;
		this.searchRooms();			
	}

	//9 清除键
	private clearHandler():void{
		this.searchCondition.text="";
		this.searchHandler();
		
	}	

	//10 游戏列表
	private searchRooms():void{
		//请求房间列表，其中，如果请求棋谱则不判断，如果在游戏中则请求当前游戏，房主名称等于搜索条件
		//1-等待中；2-进行中；3-已结束；4-当前游戏
		var req={type:"list",roomState:0,hostName:""};
		req.roomState=this.roomState;
		req.hostName=this.searchHostName.trim();		
		this.httppost(RoomSrv,req);
	}


	//11 自动刷新当前列表
	private refreshRooms():void{
		this.searchRooms();
		var timer:egret.Timer=new egret.Timer(this.refreshTime);
		timer.addEventListener(egret.TimerEvent.TIMER,()=>{
			this.searchRooms();
			
			
			timer.start();
		},this)
		timer.start();
		//定时按当前条件刷新游戏列表
	}

//页面方法
	//刷新房间列表
	private updateRoom(data=[]):void{
		var roomlist;
		roomlist=data;		
		for(var i=0;i<data.length;i++){
			roomlist[i].gameType=gameTypeNo[data[i].gameType-1];
			roomlist[i].gameTime=gameTimeNo[data[i].gameTime-1];
			if(data[i].gameDate==0||data[i].gameDate=="0"){
				roomlist[i].gameDate=="";
			};
		};
		this.dsRooms=roomlist;
		this.dpRooms.replaceAll(this.dsRooms);		

	}

	//控制按钮样式
	private setBtnFocus(btn:eui.ToggleButton):void{
		
		//if(btn.name!='join'){
			this.join.selected=false;
		//}
		//if(btn.name!='observe'){
			this.observe.selected=false;
		//}	
		//if(btn.name!='history'){
			this.history.selected=false;
		//}		
				
		btn.selected=true;
	}
//进入房间（通过GameItem完成）

//网络部分
	public httppost(url:string,params:Object):void{
		var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
		//设置方法为POST
		request.open(url,egret.HttpMethod.POST);
		//设置响应头为json
		request.setRequestHeader("Content-Type", "application/json");
		//对象转化为json文本
		var req=JSON.stringify(params);
        request.send(req);
		request.addEventListener(egret.Event.COMPLETE,this.onGetComplete,this);
		request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onPostIOError,this);
		request.addEventListener(egret.ProgressEvent.PROGRESS,this.onPostProgress,this);
}

	private onGetComplete(event:egret.Event):void{
		//根据msg.type分别处理
		var request = <egret.HttpRequest>event.currentTarget;
		var res=JSON.parse(request.response);
		if(res.type){
			//验证类别
			switch(res.type){
				case "list":
				this.updateRoom(res.rooms);	
			}
		}
	}


	private onPostIOError(event:egret.IOErrorEvent):void {
		console.log("post error : " + event);
	}
	private onPostProgress(event:egret.ProgressEvent):void {
		console.log("post progress : " + Math.floor(100*event.bytesLoaded/event.bytesTotal) + "%");
	}


//定义
	private refreshTime:number;

	private logo:eui.Image;
	public person:eui.Label;
	private create:eui.Button;
	private join:eui.ToggleButton;
	private observe:eui.ToggleButton;
	private history:eui.ToggleButton;
	private searchCondition:eui.TextInput;
	private roomState:number;//1-等待中；2-进行中；3-已结束；4-当前游戏
	private searchHostName:string="";


	private search:eui.Button;
	private clear:eui.Button;
	private rooms:eui.List;
	private dsRooms:Array<Object>;
	private dpRooms:eui.ArrayCollection;

}