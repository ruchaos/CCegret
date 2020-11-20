//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends eui.UILayer {


    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());


        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        const result = await RES.getResAsync("description_json")
        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);

    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await this.loadTheme();
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }

    //主控制开始点，首先进行登陆，然后加载首页
    protected createGameScene(): void {
     
        this.addPage("Home");
        Toast.init(this);
        this.socketsListening();
    }

   //登陆验证功能？


   //socket监听
   socketsListening(){

        socket.on("CreateRoomSuccess",(data)=>{
            console.log("Server:CreateRoomSuccess");
			var enterRoom={username:"",token:"",roomID:""};
			enterRoom.username=username;
			enterRoom.token=token;
			enterRoom.roomID=data.roomID;
			socket.emit("EnterRoomAfterCreate",enterRoom);
			console.log("emit EnterRoomAfterCreate");
		});

        socket.on("EnterRoomSuccess",(roomData)=>{
            console.log("Server:EnterRoomSuccess");
            this.openRoom(roomData);        	
        });

        socket.on("EnterRoomAfterCreateSuccess",(roomData)=>{
            console.log("Server:EnterRoomSuccessAfterCreateSuccess");
            this.openRoom(roomData);        	
        }); 

        socket.on("PlayersChanges",(roomData)=>{
            console.log("Server:PlayersChanges");
            var LobbyEvent:LOBBYEVENT=new LOBBYEVENT(LOBBYEVENT.SOCKETMSG);
		    LobbyEvent.socketevent="PlayersChanges";
            LobbyEvent.roomData=roomData;
            if(this._Room){
                this._Room.dispatchEvent(LobbyEvent); 
            };
        });

        socket.on("LeaveRoomSuccess",(roomData)=>{
            console.log("Server:LeaveRoomSuccess");
            var LobbyEvent:LOBBYEVENT=new LOBBYEVENT(LOBBYEVENT.SOCKETMSG);
		    LobbyEvent.socketevent="LeaveRoomSuccess";
            LobbyEvent.roomData=roomData;
            if(this._Room){
                this._Room.dispatchEvent(LobbyEvent); 
            };
        });

        socket.on("RoomDismissed",(roomData)=>{
            console.log("Server:RoomDismissed");
            var LobbyEvent:LOBBYEVENT=new LOBBYEVENT(LOBBYEVENT.SOCKETMSG);
		    LobbyEvent.socketevent="RoomDismissed";
            LobbyEvent.roomData=roomData;
            if(this._Room){
                this._Room.dispatchEvent(LobbyEvent); 
            };
        });

        socket.on("BeKicked",(roomData)=>{
            console.log("Server:BeKicked");
            var LobbyEvent:LOBBYEVENT=new LOBBYEVENT(LOBBYEVENT.SOCKETMSG);
		    LobbyEvent.socketevent="BeKicked";
            LobbyEvent.roomData=roomData;
            if(this._Room){
                this._Room.dispatchEvent(LobbyEvent); 
            };

            // var timer:egret.Timer = new egret.Timer(300,1);
            // //注册事件侦听器
            // timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.toastkick,this);      
            // //开始计时
            // timer.start();
        });


   }
        // private toastkick(msg:string){
        //     //糟糕的办法，解决被请出房间后，toast层在home以下的问题。
        //     Toast.launch("你已被请出房间");
        // };

    //进入房间（并停止home）
   openRoom(roomData:any){
       //roomState 1-等待中；2-进行中；3-已结束；4-当前游戏
       if(!this._Room){
                    this._Room=new Room();
                    this._Room.addEventListener(LOBBYEVENT.OPEN,(evt:LOBBYEVENT)=>{
                        this.addPage(evt.pageName);
                    },this);                    
        };
        this._Room.init(roomData);                                              
        this.addChild(this._Room);
        this._Home.visible=false;
   }
  

   //加载页面功能，加载page页面
   addPage(page:string):void{
       switch (page){
           case "Home":
                if(!this._Home){
                    this._Home=new Home();
                    this._Home.addEventListener(LOBBYEVENT.OPEN,(evt:LOBBYEVENT)=>{
                        this.addPage(evt.pageName);
                    },this);
                    //TODO 添加进入room事件，传递roomID和roomstate
                    this._Home.addEventListener(LOBBYEVENT.ENTERROOM,(evt:LOBBYEVENT)=>{
                        this.openRoom(evt.roomData);
                    },this);                    
                };
                this.addChild(this._Home);
                this._Home.visible=true; 
                break;
                
            case "Login":
                if(!this._Login){
                    this._Login=new Login();                    
                    this._Login.addEventListener(LOBBYEVENT.OPEN,(evt:LOBBYEVENT)=>{
                        this.addPage(evt.pageName);
                    },this);
                    this._Login.addEventListener(LOBBYEVENT.LOGIN,()=>{
                        isLogin=true;
                        Toast.launch("欢迎！"+username);
                        this._Home.person.text="hi,"+username;//不规范！

                        var data={username:"",token:""};
                        data.username=username;
                        data.token=token;
                        socket.emit("UserLogin",data);//新登录协议要求

                    },this);
                    
                }
                this.addChild(this._Login);
                break;
                
            case "Person":
                if(!this._Person){
                    this._Person=new Person();
                    this._Person.addEventListener(LOBBYEVENT.OPEN,(evt:LOBBYEVENT)=>{
                        this.addPage(evt.pageName);
                    },this); 
                    this._Person.addEventListener(LOBBYEVENT.LOGOUT,()=>{
                        Toast.launch("再见, "+username);
                        this._Home.person.text="请登录";//不规范！

                        var data={username:""};
                        data.username=username;                        
                        socket.emit("UserLogout",data);//新登录协议要求

                        isLogin=false;
                        username="guest";
                    },this);
                }
                this.addChild(this._Person); 
                break;
                
            case "Create":
                if(!this._Create){
                    this._Create=new Create();                
                    this._Create.addEventListener(LOBBYEVENT.OPEN,(evt:LOBBYEVENT)=>{
                        this.addPage(evt.pageName);
                    },this);
                    this._Create.addEventListener(LOBBYEVENT.ENTERROOM,(evt:LOBBYEVENT)=>{
                        this.openRoom(evt.roomData);
                    },this);
                } 
                this.addChild(this._Create);                    
                break;
                
            case "ChangePW":
                if(!this._ChangePW){
                    this._ChangePW=new ChangePW();                 
                    this._ChangePW.addEventListener(LOBBYEVENT.OPEN,(evt:LOBBYEVENT)=>{
                        this.addPage(evt.pageName);
                        if(evt.pageName=="Login"){
                            this._Login.userName.text=evt.username;
                            Toast.launch("修改成功！请用新密码登录！");	
                        }  
                    },this); 
                    this._ChangePW.addEventListener(LOBBYEVENT.LOGOUT,()=>{
                    isLogin=false;                    
                    this._Home.person.text="请登录";//不规范！
                    },this);

                }                    
                this.addChild(this._ChangePW);
                break;

             case "FindPW":
                if(!this._FindPW){
                    this._FindPW=new FindPW();                 
                    this._FindPW.addEventListener(LOBBYEVENT.OPEN,(evt:LOBBYEVENT)=>{
                        this.addPage(evt.pageName);
                        if(evt.pageName=="Login"){
                            this._Login.userName.text=evt.username;
                            Toast.launch("请用新密码登录！");	
                        }  
                    },this); 
                }                    
                this.addChild(this._FindPW);
                break;

            case "Register":
                if(!this._Register){
                    this._Register=new Register();                
                    this._Register.addEventListener(LOBBYEVENT.OPEN,(evt:LOBBYEVENT)=>{
                        this.addPage(evt.pageName);
                        if(evt.pageName=="Login"){
                            this._Login.userName.text=evt.username;
                            Toast.launch("注册成功请登录！");	
                        }                        
                    },this);                     
                }
                this.addChild(this._Register);
                break; 

 
        }

   }


   //移除页面功能，移除name页面


   //toast提示



   //页面定义
   private _Home:Home;
   private _Room:Room;
   private _Create:Create;   
   private _Login:Login;
   private _Register:Register;
   private _ChangePW:ChangePW;
   private _Person:Person; 
   private _FindPW:FindPW;


}
