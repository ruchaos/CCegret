class Person extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
		this.addEventListener(eui.UIEvent.COMPLETE,this.uiCompHandler,this);
		this.skinName="resource/custom_skins/Person.exml";
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

	private addListeners():void{
		this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnCloseHandler,this);
		this.curtain.addEventListener(egret.TouchEvent.TOUCH_TAP,this.curtainHandler,this);
		this.btnSubmit.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnSubmitHandler,this);
		this.toChangePW.addEventListener(egret.TouchEvent.TOUCH_TAP,this.toChangePWHandler,this);

		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.init,this);
	}

	private init():void{
		this.title.text="hi,"+username;

		var req={type:"record",username:""};
		req.username=username;	
		this.httppost(RecordSrv,req);
	}

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
				case "record":						
				this.games.text="您已进行了"+res.record.toString()+"场游戏";
				break;
				case "error":
				this.games.text="错误，尚未查出您的战绩";
				break;
			}
		}
	}


	private onPostIOError(event:egret.IOErrorEvent):void {
		Toast.launch("IOError");
		console.log("post error : " + event);
	}
	private onPostProgress(event:egret.ProgressEvent):void {
		console.log("post progress : " + Math.floor(100*event.bytesLoaded/event.bytesTotal) + "%");
	}




	private curtainHandler():void{
		this.closePanel();		
	}

	private btnCloseHandler():void{
		this.closePanel();
	}

	private btnSubmitHandler():void{
		var LobbyEvent:LOBBYEVENT=new LOBBYEVENT(LOBBYEVENT.LOGOUT);
		this.dispatchEvent(LobbyEvent);
		this.closePanel();
	}

	private toChangePWHandler():void{
		var LobbyEvent:LOBBYEVENT=new LOBBYEVENT(LOBBYEVENT.OPEN);
		LobbyEvent.pageName="ChangePW";
		this.dispatchEvent(LobbyEvent);
		this.closePanel();
	}



	private closePanel():void{
		this.parent.removeChild(this);
	}



	private btnClose:eui.Button;
	private curtain:eui.Image;
	private btnSubmit:eui.Button;
	private toChangePW:eui.Label;

	private title:eui.Label;
	private games:eui.Label;
	private tips:eui.Label;



	
}