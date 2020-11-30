var socket = io("http://192.168.31.15:3000/");
socket.on("ErrorMsg", function (data) {
    Toast.launch(data.msg);
});
//# sourceMappingURL=Socketio.js.map