class Game extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
		this.addEventListener(eui.UIEvent.COMPLETE,this.uiCompHandler,this);

		this.skinName="resource/custom_skins/Game.exml";
		
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	private uiCompHandler():void{
		this.init();
	}

	public init():void{
		this.initBoard();
		var notation=new Notation();
		this.notation=notation;
		this.setupwithNotation(this.notation);

		this.testbutton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.test,this);

		

	}

	public test():void{


	}

	public initBoard():void{
		//初始化棋盘
		var notinboards=["A0","A10","K0","K10"];
		var noup=["A1","K1"];
		var nodown=["A9","K9"];
		var noleft=["B0","B10"];
		var noright=["J0","J10"];
		var hasleftup=["F1","K1","B5","F5","G6","K6","B10","G10"];
		var hasrightup=["A1","F1","F5","J5","A6","E6","E10","J10"];
		var hasleftdown=["B0","G0","G4","K4","B5","F5","F9","K9"];
		var hasrightdown=["E0","J0","A4","E4","F5","J5","A9","F9"];

		for(let Py=0;Py<11;Py++) {
			this.boards.push([]);
			for(let Px=0;Px<11;Px++){
				var bp= new BoardPostion();
				bp.Pname=this.Pnamelist[Px]+(Py);
				bp.Px=Px;
				bp.Py=Py;
				if(Py==0){
					bp.up=0;
					bp.connect[0]=0;
				};
				if(Py==10){
					bp.down=0;
					bp.connect[1]=0;
				}
				if(Px==0){
					bp.left=0;
					bp.connect[2]=0;
				}
				if(Px==10){
					bp.right=0;
					bp.connect[3]=0;
				}
				if(notinboards.indexOf(bp.Pname)>-1){
					bp.up=0;
					bp.down=0;
					bp.left=0;
					bp.right=0;
					bp.connect[0]=0;
					bp.connect[1]=0;
					bp.connect[2]=0;
					bp.connect[3]=0;
				}
				if(noup.indexOf(bp.Pname)>-1){
					bp.up=0;
					bp.connect[0]=0;
				}
				if(nodown.indexOf(bp.Pname)>-1){
					bp.down=0;
					bp.connect[1]=0;
				}
				if(noleft.indexOf(bp.Pname)>-1){
					bp.left=0;
					bp.connect[2]=0;
				}
				if(noright.indexOf(bp.Pname)>-1){
					bp.right=0;
					bp.connect[3]=0;
				}
				if(hasleftup.indexOf(bp.Pname)>-1){
					bp.leftup=1;
					bp.connect[4]=1;
				}
				if(hasrightup.indexOf(bp.Pname)>-1){
					bp.rightup=1;
					bp.connect[5]=1;
				}
				if(hasleftdown.indexOf(bp.Pname)>-1){
					bp.leftdown=1;
					bp.connect[6]=1;
				}
				if(hasrightdown.indexOf(bp.Pname)>-1){
					bp.rightdown=1;
					bp.connect[7]=1;
				}
				this.boards[Py].push(bp);
			}
		}

	}

	public setupwithNotation(notation:Notation){
			for(let Py=0;Py<11;Py++) {			
				for(let Px=0;Px<11;Px++){
					if(this.boards[Py][Px].Piece&&this.boards[Py][Px].Piece.LDE==0){
						this.removeChild(this.boards[Py][Px].Piece);
						this.boards[Py][Px].Piece=null;
					}	
				}
			}
		
		for (var i=0;i<notation.currentPostions.length;i++){
			var p=new Piece(notation.currentPostions[i].belong,notation.currentPostions[i].pieceType,notation.currentPostions[i].revive);
			p.LDE=notation.currentPostions[i].LDE;						
			p.Px=notation.currentPostions[i].Px;
			p.Py=notation.currentPostions[i].Py;
			p.Pname=this.boards[p.Py][p.Px].Pname;
			p.name=p.pieceName;
			p.x=this.Px2x(p.Px);
			p.y=this.Px2x(p.Py);
			p.addEventListener(egret.TouchEvent.TOUCH_TAP,this.pieceTapHandler.bind(this,p,false),this);
			this.boards[p.Py][p.Px].Piece=p;


			this.addChild(p);
			if(p.LDE>0){
				p.visible=false;
			}
		}

		this.checkEFI();

	}

	public Px2x(Px:number):number{
		return Px*(this.bwidth-(this.pwidth/2+this.bmargin)*2)/10+(this.pwidth/2+this.bmargin)-this.pwidth/2;
	}

	public Px2xE(Px:number):number{
		return Px*(this.bwidth-(this.pwidth/2+this.bmargin)*2)/10+(this.pwidth/2+this.bmargin)-this.ewidth/2;
	}

	public Px2xF(Px:number):number{
		return Px*(this.bwidth-(this.pwidth/2+this.bmargin)*2)/10+(this.pwidth/2+this.bmargin)-this.fwidth/2;
	}

	public Px2xT(Px:number):number{
		return Px*(this.bwidth-(this.pwidth/2+this.bmargin)*2)/10+(this.pwidth/2+this.bmargin)-this.twidth/2;
	}

	public pieceTapHandler(piece:Piece){
		if(this.currentSelectedPiece){
			this.clearMoves();
		}
		this.showMoves(piece);		

	}	

	//当棋子被点击时，判断状态，并展示可移动位置
	public showMoves(piece:Piece):void{
		//basictest	
		this.currentSelectedPiece=piece;		
		piece.setSelect(true);
		
		//根据piece的type、px、py以及this.boards中的信息，展示添加destination，稍后根据destination的点击情况继续。
		for(let d=0;d<8;d++){
			if(this.boards[piece.Py][piece.Px].connect[d]==1){
				let reach=false;
				let maxmoves=piece.maxmoves;
				var tpx=piece.Px;
				var tpy=piece.Py;
				
				if(piece.pieceType=="E"&&piece.Py==5&&piece.Px==5){
					maxmoves=5;
				}else if((piece.pieceType=="D"&&piece.restricted==false)){
					//除了不受力场影响的棋子
				}else if(piece.belong%2==1&&(this.boards[tpy][tpx].Ffield+this.boards[tpy][tpx].Efield)>0){
							//目标格中有对方力场（先手方）
					reach=true;//不能移动
				}else if(piece.belong%2==0&&(this.boards[tpy][tpx].Afield+this.boards[tpy][tpx].Wfield)>0){
							//目标格中有对方力场（后手方）
					reach=true;//不能移动
				}

				for(let m=1;m<=maxmoves&&reach==false;m++){
					tpx=piece.Px;
					tpy=piece.Py;
					switch (d){
						//up-0,down-1,left-2,right-3,↖leftup-4，↗rightup-5，↙leftdown-6，↘rightdown-7
						case 0:
							tpy-=m;
							break;

						case 1:
							tpy+=m
							break;

						case 2:
							tpx-=m;
							break;

						case 3:
							tpx+=m;
							break;

						case 4:
							tpx-=m;
							tpy-=m;
							break;

						case 5:
							tpx+=m;
							tpy-=m;
							break;

						case 6:
							tpx-=m;
							tpy+=m;
							break;

						case 7:
							tpx+=m;
							tpy+=m;
							break;
					}
					
					if(piece.pieceType=="D"&&piece.restricted==false){ //如果移动的棋子是未被禁锢的预言师
						if(this.boards[tpy][tpx].Piece!=null){   //如果目标格有棋子
							if((this.boards[tpy][tpx].Piece.belong-piece.belong)%2==0){ //是友方棋子
								reach=true; //（不可移动至此）已到尽头
							}else{ //不是友方棋子（即敌方棋子）
								this.putaAttackAt(tpx,tpy);//可以移动并攻击(目前与putaDestinationAt一样)
								reach=true;//已到尽头
							}	
						}else{//如果没有棋子
							this.putaDestinationAt(tpx,tpy);//可以移动
						}

					}else if(piece.pieceType=="E"&&piece.Py==5&&piece.Px==5){ //如果移动的棋子是法力之源的元素师
						if(this.boards[tpy][tpx].Piece!=null){   //如果目标格有棋子
							if((this.boards[tpy][tpx].Piece.belong-piece.belong)%2==0){
								if(this.boards[tpy][tpx].Piece.invisable==true){
									//如果是我方、隐身的（幻术师）
									//（什么也不做，不可以移动到此，但也不是尽头）
								}else{
									//如果是我方、其他棋子
									reach=true;//已到尽头
								}
								
							}else if((this.boards[tpy][tpx].Piece.belong-piece.belong)%2==1){
								if(this.boards[tpy][tpx].Piece.invisable==true){
									//如果是敌方、隐身的（幻术师）
									this.putaAttackAt(tpx,tpy);//可以移动并攻击(目前与putaDestinationAt一样)
									//但不是尽头
								}else{
									//如果是敌方、其他棋子
									this.putaAttackAt(tpx,tpy);//可以移动并攻击(目前与putaDestinationAt一样)
									reach=true;//已到尽头
								}
							}
						}else{//如果没有棋子
							this.putaDestinationAt(tpx,tpy);//可以移动
						}
					
					}else if(piece.pieceType=="I"&&piece.restricted==false){//如果移动的棋子是未被禁锢的幻术师
						if(piece.belong%2==1&&(this.boards[tpy][tpx].Ffield+this.boards[tpy][tpx].Efield)>0){
							//目标格中有对方力场（先手方）
							reach=true;//已到尽头
						}else if(piece.belong%2==0&&(this.boards[tpy][tpx].Afield+this.boards[tpy][tpx].Wfield)>0){
							//目标格中有对方力场（后手方）
							reach=true;//已到尽头
						}else if(this.boards[tpy][tpx].Piece!=null){ //如果目标格有棋子
							if(piece.belong%2==1&&(this.boards[tpy][tpx].Fenchant+this.boards[tpy][tpx].Eenchant)>0){
								//目标格中有对方力场（先手方）
								reach=true;//已到尽头
							}else if(piece.belong%2==0&&(this.boards[tpy][tpx].Aenchant+this.boards[tpy][tpx].Wenchant)>0){
								//目标格中有对方力场（后手方）
								reach=true;//已到尽头
							}							
						}else{
							this.putaDestinationAt(tpx,tpy);//可以移动
						}

					}else{	//其他棋子情况
						if(piece.belong%2==1&&(this.boards[tpy][tpx].Ffield+this.boards[tpy][tpx].Efield)>0){
							//目标格中有对方力场（先手方）
							reach=true;//已到尽头
						}else if(piece.belong%2==0&&(this.boards[tpy][tpx].Afield+this.boards[tpy][tpx].Wfield)>0){
							//目标格中有对方力场（后手方）
							reach=true;//已到尽头
						}else if(this.boards[tpy][tpx].Piece!=null){ //如果目标格有棋子
							if(this.boards[tpy][tpx].Piece.invisable==true){
									//隐身的（幻术师）									
									//什么也不做，跳过，但不是尽头
							}else if((this.boards[tpy][tpx].Piece.belong-piece.belong)%2==0){ //是友方棋子
								reach=true;//已到尽头
							}else if((this.boards[tpy][tpx].Piece.belong-piece.belong)%2==1){ //是敌方棋子
								if(piece.weak==true){ //虚弱的棋子（幻术师，或有己方召唤兽在场的召唤师）
									reach=true;//已到尽头	
								}else{
									this.putaAttackAt(tpx,tpy);//可以移动并攻击(目前与putaDestinationAt一样)
									reach=true;//已到尽头
								}
							}
						}else{
							this.putaDestinationAt(tpx,tpy);//可以移动
						}
						
					}
					if(this.boards[tpy][tpx].connect[d]==0){ //如果目标格同一方向上不再有连接的路
								reach=true;//已到尽头
					}					

				}
			}
			
		}

		//测试，下方放置一个destina；
		//this.putaDestinationAt(piece.Px,piece.Py+1);


	}

	public clearMoves():void{
		if(this.currentSelectedPiece){
			this.currentSelectedPiece.setSelect(false);
			for (var i=0;i< this.destinations.length;i++){				
				this.removeChild(this.destinations[i]);				
			}
			this.destinations=[];
		}
	}
	public DestinationTapHandler(t:Target):void{
		//点击destination后，确认，否则clearMoves()
		//确认时，向服务器提交步法，包括操作人信息、游戏房间信息、步法信息、用时信息（以服务器时间为准）、局面校验
		//等待服务器返回新的notation，并更新。

	
		var pieceName="";
		if(this.currentSelectedPiece){
			pieceName=this.currentSelectedPiece.pieceName;
		}
		
		this.notation.movePiece(pieceName,t.Px,t.Py);
		this.clearMoves();
		this.setupwithNotation(this.notation);

	}

	public putaDestinationAt(Px:number,Py:number):void{
		var t=new Target(1,Px,Py);
		t.x=this.Px2xT(Px);
		t.y=this.Px2xT(Py);
		t.addEventListener(egret.TouchEvent.TOUCH_TAP,this.DestinationTapHandler.bind(this,t,false),this);
		this.destinations.push(t);
		this.addChild(t);
	}

	public putaAttackAt(Px:number,Py:number):void{
		this.putaDestinationAt(Px,Py);
	}

	//当点击技能时，展示技能位置

	//移动棋子
	//交换棋子位置
	//杀死棋子
	//放逐棋子
	//复活棋子
	//放置召唤兽

	//放置结界指示
	public putEnchantAt(belong:number,Px:number,Py:number):void{
		var bl=['x','A','F','W','E'];
		var source="resource/pic/game/"+bl[belong]+"Enchant.png";		
		var img=new eui.Image(source);
		img.width=this.ewidth;
		img.height=this.ewidth;
		img.x=this.Px2xE(Px);
		img.y=this.Px2xE(Py);
		img.name=bl[belong]+"Enchant";
		if(!this.EFlayer.getChildByName(img.name)){
			this.EFlayer.addChild(img);
		}
	}

	public putFieldAt(belong:number,Px:number,Py:number,mainfield:boolean):void{
		var bl=['x','A','F','W','E'];
		var source="resource/pic/game/"+bl[belong]+"field.png";	
		if(mainfield){
			source="resource/pic/game/"+bl[belong]+"fieldmain.png";	
		}			
		var img=new eui.Image(source);
		img.width=this.fwidth;
		img.height=this.fwidth;
		img.x=this.Px2xF(Px);
		img.y=this.Px2xF(Py);
		
		this.EFlayer.addChild(img);		
	}

	
	//移除结界指示(可能没用)
	public clearEnchant(belong:number):void{
		var bl=['x','A','F','W','E'];
		var name=bl[belong]+"Enchant";
		if(this.EFlayer.getChildByName(name)){
			this.EFlayer.removeChild(this.EFlayer.getChildByName(name));			
		}
	}

	//移除所有结界和力场展示
	public clearEF():void{
		this.EFlayer.removeChildren();
	}

	//周围是否有特定棋子
	public findSurround(Px:number,Py:number,pieceName:string):boolean{
		var f=false;
			for(let y=-1;y<2;y++){
				for(let x=-1;x<2;x++){
					var bpx=Px+x;
					var bpy=Py+y;
					if((bpx>=0) &&(bpx<=10)&&(bpy>=0)&&(bpy<=10)){
						if(this.boards[bpy][bpx].Piece&&this.boards[bpy][bpx].Piece.pieceName==pieceName){
							f=true;
						}
					}					
				}
			}
		return f
	}

	public checkEFI():void{
		//清除所有棋盘上的EF状态
		for(let Py=0;Py<11;Py++) {			
			for(let Px=0;Px<11;Px++){
				this.boards[Py][Px].Aenchant=0;
				this.boards[Py][Px].Fenchant=0;
				this.boards[Py][Px].Wenchant=0;
				this.boards[Py][Px].Eenchant=0;
				this.boards[Py][Px].Afield=0;
				this.boards[Py][Px].Ffield=0;
				this.boards[Py][Px].Wfield=0;
				this.boards[Py][Px].Efield=0;
			}
		}
		this.clearEF();
		//分别寻找D的位置:
			//检查是否被禁锢
			//若未禁锢，设置当前位置，及周围八个位置的对应E，设置对应E的显示位置		
		var d1=<Piece>this.getChildByName("AD");
		if((d1.restricted==false)&&(d1.LDE==0)){
			for(let y=-1;y<2;y++){
				for(let x=-1;x<2;x++){
					var bpx=d1.Px+x;
					var bpy=d1.Py+y;
					if((bpx>=0) &&(bpx<=10)&&(bpy>=0)&&(bpy<=10)){
						this.boards[bpy][bpx].Aenchant=1;
						
					}
				}
			}
			this.putEnchantAt(1,d1.Px,d1.Py);		
		}
		var d2=<Piece>this.getChildByName("FD");
		if((d2.restricted==false)&&(d2.LDE==0)){
			for(let y=-1;y<2;y++){
				for(let x=-1;x<2;x++){
					var bpx=d2.Px+x;
					var bpy=d2.Py+y;
					if((bpx>=0) &&(bpx<=10)&&(bpy>=0)&&(bpy<=10)){
						this.boards[bpy][bpx].Fenchant=1;
						
					}
				}
			}
			this.putEnchantAt(2,d2.Px,d2.Py);			
		}
		var d3=<Piece>this.getChildByName("WD");
		if((d3.restricted==false)&&(d3.LDE==0)){
			for(let y=-1;y<2;y++){
				for(let x=-1;x<2;x++){
					var bpx=d3.Px+x;
					var bpy=d3.Py+y;
					if((bpx>=0) &&(bpx<=10)&&(bpy>=0)&&(bpy<=10)){
						this.boards[bpy][bpx].Wenchant=1;						
					}
				}
			}
			this.putEnchantAt(3,d3.Px,d3.Py);			
		}
		var d4=<Piece>this.getChildByName("ED");
		if((d4.restricted==false)&&(d4.LDE==0)){
			for(let y=-1;y<2;y++){
				for(let x=-1;x<2;x++){
					var bpx=d4.Px+x;
					var bpy=d4.Py+y;
					if((bpx>=0) &&(bpx<=10)&&(bpy>=0)&&(bpy<=10)){
						this.boards[bpy][bpx].Eenchant=1;
						
					}
				}
			}
			this.putEnchantAt(4,d4.Px,d4.Py);				
		}
		
		//分别寻找P的位置：
		var p1=<Piece>this.getChildByName("AP");		
			//检查是否在法力之源
			if((p1.Pname=="F5")){
				//若在法力之源，在周围八个位置中，没有敌方E设置F，设置对应F的位置				
				for(let y=-1;y<2;y++){
					for(let x=-1;x<2;x++){
						var bpx=p1.Px+x;
						var bpy=p1.Py+y;
						if((this.boards[bpy][bpx].Fenchant==0)&&(this.boards[bpy][bpx].Eenchant==0)){
							this.boards[bpy][bpx].Afield=1;
							if (x==0 && y==0){
								this.putFieldAt(1,bpx,bpy,true);
							}else{
								this.putFieldAt(1,bpx,bpy,false);
							}
						}
					}
				}		
			}else if((p1.restricted==false)&&(p1.LDE==0)
				&&(this.boards[p1.Py][p1.Px].Fenchant==0)
				&&(this.boards[p1.Py][p1.Px].Eenchant==0)
				&&(this.findSurround(p1.Px,p1.Py,"AW"))){
				//否则，检查不被禁锢，是不敌方E之中，是否周围有己方权杖
					//设置主F和左右F，设置对应F的位置
					//主
						this.boards[p1.Py][p1.Px].Afield=1;
						this.putFieldAt(1,p1.Px,p1.Py,true);
					//左
						if(((p1.Px-1)>=0)
						&&(this.boards[p1.Py][p1.Px-1].Fenchant==0)
						&&(this.boards[p1.Py][p1.Px-1].Eenchant==0)){
							this.boards[p1.Py][p1.Px-1].Afield=1;
							this.putFieldAt(1,p1.Px-1,p1.Py,true);	
						}
					//右
						if(((p1.Px+1)<=10)
						&&(this.boards[p1.Py][p1.Px+1].Fenchant==0)
						&&(this.boards[p1.Py][p1.Px+1].Eenchant==0)){
							this.boards[p1.Py][p1.Px+1].Afield=1;
							this.putFieldAt(1,p1.Px+1,p1.Py,true);	
						}
			}
			
		var p2=<Piece>this.getChildByName("FP");		
			//检查是否在法力之源
			if((p2.Pname=="F5")){
				//若在法力之源，在周围八个位置中，没有敌方E设置F，设置对应F的位置				
				for(let y=-1;y<2;y++){
					for(let x=-1;x<2;x++){
						var bpx=p2.Px+x;
						var bpy=p2.Py+y;
						if((this.boards[bpy][bpx].Aenchant==0)&&(this.boards[bpy][bpx].Wenchant==0)){
							this.boards[bpy][bpx].Ffield=1;
							if (x==0 && y==0){
								this.putFieldAt(2,bpx,bpy,true);
							}else{
								this.putFieldAt(2,bpx,bpy,false);
							}
						}
					}
				}		
			}else if((p2.restricted==false)&&(p2.LDE==0)
				&&(this.boards[p2.Py][p2.Px].Aenchant==0)
				&&(this.boards[p2.Py][p2.Px].Wenchant==0)
				&&(this.findSurround(p2.Px,p2.Py,"FW"))){
				//否则，检查不被禁锢，是不敌方E之中，是否周围有己方权杖
					//设置主F和左右F，设置对应F的位置
					//主
						this.boards[p2.Py][p2.Px].Ffield=1;
						this.putFieldAt(2,p2.Px,p2.Py,true);
						
					//左
						if(((p2.Py-1)>=0)
						&&(this.boards[p2.Py-1][p2.Px].Aenchant==0)
						&&(this.boards[p2.Py-1][p2.Px].Wenchant==0)){
							this.boards[p2.Py-1][p2.Px].Ffield=1;
							this.putFieldAt(2,p2.Px,p2.Py-1,false);
						}
					//右
						if(((p2.Py+1)<=10)
						&&(this.boards[p2.Py+1][p2.Px].Aenchant==0)
						&&(this.boards[p2.Py+1][p2.Px].Wenchant==0)){
							this.boards[p2.Py+1][p2.Px].Ffield=1;
							this.putFieldAt(2,p2.Px,p2.Py+1,false);
						}
			}

		var p3=<Piece>this.getChildByName("WP");		
			//检查是否在法力之源
			if((p3.Pname=="F5")){
				//若在法力之源，在周围八个位置中，没有敌方E设置F，设置对应F的位置				
				for(let y=-1;y<2;y++){
					for(let x=-1;x<2;x++){
						var bpx=p3.Px+x;
						var bpy=p3.Py+y;
						if((this.boards[bpy][bpx].Fenchant==0)&&(this.boards[bpy][bpx].Eenchant==0)){
							this.boards[bpy][bpx].Wfield=1;
							if (x==0 && y==0){
								this.putFieldAt(3,bpx,bpy,true);
							}else{
								this.putFieldAt(3,bpx,bpy,false);
							}
						}
					}
				}		
			}else if((p3.restricted==false)&&(p3.LDE==0)
				&&(this.boards[p3.Py][p3.Px].Fenchant==0)
				&&(this.boards[p3.Py][p3.Px].Eenchant==0)
				&&(this.findSurround(p3.Px,p3.Py,"WW"))){
				//否则，检查不被禁锢，是不敌方E之中，是否周围有己方权杖
					//设置主F和左右F，设置对应F的位置
					//主
						this.boards[p3.Py][p3.Px].Wfield=1;
						this.putFieldAt(3,p3.Px,p3.Py,true);
					//左
						if(((p3.Px-1)>=0)
						&&(this.boards[p3.Py][p3.Px-1].Fenchant==0)
						&&(this.boards[p3.Py][p3.Px-1].Eenchant==0)){
							this.boards[p3.Py][p3.Px-1].Wfield=1;
							this.putFieldAt(3,p3.Px-1,p3.Py,false);
						}
					//右
						if(((p3.Px+1)<=10)
						&&(this.boards[p3.Py][p3.Px+1].Fenchant==0)
						&&(this.boards[p3.Py][p3.Px+1].Eenchant==0)){
							this.boards[p3.Py][p3.Px+1].Wfield=1;
							this.putFieldAt(3,p3.Px+1,p3.Py,false);
						}
			}

		var p4=<Piece>this.getChildByName("EP");		
			//检查是否在法力之源
			if((p4.Pname=="F5")){
				//若在法力之源，在周围八个位置中，没有敌方E设置F，设置对应F的位置				
				for(let y=-1;y<2;y++){
					for(let x=-1;x<2;x++){
						var bpx=p4.Px+x;
						var bpy=p4.Py+y;
						if((this.boards[bpy][bpx].Aenchant==0)&&(this.boards[bpy][bpx].Wenchant==0)){
							this.boards[bpy][bpx].Efield=1;
							if (x==0 && y==0){
								this.putFieldAt(4,bpx,bpy,true);
							}else{
								this.putFieldAt(4,bpx,bpy,false);
							}
						}
					}
				}		
			}else if((p4.restricted==false)&&(p4.LDE==0)
				&&(this.boards[p4.Py][p4.Px].Aenchant==0)
				&&(this.boards[p4.Py][p4.Px].Wenchant==0)
				&&(this.findSurround(p4.Px,p4.Py,"EW"))){
				//否则，检查不被禁锢，是不敌方E之中，是否周围有己方权杖
					//设置主F和左右F，设置对应F的位置
					//主
						this.boards[p4.Py][p4.Px].Efield=1;
						this.putFieldAt(4,p4.Px,p4.Py,true);
					//左
						if(((p4.Py-1)>=0)
						&&(this.boards[p4.Py-1][p4.Px].Aenchant==0)
						&&(this.boards[p4.Py-1][p4.Px].Wenchant==0)){
							this.boards[p4.Py-1][p4.Px].Efield=1;
							this.putFieldAt(4,p4.Px,p4.Py-1,false);
						}
					//右
						if(((p4.Py+1)<=10)
						&&(this.boards[p4.Py+1][p4.Px].Aenchant==0)
						&&(this.boards[p4.Py+1][p4.Px].Wenchant==0)){
							this.boards[p4.Py+1][p4.Px].Efield=1;
							this.putFieldAt(4,p4.Px,p4.Py+1,false);
						}
			}
			
		//分别寻找I的位置：
		var i1=<Piece>this.getChildByName("AI");
		if((i1.restricted==false)&&(i1.LDE==0)
				&&(this.boards[i1.Py][i1.Px].Fenchant==0)
				&&(this.boards[i1.Py][i1.Px].Eenchant==0)
				&&(this.boards[i1.Py][i1.Px].Ffield==0)
				&&(this.boards[i1.Py][i1.Px].Efield==0)
				){
					//若被禁锢，或在敌方E，敌方F中，设置为现身
					i1.setInvisable(true);
				}else{
					//否则设置为隐身
					i1.setInvisable(false);
				}

		var i2=<Piece>this.getChildByName("FI");
		if((i2.restricted==false)&&(i2.LDE==0)
				&&(this.boards[i2.Py][i2.Px].Aenchant==0)
				&&(this.boards[i2.Py][i2.Px].Wenchant==0)
				&&(this.boards[i2.Py][i2.Px].Afield==0)
				&&(this.boards[i2.Py][i2.Px].Wfield==0)
				){
					//若被禁锢，或在敌方E，敌方F中，设置为现身
					i2.setInvisable(true);
				}else{
					//否则设置为隐身
					i2.setInvisable(false);
				}			

		var i3=<Piece>this.getChildByName("WI");
		if((i3.restricted==false)&&(i3.LDE==0)
				&&(this.boards[i3.Py][i3.Px].Fenchant==0)
				&&(this.boards[i3.Py][i3.Px].Eenchant==0)
				&&(this.boards[i3.Py][i3.Px].Ffield==0)
				&&(this.boards[i3.Py][i3.Px].Efield==0)
				){
					//若被禁锢，或在敌方E，敌方F中，设置为现身
					i3.setInvisable(true);
				}else{
					//否则设置为隐身
					i3.setInvisable(false);
				}

		var i4=<Piece>this.getChildByName("EI");
		if((i4.restricted==false)&&(i4.LDE==0)
				&&(this.boards[i4.Py][i4.Px].Aenchant==0)
				&&(this.boards[i4.Py][i4.Px].Wenchant==0)
				&&(this.boards[i4.Py][i4.Px].Afield==0)
				&&(this.boards[i4.Py][i4.Px].Wfield==0)
				){
					//若被禁锢，或在敌方E，敌方F中，设置为现身
					i4.setInvisable(true);
				}else{
					//否则设置为隐身
					i4.setInvisable(false);
				}	
		//在棋盘上放置各个E，在棋盘上放置各个F
	}

	public testbutton:eui.Button;
	public EFlayer:eui.Group;



	public bwidth:number=700;
	public bmargin:number=5;
	public pwidth:number=60;
	public ewidth:number=172;
	public fwidth:number=62;
	public twidth:number=50;


	public currentSelectedPiece:Piece;
	public destinations:Target[]=[];

	public notation:Notation;
	public boards:BoardPostion[][]=[];
	private Pnamelist:Array<string>=["A","B","C","D","E","F","G","H","I","J","K"];


	
}