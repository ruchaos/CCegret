var socket = io("http://118.190.106.209:3000/");
socket.on("ErrorMsg", function (data) {
    Toast.launch(data.msg);
});
//# sourceMappingURL=Socketio.js.map