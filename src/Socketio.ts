const socket=io("http://118.190.106.209:3000/");

socket.on("ErrorMsg",(data)=>{
    Toast.launch(data.msg);
});



