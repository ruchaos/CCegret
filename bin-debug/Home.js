var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        var _this = _super.call(this) || this;
        _this.searchHostName = "";
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "resource/custom_skins/Home.exml";
        return _this;
    }
    Home.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Home.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    //加载完成添加监听	
    Home.prototype.uiCompHandler = function () {
        this.addListeners();
        this.init();
    };
    //方法
    //添加监听
    Home.prototype.addListeners = function () {
        this.logo.addEventListener(egret.TouchEvent.TOUCH_TAP, this.logoHandler, this);
        this.person.addEventListener(egret.TouchEvent.TOUCH_TAP, this.personHandler, this);
        this.join.addEventListener(egret.TouchEvent.TOUCH_TAP, this.joinHandler, this);
        this.observe.addEventListener(egret.TouchEvent.TOUCH_TAP, this.observeHandler, this);
        this.history.addEventListener(egret.TouchEvent.TOUCH_TAP, this.historyHandler, this);
        this.create.addEventListener(egret.TouchEvent.TOUCH_TAP, this.createHandler, this);
        this.searchCondition.addEventListener(egret.FocusEvent.FOCUS_IN, this.searchConditionHandler, this);
        this.search.addEventListener(egret.TouchEvent.TOUCH_TAP, this.searchHandler, this);
        this.clear.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clearHandler, this);
    };
    //初始化
    Home.prototype.init = function () {
        this.refreshTime = 2000;
        this.dsRooms = [
            { roomID: 123, roomState: 1, hostName: "ruchaos", gameType: "1v1", gameTime: "快棋", gameDate: "20190615" },
            { roomID: 124, roomState: 1, hostName: "ruchaos", gameType: "1v1", gameTime: "快棋", gameDate: "20190615" },
            { roomID: 125, roomState: 1, hostName: "ruchaos", gameType: "1v1", gameTime: "快棋", gameDate: "20190615" }
        ];
        this.dpRooms = new eui.ArrayCollection(this.dsRooms);
        this.rooms.dataProvider = this.dpRooms;
        this.rooms.itemRenderer = GameItem;
        this.joinHandler();
        this.refreshRooms();
    };
    //监听的Handlers
    //1 LOGO logoHandler
    Home.prototype.logoHandler = function () {
    };
    //2 个人 personHandler
    Home.prototype.personHandler = function () {
        var openLoginEvent = new LOBBYEVENT(LOBBYEVENT.OPEN);
        if (isLogin) {
            openLoginEvent.pageName = "Person";
        }
        else {
            openLoginEvent.pageName = "Login";
        }
        this.dispatchEvent(openLoginEvent);
    };
    //3 加入
    Home.prototype.joinHandler = function () {
        this.setBtnFocus(this.join);
        this.roomState = 1;
    };
    //4 观战
    Home.prototype.observeHandler = function () {
        this.setBtnFocus(this.observe);
        this.roomState = 2;
    };
    //5 棋谱
    Home.prototype.historyHandler = function () {
        this.setBtnFocus(this.history);
        this.roomState = 3;
    };
    //6 创建
    Home.prototype.createHandler = function () {
        if (isLogin) {
            var openCreateEvent = new LOBBYEVENT(LOBBYEVENT.OPEN);
            openCreateEvent.pageName = "Create";
            this.dispatchEvent(openCreateEvent);
        }
        else {
            Toast.launch("请先登录");
        }
    };
    //7 搜索输入
    Home.prototype.searchConditionHandler = function () {
    };
    //8 搜索键
    Home.prototype.searchHandler = function () {
        this.searchHostName = this.searchCondition.text;
        this.searchRooms();
    };
    //9 清除键
    Home.prototype.clearHandler = function () {
        this.searchCondition.text = "";
        this.searchHandler();
    };
    //10 游戏列表
    Home.prototype.searchRooms = function () {
        //请求房间列表，其中，如果请求棋谱则不判断，如果在游戏中则请求当前游戏，房主名称等于搜索条件
        //1-等待中；2-进行中；3-已结束；4-当前游戏
        var req = { type: "list", roomState: 0, hostName: "" };
        req.roomState = this.roomState;
        req.hostName = this.searchHostName.trim();
        this.httppost(RoomSrv, req);
    };
    //11 自动刷新当前列表
    Home.prototype.refreshRooms = function () {
        var _this = this;
        this.searchRooms();
        var timer = new egret.Timer(this.refreshTime);
        timer.addEventListener(egret.TimerEvent.TIMER, function () {
            _this.searchRooms();
            timer.start();
        }, this);
        timer.start();
        //定时按当前条件刷新游戏列表
    };
    //页面方法
    //刷新房间列表
    Home.prototype.updateRoom = function (roomlist) {
        this.dsRooms = roomlist;
        this.dpRooms.replaceAll(this.dsRooms);
    };
    //控制按钮样式
    Home.prototype.setBtnFocus = function (btn) {
        //if(btn.name!='join'){
        this.join.selected = false;
        //}
        //if(btn.name!='observe'){
        this.observe.selected = false;
        //}	
        //if(btn.name!='history'){
        this.history.selected = false;
        //}		
        btn.selected = true;
    };
    //进入房间（通过GameItem完成）
    //网络部分
    Home.prototype.httppost = function (url, params) {
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        //设置方法为POST
        request.open(url, egret.HttpMethod.POST);
        //设置响应头为json
        request.setRequestHeader("Content-Type", "application/json");
        //对象转化为json文本
        var req = JSON.stringify(params);
        request.send(req);
        request.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onPostIOError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.onPostProgress, this);
    };
    Home.prototype.onGetComplete = function (event) {
        //根据msg.type分别处理
        var request = event.currentTarget;
        var res = JSON.parse(request.response);
        if (res.type) {
            //验证类别
            switch (res.type) {
                case "list":
                    this.updateRoom(res.rooms);
            }
        }
    };
    Home.prototype.onPostIOError = function (event) {
        console.log("post error : " + event);
    };
    Home.prototype.onPostProgress = function (event) {
        console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    };
    return Home;
}(eui.Component));
__reflect(Home.prototype, "Home", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Home.js.map