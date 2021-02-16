// TypeScript file
let Srv:string="http://118.190.106.209:80/";
let Socket:string="http://118.190.106.209:3000/";
let RoomSrv:string=Srv+"list";
let GameSrv:string=Srv+"listGaming";
let RegisterSrv:string=Srv+"register";
let LoginSrv:string=Srv+"login";
let ChangePWSrv:string=Srv+"changePW";
let RecordSrv:string=Srv+"record";

let isLogin:boolean=false;
let username:string="guest";
let formerPage:string="Home";

let token="abc123";
let gameTypeNo=["1v1","2v2","2v2r","1V1r"];
let gameTimeNo=["快棋","长考","不限"];

///118.190.106.209
//192.168.31.15