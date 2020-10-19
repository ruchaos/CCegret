class FindPW extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
		this.addEventListener(eui.UIEvent.COMPLETE,this.uiCompHandler,this);
		this.skinName="resource/custom_skins/FindPW.exml";
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
		
		this.userName.addEventListener(egret.FocusEvent.FOCUS_OUT,this.userNameCheck,this);
		this.password.addEventListener(egret.FocusEvent.FOCUS_OUT,this.passwordCheck,this);
		this.repeatPW.addEventListener(egret.FocusEvent.FOCUS_OUT,this.repeatPWCheck,this);
		this.clueName.addEventListener(egret.FocusEvent.FOCUS_OUT,this.clueNameCheck,this);
	}
	private curtainHandler():void{
		this.closePanel();
		
	}

	private btnCloseHandler():void{
		this.closePanel();
	}

	private userNameCheck():boolean{
		//用户名要求 10位以内英文数字，不包含中文、符号、空格
		var regUN:RegExp=new RegExp("^[A-Za-z0-9]{4,10}$");		
		if(!regUN.test(this.userName.text)){
			this.lhintUN.text=" 用户名格式错误 ";
			this.lhintUN.visible=true;
			return false;
		}else{
			this.lhintUN.visible=false;
			return true;		
		}
	}	

	private passwordCheck():boolean{
		//密码要求 6-18位，英文、数字、符号组合
		var regPW:RegExp=new RegExp("^[\u0021-\u007E]{6,18}$");	
		if(!regPW.test(this.password.text)){
			this.lhintPW.text=" 密码格式错误 6-18位，英文、数字、符号 ";
			this.lhintPW.visible=true;
			return false;
		}else{
			this.lhintPW.visible=false;	
			return true;	
		}
	}

	private repeatPWCheck():boolean{
		//重复密码 与密码相同
		if(this.repeatPW.text!=this.password.text){
			this.lhintRP.text=" 请重复密码 ";
			this.lhintRP.visible=true;
			return false;
		}else{
			this.lhintRP.visible=false;	
			return true;		
		}
	}

	private clueNameCheck():boolean{
		//喜欢的角色 非空格 不能为空
		var regCN:RegExp=new RegExp("^[\u4e00-\u9fa5\u0021-\u007E]{1,18}$");	
		if(!regCN.test(this.clueName.text)){
			this.lhintCN.text=" 不能使用空格或为空 ";
			this.lhintCN.visible=true;
			return false;
		}else{
			this.lhintCN.visible=false;
			return true;
		}
	}

	private btnSubmitHandler():void{

		var success:boolean=false;
		var approved:boolean=false;		
		
		if(this.userNameCheck()&&this.passwordCheck()&&this.repeatPWCheck()&&this.clueNameCheck()){
			approved=true;
		}
		//提交请求
		if(approved){

			var req={type:"changePW",username:"",password:"",cluename:""};
			req.username=this.userName.text;			
			req.password=this.password.text;
			req.cluename=this.clueName.text;
			this.httppost(ChangePWSrv,req);
		}
	}

	private changePWSuccess(usernamesuccess:string):void{
		console.log(usernamesuccess+" 修改成功！");

		var LobbyEvent:LOBBYEVENT=new LOBBYEVENT(LOBBYEVENT.OPEN);
		LobbyEvent.pageName="Login";
		LobbyEvent.username=usernamesuccess;
		
		this.dispatchEvent(LobbyEvent);
		this.closePanel();
	}
	private changePWFailed(error):void{	
		if(error.username){
			this.lhintUN.text=error.username;
			this.lhintUN.visible=true;			
		};	

		if(error.password){
			this.lhintPW.text=error.password;
			this.lhintPW.visible=true;			
		};
		if(error.cluename){
			this.lhintCN.text=error.cluename;
			this.lhintCN.visible=true;			
		};
		Toast.launch("修改失败 "+error.msg);

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
				case "changePW":
				this.changePWSuccess(res.username);
				break;
				case "error":
				this.changePWFailed(res.error);
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





	private closePanel():void{
		//清除文本
		this.userName.text="";
		this.password.text="";
		this.repeatPW.text="";
		this.clueName.text="";
		this.lhintUN.visible=false;
		this.lhintPW.visible=false;
		this.lhintRP.visible=false;
		this.lhintCN.visible=false;
		//关闭面板显示
		this.parent.removeChild(this);
	}

//页面UI定义
	private userName:eui.TextInput;
	private lhintUN:eui.Label;
	private password:eui.TextInput;
	private lhintPW:eui.Label;
	private repeatPW:eui.TextInput;
	private lhintRP:eui.Label;
	private clueName:eui.TextInput;
	private lhintCN:eui.Label;

	private btnSubmit:eui.Button;

	private btnClose:eui.Button;
	private curtain:eui.Image;
}