class Login extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
		this.addEventListener(eui.UIEvent.COMPLETE,this.uiCompHandler,this);
		this.skinName="resource/custom_skins/Login.exml";
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
				
	}

	private addListeners():void{
		this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnCloseHandler,this);
		this.curtain.addEventListener(egret.TouchEvent.TOUCH_TAP,this.curtainHandler,this);
		this.btnSubmit.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnSubmitHandler,this);
		this.toRegister.addEventListener(egret.TouchEvent.TOUCH_TAP,this.toRegisterHandler,this);
		this.toChangePW.addEventListener(egret.TouchEvent.TOUCH_TAP,this.toChangePWHandler,this);




	}
	private curtainHandler():void{
		this.closePanel();
		
	}

	private btnCloseHandler():void{
		this.closePanel();
	}

	private btnSubmitHandler():void{
		var username:string;
		var password:string;
		
		var success:boolean=false;
		var approved:boolean=true;

		if(this.userName.text==""){
			this.lhintUN.text=" 请填写用户名 ";
			this.lhintUN.visible=true;			
			approved=false;
		}else{
			this.lhintUN.visible=false;
		}
		if(this.password.text==""){
			this.lhintPW.text=" 请填写密码 ";
			this.lhintPW.visible=true;			
			approved=false;
		}else{
			this.lhintPW.visible=false;	
		}

		//提交请求
		if(approved){
			var req={type:"login",username:"",password:""};
			req.username=this.userName.text;
			req.password=this.password.text;
			this.httppost(LoginSrv,req);
		}	

		//如果成功，则返回主页并

	}
	private LoginSuccess(usernamesuccess:string):void{
		var LobbyEvent:LOBBYEVENT=new LOBBYEVENT(LOBBYEVENT.LOGIN);
		username=usernamesuccess;
		console.log(usernamesuccess+" 登录成功！");		
		this.dispatchEvent(LobbyEvent);
		this.closePanel();
	}
	private LoginFailed(error):void{		
		if(error.username){
			this.lhintUN.text=error.username;
			this.lhintUN.visible=true;
		};
		if(error.password){
			this.lhintPW.text=error.password;
			this.lhintPW.visible=true;			
		};
		Toast.launch("登录失败 "+error.msg);

	}

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
				case "login":
				this.LoginSuccess(res.username);
				break;
				case "error":
				this.LoginFailed(res.error);
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







	private toRegisterHandler():void{
		var LobbyEvent:LOBBYEVENT=new LOBBYEVENT(LOBBYEVENT.OPEN);
		LobbyEvent.pageName="Register";
		this.dispatchEvent(LobbyEvent);
		//this.closePanel();

	}

	private toChangePWHandler():void{
		var LobbyEvent:LOBBYEVENT=new LOBBYEVENT(LOBBYEVENT.OPEN);
		LobbyEvent.pageName="FindPW";
		this.dispatchEvent(LobbyEvent);
		//this.closePanel();
	}

	private closePanel():void{
		//清除文本
		this.userName.text="";
		this.password.text="";
		this.lhintUN.visible=false;
		this.lhintPW.visible=false;
		//关闭面板显示		
		this.parent.removeChild(this);
		
	}


//页面UI定义
	private btnClose:eui.Button;
	private curtain:eui.Rect;	

	public userName:eui.TextInput;
	private lhintUN:eui.Label;
	private password:eui.TextInput;
	private lhintPW:eui.Label;

	private btnSubmit:eui.Button;
	private toRegister:eui.Label;
	private toChangePW:eui.Label;	
}