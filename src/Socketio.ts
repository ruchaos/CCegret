const socket=io("http://192.168.31.15:3000/");

//创建房间

//房间管理

//离开房间

//掉线（如果在房间，广播给所有在房间的其他玩家）

//游戏指令

//观战




socket.on("ErrorMsg",(data)=>{
    Toast.launch(data.msg);
});



