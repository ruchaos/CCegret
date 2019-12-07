var __reflect=this&&this.__reflect||function(e,t,n){e.__class__=t,n?n.push(t):n=[t],e.__types__=e.__types__?n.concat(e.__types__):n},__extends=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);n.prototype=t.prototype,e.prototype=new n},__awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function s(e){try{h(r.next(e))}catch(t){i(t)}}function a(e){try{h(r["throw"](e))}catch(t){i(t)}}function h(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,a)}h((r=r.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;h;)try{if(o=1,i&&(s=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(i,n[1])).done)return s;switch(i=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return h.label++,{value:n[1],done:!1};case 5:h.label++,i=n[1],n=[0];continue;case 7:n=h.ops.pop(),h.trys.pop();continue;default:if(s=h.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){h=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){h.label=n[1];break}if(6===n[0]&&h.label<s[1]){h.label=s[1],s=n;break}if(s&&h.label<s[2]){h.label=s[2],h.ops.push(n);break}s[2]&&h.ops.pop(),h.trys.pop();continue}n=t.call(e,h)}catch(r){n=[6,r],i=0}finally{o=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,s,a,h={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a},Login=function(e){function t(){var t=e.call(this)||this;return t.addEventListener(eui.UIEvent.COMPLETE,t.uiCompHandler,t),t.skinName="resource/custom_skins/Login.exml",t}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this)},t.prototype.uiCompHandler=function(){this.addListeners()},t.prototype.addListeners=function(){this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnCloseHandler,this),this.curtain.addEventListener(egret.TouchEvent.TOUCH_TAP,this.curtainHandler,this),this.btnSubmit.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnSubmitHandler,this),this.toRegister.addEventListener(egret.TouchEvent.TOUCH_TAP,this.toRegisterHandler,this),this.toChangePW.addEventListener(egret.TouchEvent.TOUCH_TAP,this.toChangePWHandler,this)},t.prototype.curtainHandler=function(){this.closePanel()},t.prototype.btnCloseHandler=function(){this.closePanel()},t.prototype.btnSubmitHandler=function(){var e=!0;if(e){var t=new LOBBYEVENT(LOBBYEVENT.LOGIN);this.dispatchEvent(t),this.closePanel()}},t.prototype.toRegisterHandler=function(){var e=new LOBBYEVENT(LOBBYEVENT.OPEN);e.pageName="Register",this.dispatchEvent(e)},t.prototype.toChangePWHandler=function(){var e=new LOBBYEVENT(LOBBYEVENT.OPEN);e.pageName="ChangePW",this.dispatchEvent(e),formerPage="Login"},t.prototype.closePanel=function(){this.parent.removeChild(this)},t}(eui.Component);__reflect(Login.prototype,"Login",["eui.UIComponent","egret.DisplayObject"]);var AssetAdapter=function(){function e(){}return e.prototype.getAsset=function(e,t,n){function r(r){t.call(n,r,e)}if(RES.hasRes(e)){var o=RES.getRes(e);o?r(o):RES.getResAsync(e,r,this)}else RES.getResByUrl(e,r,this,RES.ResourceItem.TYPE_IMAGE)},e}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var Create=function(e){function t(){var t=e.call(this)||this;return t.addEventListener(eui.UIEvent.COMPLETE,t.uiCompHandler,t),t.skinName="resource/custom_skins/Create.exml",t}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this)},t.prototype.uiCompHandler=function(){this.addListeners()},t.prototype.addListeners=function(){this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnCloseHandler,this),this.curtain.addEventListener(egret.TouchEvent.TOUCH_TAP,this.curtainHandler,this)},t.prototype.curtainHandler=function(){this.closePanel()},t.prototype.btnCloseHandler=function(){this.closePanel()},t.prototype.closePanel=function(){this.parent.removeChild(this)},t}(eui.Component);__reflect(Create.prototype,"Create",["eui.UIComponent","egret.DisplayObject"]);var GameItem=function(e){function t(){var t=e.call(this)||this;return t.addEventListener(eui.UIEvent.COMPLETE,t.uiCompHandler,t),t.skinName="resource/custom_skins/GameItem.exml",t}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this)},t.prototype.dataChanged=function(){this.hostName.text=this.data.hostName+" 's game"},t.prototype.uiCompHandler=function(){this.addListeners(),this.init()},t.prototype.addListeners=function(){this.roomEnter.addEventListener(egret.TouchEvent.TOUCH_TAP,this.roomEnterHandler,this)},t.prototype.init=function(){},t.prototype.roomEnterHandler=function(){alert("clicked!")},t}(eui.ItemRenderer);__reflect(GameItem.prototype,"GameItem");var Home=function(e){function t(){var t=e.call(this)||this;return t.isLogin=!0,t.addEventListener(eui.UIEvent.COMPLETE,t.uiCompHandler,t),t.skinName="resource/custom_skins/Home.exml",t}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this)},t.prototype.uiCompHandler=function(){this.addListeners(),this.init()},t.prototype.addListeners=function(){this.logo.addEventListener(egret.TouchEvent.TOUCH_TAP,this.logoHandler,this),this.person.addEventListener(egret.TouchEvent.TOUCH_TAP,this.personHandler,this),this.join.addEventListener(egret.TouchEvent.TOUCH_TAP,this.joinHandler,this),this.observe.addEventListener(egret.TouchEvent.TOUCH_TAP,this.observeHandler,this),this.history.addEventListener(egret.TouchEvent.TOUCH_TAP,this.historyHandler,this),this.create.addEventListener(egret.TouchEvent.TOUCH_TAP,this.createHandler,this),this.searchCondition.addEventListener(egret.FocusEvent.FOCUS_IN,this.searchConditionHandler,this),this.search.addEventListener(egret.TouchEvent.TOUCH_TAP,this.searchHandler,this),this.clear.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clearHandler,this)},t.prototype.init=function(){this.refreshTime=2e3,this.dsRooms=[{roomState:1,hostName:"ruchaos",gameType:"1v1",gameTime:"快棋",gameDate:"20190615"},{roomState:1,hostName:"ruchaos",gameType:"1v1",gameTime:"快棋",gameDate:"20190615"},{roomState:1,hostName:"ruchaos",gameType:"1v1",gameTime:"快棋",gameDate:"20190615"}],this.dpRooms=new eui.ArrayCollection(this.dsRooms),this.rooms.dataProvider=this.dpRooms,this.rooms.itemRenderer=GameItem,this.joinHandler(),this.searchHandler()},t.prototype.setBtnFocus=function(e){this.join.selected=!1,this.observe.selected=!1,this.history.selected=!1,e.selected=!0},t.prototype.logoHandler=function(){},t.prototype.personHandler=function(){var e=new LOBBYEVENT(LOBBYEVENT.OPEN);isLogin?e.pageName="Person":e.pageName="Login",this.dispatchEvent(e)},t.prototype.joinHandler=function(){this.setBtnFocus(this.join),this.roomState=1},t.prototype.observeHandler=function(){this.setBtnFocus(this.observe),this.roomState=2},t.prototype.historyHandler=function(){this.setBtnFocus(this.history),this.roomState=3},t.prototype.createHandler=function(){var e=new LOBBYEVENT(LOBBYEVENT.OPEN);e.pageName="Create",this.dispatchEvent(e)},t.prototype.searchConditionHandler=function(){},t.prototype.searchHandler=function(){this.searchHostName=this.searchCondition.text,this.refreshRooms()},t.prototype.clearHandler=function(){this.searchCondition.text="",this.searchHandler()},t.prototype.searchRooms=function(){var e={roomState:0,hostName:""};3==this.roomState?e.roomState=3:4==this.roomState?e.roomState=4:e.roomState=this.roomState,e.hostName=this.searchHostName,console.log(e);var t={roomState:1,hostName:"ABC",gameType:"1v1",gameTime:"快棋",gameDate:"20190615"};t.hostName="A"+this.searchHostName,t.gameDate=Date.now().toString(),this.dsRooms.push(t),this.dsRooms.shift(),this.dpRooms.refresh()},t.prototype.refreshRooms=function(){var e=this;this.searchRooms();var t=new egret.Timer(this.refreshTime);t.addEventListener(egret.TimerEvent.TIMER,function(){e.searchRooms(),t.start()},this),t.start()},t}(eui.Component);__reflect(Home.prototype,"Home",["eui.UIComponent","egret.DisplayObject"]);var LoadingUI=function(e){function t(){var t=e.call(this)||this;return t.createView(),t}return __extends(t,e),t.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},t.prototype.onProgress=function(e,t){this.textField.text="Loading..."+e+"/"+t},t}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var LOBBYEVENT=function(e){function t(t,n,r){void 0===n&&(n=!1),void 0===r&&(r=!1);var o=e.call(this,t,n,r)||this;return o.pageName="Home",o}return __extends(t,e),t.OPEN="OPEN_PAGE",t.LOGIN="LOGIN",t.LOGOUT="LOGOUT",t}(egret.Event);__reflect(LOBBYEVENT.prototype,"LOBBYEVENT");var ChangePW=function(e){function t(){var t=e.call(this)||this;return t.addEventListener(eui.UIEvent.COMPLETE,t.uiCompHandler,t),t.skinName="resource/custom_skins/ChangePW.exml",t}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this)},t.prototype.uiCompHandler=function(){this.addListeners()},t.prototype.addListeners=function(){this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnCloseHandler,this),this.curtain.addEventListener(egret.TouchEvent.TOUCH_TAP,this.curtainHandler,this),this.btnSubmit.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnSubmitHandler,this)},t.prototype.curtainHandler=function(){this.closePanel()},t.prototype.btnCloseHandler=function(){this.closePanel()},t.prototype.btnSubmitHandler=function(){var e=!0;if(e){var t=new LOBBYEVENT(LOBBYEVENT.LOGOUT);this.dispatchEvent(t);var n=new LOBBYEVENT(LOBBYEVENT.OPEN);n.pageName="Login",this.dispatchEvent(n),this.closePanel()}},t.prototype.closePanel=function(){this.parent.removeChild(this)},t}(eui.Component);__reflect(ChangePW.prototype,"ChangePW",["eui.UIComponent","egret.DisplayObject"]);var Main=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(e){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var t=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",t),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return[4,this.loadResource()];case 1:return n.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return e=n.sent(),[4,platform.login()];case 3:return n.sent(),[4,platform.getUserInfo()];case 4:return t=n.sent(),console.log(t),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),e=new LoadingUI,this.stage.addChild(e),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),[4,this.loadTheme()];case 2:return n.sent(),[4,RES.loadGroup("preload",0,e)];case 3:return n.sent(),this.stage.removeChild(e),[3,5];case 4:return t=n.sent(),console.error(t),[3,5];case 5:return[2]}})})},t.prototype.loadTheme=function(){var e=this;return new Promise(function(t,n){var r=new eui.Theme("resource/default.thm.json",e.stage);r.addEventListener(eui.UIEvent.COMPLETE,function(){t()},e)})},t.prototype.createGameScene=function(){this.addPage("Home")},t.prototype.addPage=function(e){var t=this;switch(e){case"Home":this._Home||(this._Home=new Home,this._Home.addEventListener(LOBBYEVENT.OPEN,function(e){t.addPage(e.pageName)},this)),this.addChild(this._Home);break;case"Login":this._Login||(this._Login=new Login,this._Login.addEventListener(LOBBYEVENT.OPEN,function(e){t.addPage(e.pageName)},this),this._Login.addEventListener(LOBBYEVENT.LOGIN,function(){isLogin=!0,t._Home.person.text="hi,"+username},this)),this.addChild(this._Login);break;case"Person":this._Person||(this._Person=new Person,this._Person.addEventListener(LOBBYEVENT.OPEN,function(e){t.addPage(e.pageName)},this),this._Person.addEventListener(LOBBYEVENT.LOGOUT,function(){isLogin=!1,t._Home.person.text="请登录"},this)),this.addChild(this._Person);break;case"Create":this._Create||(this._Create=new Create,this._Create.addEventListener(LOBBYEVENT.OPEN,function(e){t.addPage(e.pageName)},this)),this.addChild(this._Create);break;case"ChangePW":this._ChangePW||(this._ChangePW=new ChangePW,this._ChangePW.addEventListener(LOBBYEVENT.OPEN,function(e){t.addPage(e.pageName)},this),this._ChangePW.addEventListener(LOBBYEVENT.LOGOUT,function(){isLogin=!1,t._Home.person.text="请登录"},this)),this.addChild(this._ChangePW);break;case"Register":this._Register||(this._Register=new Register,this._Register.addEventListener(LOBBYEVENT.OPEN,function(e){t.addPage(e.pageName)},this)),this.addChild(this._Register)}},t}(eui.UILayer);__reflect(Main.prototype,"Main");var Person=function(e){function t(){var t=e.call(this)||this;return t.addEventListener(eui.UIEvent.COMPLETE,t.uiCompHandler,t),t.skinName="resource/custom_skins/Person.exml",t}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this)},t.prototype.uiCompHandler=function(){this.addListeners(),this.init()},t.prototype.addListeners=function(){this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnCloseHandler,this),this.curtain.addEventListener(egret.TouchEvent.TOUCH_TAP,this.curtainHandler,this),this.btnSubmit.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnSubmitHandler,this),this.toChangePW.addEventListener(egret.TouchEvent.TOUCH_TAP,this.toChangePWHandler,this)},t.prototype.init=function(){},t.prototype.curtainHandler=function(){this.closePanel()},t.prototype.btnCloseHandler=function(){this.closePanel()},t.prototype.btnSubmitHandler=function(){var e=new LOBBYEVENT(LOBBYEVENT.LOGOUT);this.dispatchEvent(e),this.closePanel()},t.prototype.toChangePWHandler=function(){var e=new LOBBYEVENT(LOBBYEVENT.OPEN);e.pageName="ChangePW",this.dispatchEvent(e),this.closePanel()},t.prototype.closePanel=function(){this.parent.removeChild(this)},t}(eui.Component);__reflect(Person.prototype,"Person",["eui.UIComponent","egret.DisplayObject"]);var DebugPlatform=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var isLogin=!1,username="ruchaos",formerPage="Home",Register=function(e){function t(){var t=e.call(this)||this;return t.addEventListener(eui.UIEvent.COMPLETE,t.uiCompHandler,t),t.skinName="resource/custom_skins/Register.exml",t}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this)},t.prototype.uiCompHandler=function(){this.addListeners()},t.prototype.addListeners=function(){this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnCloseHandler,this),this.curtain.addEventListener(egret.TouchEvent.TOUCH_TAP,this.curtainHandler,this),this.btnSubmit.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnSubmitHandler,this)},t.prototype.curtainHandler=function(){this.closePanel()},t.prototype.btnCloseHandler=function(){this.closePanel()},t.prototype.btnSubmitHandler=function(){var e=!0;if(e){var t=new LOBBYEVENT(LOBBYEVENT.OPEN);t.pageName="Login",this.dispatchEvent(t),this.closePanel()}},t.prototype.closePanel=function(){this.parent.removeChild(this)},t}(eui.Component);__reflect(Register.prototype,"Register",["eui.UIComponent","egret.DisplayObject"]);var Room=function(e){function t(){var t=e.call(this)||this;return t.skinName="resource/custom_skins/RoomUI.exml",t}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this)},t}(eui.Component);__reflect(Room.prototype,"Room",["eui.UIComponent","egret.DisplayObject"]);var ThemeAdapter=function(){function e(){}return e.prototype.getTheme=function(e,t,n,r){function o(e){t.call(r,e)}function i(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,i,null),n.call(r))}var s=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){t.call(r,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(e,n){window.JSONParseClass.setData(e),egret.callLater(function(){t.call(r,generateEUI2)},s)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(e.indexOf(".exml")>-1){var a=e.split("/");a.pop();var h=a.join("/")+"_EUI.json";generateJSON.paths[e]?egret.callLater(function(){t.call(r,generateJSON.paths[e])},this):RES.getResByUrl(h,function(n){window.JSONParseClass.setData(n),egret.callLater(function(){t.call(r,generateJSON.paths[e])},s)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){t.call(r,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,i,null),RES.getResByUrl(e,o,this,RES.ResourceItem.TYPE_TEXT)},e}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);