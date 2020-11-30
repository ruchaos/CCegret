const socket=io("http://192.168.31.15:3000/");

socket.on("ErrorMsg",(data)=>{
    Toast.launch(data.msg);
});



