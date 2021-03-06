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
		this.boardcancel.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clearMoves,this);
		this.showdead.addEventListener(egret.TouchEvent.TOUCH_TAP,this.showgraveyard,this);
		this.graveyardClose.addEventListener(egret.TouchEvent.TOUCH_TAP,this.hidegraveyard,this);
		this.reviveCancel.addEventListener(egret.TouchEvent.TOUCH_TAP,this.hidereviveZone,this);
		this.confirmTargetButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sendMoves,this);

	}

	public showgraveyard():void{
		this.graveyard.visible=true;
	}
	
	public hidegraveyard():void{
		this.graveyard.visible=false;
	}
	public hidereviveZone():void{
		this.reviveZone.visible=false;
	}

	public setBoardColor(num:number){
		var colors=[0x669933,0xcc6600,0x336699,0x663366];
		if(num<=colors.length&&num>0){
			this.boardcancel.strokeColor=colors[num-1];
		}else{
			this.boardcancel.strokeColor=0x000000;
		}		
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
	public getPieceInXY(Px,Py):Piece{
		var p=null;
		
		for (var j=0;j<this.Pieces.length;j++){
				if(this.Pieces[j].pieceName==this.boards[Py][Px].Piece){
					p=this.Pieces[j];
				}
			}
		return p
	}

	public setupwithNotation(notation:any){
		//清除棋盘上的棋子
			for(let Py=0;Py<11;Py++) {			
				for(let Px=0;Px<11;Px++){
					this.boards[Py][Px].Piece="";						
				}
			}
			for(let k=0;k<this.Pieces.length;k++){
				if(this.BoardLayer.getChildByName(this.Pieces[k].name)){
					this.BoardLayer.removeChild(this.Pieces[k]);
				}
			}
			
		//清除墓地棋子
			this.graveA.removeChildren();
			this.graveE.removeChildren();
			this.graveF.removeChildren();
			this.graveW.removeChildren();		

		
		for (var i=0;i<notation.currentPostions.length;i++){
			var p;
			var findit=false;
			for (var j=0;j<this.Pieces.length;j++){
				if(this.Pieces[j].pieceName==notation.currentPostions[i].pieceName){
					p=this.Pieces[j];
					findit=true;
				}
			}
			if(!findit){
				p=new Piece(notation.currentPostions[i].belong,notation.currentPostions[i].pieceName);
				p.piece.addEventListener(egret.TouchEvent.TOUCH_TAP,this.pieceTapHandler.bind(this,p,false),this);
				p.skill.addEventListener(egret.TouchEvent.TOUCH_TAP,this.skillTapHandler.bind(this,p,false),this);
				p.name=p.pieceName;
				this.Pieces.push(p);
			}
		
			p.LDE=notation.currentPostions[i].LDE;
			p.Px=notation.currentPostions[i].Px;
			p.Py=notation.currentPostions[i].Py;
			p.setRevive(notation.currentPostions[i].revive);
			
			p.Pname=this.boards[p.Py][p.Px].Pname;//todo-可能没用，从所在的PXPY即可知道Pname
			
			p.x=this.Px2x(p.Px);
			p.y=this.Px2x(p.Py);
			if(p.LDE==0){
				this.boards[p.Py][p.Px].Piece=p.pieceName;
				this.BoardLayer.addChild(p);
			}else if(p.LDE==1){
									
				var img=new eui.Image();
				img.source=p.p.source;
				img.width=40;
				img.height=40;					
				img.y=0;
				img.name=p.pieceName;
				if(p.belong==1){
					img.x=(this.graveA.numChildren)*45;
					this.graveA.addChild(img);
				}else if(p.belong==2){
					img.x=(this.graveF.numChildren)*45;
					this.graveF.addChild(img);
				}else if(p.belong==3){
					img.x=(this.graveW.numChildren)*45;
					this.graveW.addChild(img);
				}else if(p.belong==4){
					img.x=(this.graveE.numChildren)*45;
					this.graveE.addChild(img);
				}
			}else{				
				
			}
		}		

		this.setRestrict(notation.currentStats.restrict);

		this.checkEFIwithNotation(notation);

		this.setBoardColor(notation.currentPlayer);
		

	}

	public SyncNotation(notation:any){
		this.notation.currentPostions=notation.currentPostions;
		this.notation.lastMove=notation.lastMove;
		this.notation.currentPlayer=notation.currentPlayer;
		this.notation.currentStats=notation.currentStats;
		this.notation.NotationHistory=notation.NotationHistory;
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
		if(piece.belong==this.notation.currentPlayer){
			this.showMoves(piece);
			piece.skillname=this.skillbutton(piece);
			console.log(piece.skillname);
			if(piece.skillname==""){
				piece.skill.visible=false;
			}else{
				piece.skill.visible=true;
			}
		}
	}

	public skillbutton(piece:Piece):string{	
		let bpy=piece.Py;
		let bpx=piece.Px;
		let postison=this.boards[bpy][bpx];	

		if(piece.pieceType=="D"&&piece.restricted==false){ //预言师
			if(piece.Py==5&&piece.Px==5){				
				return "Restrict";
			}
		}else if(piece.pieceType=="N"&&piece.restricted==false){
			if(piece.Py==5&&piece.Px==5){
				return "Resurrection";
			}else if((piece.belong%2==1&&(postison.Ffield+postison.Efield+postison.Fenchant+postison.Eenchant)==0)||
					(piece.belong%2==0&&(postison.Afield+postison.Wfield+postison.Aenchant+postison.Wenchant)==0)){
				return "Reincarnation";
			}
		}else if(piece.pieceType=="I"&&piece.restricted==false){
			if((piece.belong%2==1&&(postison.Ffield+postison.Efield+postison.Fenchant+postison.Eenchant)==0)||
				(piece.belong%2==0&&(postison.Afield+postison.Wfield+postison.Aenchant+postison.Wenchant)==0)){
				if(this.getPieceInXY(5,5)&&this.getPieceInXY(5,5).pieceType=="I"&&(this.getPieceInXY(5,5).belong-piece.belong+4)%2==0){
					
						
					return "Entanglement";
						
					
				}else{
					return "Transposition";
				}
			}

		}else if(piece.pieceType=="S"&&piece.restricted==false){
			var MonsterAlive=false;
			for(let i=0;i<this.notation.currentPostions.length;i++){
				if(this.notation.currentPostions[i].pieceType=="M"&&this.notation.currentPostions[i].belong==piece.belong&&this.notation.currentPostions[i].LDE==0){
					MonsterAlive=true;
				}
			}
			if(!MonsterAlive){//没有己方召唤兽在场（LDE=0）
				if(piece.Py==5&&piece.Px==5){
					return "Convene";
				}else if((piece.belong%2==1&&(postison.Ffield+postison.Efield+postison.Fenchant+postison.Eenchant)==0)||
					(piece.belong%2==0&&(postison.Afield+postison.Wfield+postison.Aenchant+postison.Wenchant)==0)){
					return "Summon";
				}
			}
			
		}
		return "";
	}
	public showResurrectionPostions(piece:Piece,reviveName:String):void{
		//关闭reviveZone
		this.hidereviveZone();
		//复活技能定位
		//显示棋盘上，所有不在敌方结界中，不在敌方力场中，没有棋子的的位置
		for(let by=0;by<11;by++){
			for(let bx=0;bx<11;bx++){
				if((bx==0&&by==0)||(bx==10&&by==10)||(bx==10&&by==0)||(bx==0&&by==10)){

				}else{
					if(this.boards[by][bx].Piece==""){
						if(piece.belong%2==0&&(this.boards[by][bx].Aenchant+this.boards[by][bx].Wenchant+this.boards[by][bx].Afield+this.boards[by][bx].Wfield)==0){
							this.putaMagicAt(bx,by);
						}else if(piece.belong%2==1&&(this.boards[by][bx].Fenchant+this.boards[by][bx].Eenchant+this.boards[by][bx].Ffield+this.boards[by][bx].Efield)==0){
							this.putaMagicAt(bx,by);
						}
						
					}
				}
				
			}
		}
		this.gameMove.currentSkill="Resurrection";
		this.gameMove.currentTargets.push({targetPiece:reviveName});

	}

	public showReincarnationPostions(piece:Piece,reviveName:String):void{
		//关闭reviveZone
		this.hidereviveZone();
		//复活技能定位
		//显示周围，所有不在敌方结界中，不在敌方力场中，没有棋子的的位置
		


		for(let y=-1;y<2;y++){
			for(let x=-1;x<2;x++){
				var bx=x+piece.Px;
				var by=y+piece.Py;
				if((bx==0&&by==0)||(bx==10&&by==10)||(bx==10&&by==0)||(bx==0&&by==10)){

				}else if(bx>=0&&bx<=10&&by>=0&&by<=10){				
					if(this.boards[by][bx].Piece==""){
						if(piece.belong%2==0&&(this.boards[by][bx].Aenchant+this.boards[by][bx].Wenchant+this.boards[by][bx].Afield+this.boards[by][bx].Wfield)==0){
							this.putaMagicAt(bx,by);
						}else if(piece.belong%2==1&&(this.boards[by][bx].Fenchant+this.boards[by][bx].Eenchant+this.boards[by][bx].Ffield+this.boards[by][bx].Efield)==0){
							this.putaMagicAt(bx,by);
						}						
					}
				}
			}
		}
		this.gameMove.currentSkill="Reincarnation";
		this.gameMove.currentTargets.push({targetPiece:reviveName});

	}

	public skillTapHandler(piece:Piece):void{
		if(this.currentSelectedPiece){
			this.clearMoves();
		}		
		//根据技能名字判断技能展示方式
		switch(piece.skillname){
			case "Restrict":
			//标记棋盘 所有敌方 非权杖 非召唤兽 存活棋子所在位置
				for (let i=0;i<this.notation.currentPostions.length;i++){
					if((this.notation.currentPostions[i].LDE==0&&this.notation.currentPostions[i].belong-piece.belong+4)%2==1){//是敌方棋子
						if(this.notation.currentPostions[i].pieceType!="W"&&this.notation.currentPostions[i].pieceType[0]!="M"){
							
							this.putaMagicAt(this.notation.currentPostions[i].Px,this.notation.currentPostions[i].Py);
							this.gameMove.currentSkill="Restrict";
						}
					}
				}
				
			break;

			case "Resurrection":
				//点击位置时，显示revivezone。
				this.bordies.removeChildren();
				for (let i=0;i<this.notation.currentPostions.length;i++){
					if(this.notation.currentPostions[i].belong==piece.belong&&this.notation.currentPostions[i].LDE==1){
						var reviveTarget=new eui.Image();
						reviveTarget.name=this.notation.currentPostions[i].pieceName;
						reviveTarget.source="resource/pic/game/"+reviveTarget.name+"r.png";
						reviveTarget.width=70;
						reviveTarget.height=70;					
						reviveTarget.y=0;
						reviveTarget.x=(this.bordies.numChildren)*80;
						reviveTarget.addEventListener(egret.TouchEvent.TOUCH_TAP,this.showResurrectionPostions.bind(this,piece,reviveTarget.name,false),this);
						this.bordies.addChild(reviveTarget);
					}
				}
				if(this.bordies.numChildren==0){
					this.cantReviveTip.visible=true;
				}else{
					this.cantReviveTip.visible=false;
				}
				this.reviveZone.visible=true;
				//点击对应棋子，显示棋盘上，所有不在敌方结界中，不在敌方力场中，没有棋子的的位置(showResurrectionPostions)
				//点击retreat取消（listener)				

			break;
			case "Reincarnation":
				this.bordies.removeChildren();
				for (let i=0;i<this.notation.currentPostions.length;i++){
					if(this.notation.currentPostions[i].belong==piece.belong&&this.notation.currentPostions[i].LDE==1){
						var reviveTarget=new eui.Image();
						reviveTarget.name=this.notation.currentPostions[i].pieceName;
						reviveTarget.source="resource/pic/game/"+reviveTarget.name+"r.png";
						reviveTarget.width=70;
						reviveTarget.height=70;					
						reviveTarget.y=0;
						reviveTarget.x=(this.bordies.numChildren)*80;
						reviveTarget.addEventListener(egret.TouchEvent.TOUCH_TAP,this.showReincarnationPostions.bind(this,piece,reviveTarget.name,false),this);
						this.bordies.addChild(reviveTarget);
					}
				}
				if(this.bordies.numChildren==0){
					this.cantReviveTip.visible=true;
				}else{
					this.cantReviveTip.visible=false;
				}
				this.reviveZone.visible=true;


				//显示revivezone。
				//点击对应棋子，杀死死灵师，并在对应位置复活棋子//点击retreat取消


			break;
			case "Entanglement":
				//显示所有己方和友方不在敌方结界和力场中的，非权杖棋子
				for (let i=0;i<this.notation.currentPostions.length;i++){
					if(this.notation.currentPostions[i].LDE==0&&(this.notation.currentPostions[i].belong-piece.belong+4)%2==0){//是己方或友方棋子
						if(this.notation.currentPostions[i].pieceType!="W"&&this.notation.currentPostions[i].pieceName!=piece.pieceName){//不是权杖
							let by=this.notation.currentPostions[i].Py;
							let bx=this.notation.currentPostions[i].Px;
							
							if(piece.belong%2==0&&(this.boards[by][bx].Aenchant+this.boards[by][bx].Wenchant+this.boards[by][bx].Afield+this.boards[by][bx].Wfield)==0){
								
								this.putaMagicAt(bx,by);
							}else if(piece.belong%2==1&&(this.boards[by][bx].Fenchant+this.boards[by][bx].Eenchant+this.boards[by][bx].Ffield+this.boards[by][bx].Efield)==0){
								
								this.putaMagicAt(bx,by);
							}							
							this.gameMove.currentSkill="Entanglement";
						}
					}
				}

			break;
			case "Transposition":
				//显示所有己方不在敌方结界和力场中的，非权杖棋子
				for (let i=0;i<this.notation.currentPostions.length;i++){
					if(this.notation.currentPostions[i].LDE==0&&this.notation.currentPostions[i].belong==piece.belong){//是己方或友方棋子
						if(this.notation.currentPostions[i].pieceType!="W"&&this.notation.currentPostions[i].pieceName!=piece.pieceName){//不是权杖且不是自身
							let by=this.notation.currentPostions[i].Py;
							let bx=this.notation.currentPostions[i].Px;
							
							if(piece.belong%2==0&&(this.boards[by][bx].Aenchant+this.boards[by][bx].Wenchant+this.boards[by][bx].Afield+this.boards[by][bx].Wfield)==0){
								
								this.putaMagicAt(bx,by);
							}else if(piece.belong%2==1&&(this.boards[by][bx].Fenchant+this.boards[by][bx].Eenchant+this.boards[by][bx].Ffield+this.boards[by][bx].Efield)==0){
								
								this.putaMagicAt(bx,by);
							}
							this.gameMove.currentSkill="Transposition";
						}
					}
				}

			break;
			case "Convene":
			//显示棋盘上，所有不在敌方结界中，不在敌方力场中，没有棋子的的位置
			for(let by=0;by<11;by++){
				for(let bx=0;bx<11;bx++){
					if((bx==0&&by==0)||(bx==10&&by==10)||(bx==10&&by==0)||(bx==0&&by==10)){

					}else{
						if(this.boards[by][bx].Piece==""){
							if(piece.belong%2==0&&(this.boards[by][bx].Aenchant+this.boards[by][bx].Wenchant+this.boards[by][bx].Afield+this.boards[by][bx].Wfield)==0){
								this.putaMagicAt(bx,by);
							}else if(piece.belong%2==1&&(this.boards[by][bx].Fenchant+this.boards[by][bx].Eenchant+this.boards[by][bx].Ffield+this.boards[by][bx].Efield)==0){
								this.putaMagicAt(bx,by);
							}
							this.gameMove.currentSkill="Convene";
						}
					}
				}
			}


			break;
			case "Summon":
			//显示周围，所有不在敌方结界中，不在敌方力场中，没有棋子的的位置
					for(let y=-1;y<2;y++){
						for(let x=-1;x<2;x++){
							var bx=x+piece.Px;
							var by=y+piece.Py;
							if((bx==0&&by==0)||(bx==10&&by==10)||(bx==10&&by==0)||(bx==0&&by==10)){

							}else if(bx>=0&&bx<=10&&by>=0&&by<=10){				
								if(this.boards[by][bx].Piece==""){
									if(piece.belong%2==0&&(this.boards[by][bx].Aenchant+this.boards[by][bx].Wenchant+this.boards[by][bx].Afield+this.boards[by][bx].Wfield)==0){
										this.putaMagicAt(bx,by);
									}else if(piece.belong%2==1&&(this.boards[by][bx].Fenchant+this.boards[by][bx].Eenchant+this.boards[by][bx].Ffield+this.boards[by][bx].Efield)==0){
										this.putaMagicAt(bx,by);
									}
									this.gameMove.currentSkill="Summon";
								}
							}
						}
					}

			break;

		}

	}

	//当棋子被点击时，判断状态，并展示可移动位置
	public showMoves(piece:Piece):void{
		
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
						if(this.boards[tpy][tpx].Piece!=""){   //如果目标格有棋子
							if((this.getPieceInXY(tpx,tpy).belong-piece.belong+4)%2==0){ //是友方棋子
								reach=true; //（不可移动至此）已到尽头
							}else{ //不是友方棋子（即敌方棋子）
								this.putaAttackAt(tpx,tpy);//可以移动并攻击(目前与putaDestinationAt一样)
								reach=true;//已到尽头
							}	
						}else{//如果没有棋子
							this.putaDestinationAt(tpx,tpy);//可以移动
						}

					}else if(piece.pieceType=="E"&&piece.Py==5&&piece.Px==5){ //如果移动的棋子是法力之源的元素师
						if(this.boards[tpy][tpx].Piece!=""){   //如果目标格有棋子
							if((this.getPieceInXY(tpx,tpy).belong-piece.belong+4)%2==0){
								if(this.getPieceInXY(tpx,tpy).invisable==true){
									//如果是我方、隐身的（幻术师）
									//（什么也不做，不可以移动到此，但也不是尽头）
								}else{
									//如果是我方、其他棋子
									reach=true;//已到尽头
								}
								
							}else if((this.getPieceInXY(tpx,tpy).belong-piece.belong+4)%2==1){
								if(this.getPieceInXY(tpx,tpy).invisable==true){
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
						}else if(this.boards[tpy][tpx].Piece!=""){ //如果目标格有棋子
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
						}else if(this.boards[tpy][tpx].Piece!=""){ //如果目标格有棋子
							if(this.getPieceInXY(tpx,tpy).invisable==true){
									//隐身的（幻术师）									
									//什么也不做，跳过，但不是尽头
							}else if((this.getPieceInXY(tpx,tpy).belong-piece.belong+4)%2==0){ //是友方棋子
								reach=true;//已到尽头
							}else if((this.getPieceInXY(tpx,tpy).belong-piece.belong+4)%2==1){ //是敌方棋子
								var MonsterAlive=false;
								for(let i=0;i<this.notation.currentPostions.length;i++){
									if(this.notation.currentPostions[i].pieceType=="M"&&this.notation.currentPostions[i].belong==piece.belong&&this.notation.currentPostions[i].LDE==0){
										MonsterAlive=true;
									}
								}
								if(piece.pieceType=="I"){ //虚弱的棋子-幻术师
									reach=true;//已到尽头	
								}else if(piece.pieceType=="S"&&MonsterAlive){//虚弱的棋子-有己方召唤兽在场的召唤师
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
			this.currentSelectedPiece.skill.visible=false;
			this.gameMove.currentSkill="";
			for (let i=0;i< this.targets.length;i++){				
				this.BoardLayer.removeChild(this.targets[i]);				
			}
			for (let i=0;i< this.confirmTargets.length;i++){				
				this.BoardLayer.removeChild(this.confirmTargets[i]);				
			}
			
			this.targets=[];
			this.confirmTargets=[];
			this.gameMove.currentPieceName="";
			this.gameMove.currentSkill="";
			this.gameMove.currentTargets=[];
			this.confirmTargetButton.visible=false;
		}
	}

	
	public DestinationTapHandler(t:Target):void{
		//给出位置确认
		//提交socket服务器

		//点击destination后，确认，否则clearMoves()
		//确认时，向服务器提交步法，包括操作人信息、游戏房间信息、步法信息、用时信息（以服务器时间为准）、局面校验
		//等待服务器返回新的notation，并更新。
		if(this.confirmTargets.length>0){
			this.sendMoves();			
		}else{
			for(let i=this.targets.length;i>0;i--){			
			var ta=this.targets.pop();
			this.BoardLayer.removeChild(ta);
			if(ta==t){
				
				var ct={Px:ta.Px,Py:ta.Py};
				this.gameMove.currentPieceName=this.currentSelectedPiece.pieceName;
				if(this.boards[ta.Py][ta.Px].Piece){
					this.gameMove.currentSkill="kill";
					this.gameMove.currentTargets.push({targetPiece:this.boards[ta.Py][ta.Px].Piece});
					this.gameMove.currentTargets.push(ct);
				}else{
					this.gameMove.currentSkill="move";
					this.gameMove.currentTargets.push(ct);
				}

				this.confirmTargets.push(ta);
				this.BoardLayer.addChild(ta);
			}
		}
		this.confirmTargetButton.visible=true;
		}		
				
	}

	public OneMagicTarget(t:Target):void{
		if(this.confirmTargets.length>0){
			this.sendMoves();			
		}else{
			if(this.gameMove.currentSkill=="Restrict"||this.gameMove.currentSkill=="Entanglement"||this.gameMove.currentSkill=="Transposition"){
				this.gameMove.currentTargets.push({targetPiece:this.boards[t.Py][t.Px].Piece});
			}
			if(this.gameMove.currentSkill=="Reincarnation"||this.gameMove.currentSkill=="Resurrection"){
				t.targeting.source="resource/pic/game/"+this.gameMove.currentTargets[0].targetPiece+"rs.png";
				t.targeting.width=t.targeting.height=60;				
			}

			for(let i=this.targets.length;i>0;i--){			
				var ta=this.targets.pop();
				this.BoardLayer.removeChild(ta);
				if(ta==t){
					
					var ct={Px:ta.Px,Py:ta.Py};
					this.gameMove.currentPieceName=this.currentSelectedPiece.pieceName;
					//this.gameMove.currentSkill="move";
					this.gameMove.currentTargets.push(ct);

					var pt={Px:this.currentSelectedPiece.Px,Py:this.currentSelectedPiece.Py};
					this.gameMove.currentTargets.push(pt);

					this.confirmTargets.push(ta);
					this.BoardLayer.addChild(ta);
					}
			}
			
			this.confirmTargetButton.visible=true;
		}			
	}

	public SummonTarget(t):void{
		
		var ct={Px:t.Px,Py:t.Py};
		var temp=[];		
		if(t.hold){
			t.targeting.source="resource/pic/game/skilltarget.png";
			t.targeting.width=t.targeting.height=42;
			t.hold=false;
			for(let i=this.gameMove.currentTargets.length;i>0;i--){
				var ta=this.gameMove.currentTargets.pop();
				if(ta.Px!=ct.Px||ta.Py!=ct.Py){
					temp.push(ta);
				}
			}
			this.gameMove.currentTargets=temp;			
			

		}else if(this.gameMove.currentTargets.length<4){
			t.targeting.source="resource/pic/game/"+this.currentSelectedPiece.pieceName[0]+"Mrs.png";
			t.targeting.width=t.targeting.height=60;			
			t.hold=true;
			this.gameMove.currentTargets.push(ct);
		}
		if(this.gameMove.currentTargets.length>0){
			this.confirmTargetButton.visible=true;
		}else{
			this.confirmTargetButton.visible=false;
		}

		console.log(JSON.stringify(this.gameMove));
		
		
	}

	public MagicTapHandler(t:Target):void{
		//根据当前魔法名字，确认如何操作
		
		if(this.currentSelectedPiece){
			this.gameMove.currentPieceName=this.currentSelectedPiece.pieceName;
		}
		switch (this.gameMove.currentSkill){
			case "Restrict":				
				this.OneMagicTarget(t);
			break;

			case "Resurrection":
				this.OneMagicTarget(t);				
			break;

			case "Reincarnation":
				this.OneMagicTarget(t);				
			break;

			case "Entanglement":
				this.OneMagicTarget(t);
			break;

			case "Transposition":
				this.OneMagicTarget(t);
			break;

			case "Convene":
				this.gameMove.currentPieceName=this.currentSelectedPiece.pieceName;
				this.SummonTarget(t);

			break;

			case "Summon":
				this.gameMove.currentPieceName=this.currentSelectedPiece.pieceName;
				this.SummonTarget(t);

			break;

		}




	}	

	public putaDestinationAt(Px:number,Py:number):void{
		var t=new Target(1,Px,Py);
		t.x=this.Px2xT(Px);
		t.y=this.Px2xT(Py);
		t.addEventListener(egret.TouchEvent.TOUCH_TAP,this.DestinationTapHandler.bind(this,t,false),this);
		this.targets.push(t);
		this.BoardLayer.addChild(t);
	}

	public putaMagicAt(Px:number,Py:number):void{
		var t=new Target(2,Px,Py);
		t.x=this.Px2xT(Px);
		t.y=this.Px2xT(Py);
		t.addEventListener(egret.TouchEvent.TOUCH_TAP,this.MagicTapHandler.bind(this,t,false),this);
		this.targets.push(t);
		this.BoardLayer.addChild(t);
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

	
	// //移除结界指示(可能没用)
	// public clearEnchant(belong:number):void{
	// 	var bl=['x','A','F','W','E'];
	// 	var name=bl[belong]+"Enchant";
	// 	if(this.EFlayer.getChildByName(name)){
	// 		this.EFlayer.removeChild(this.EFlayer.getChildByName(name));			
	// 	}
	// }

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
						if(this.boards[bpy][bpx].Piece==pieceName){
							f=true;
						}
					}					
				}
			}
		return f
	}

	public findSurroundwithNotation(p1name:string,p2name:string,notation:any):boolean{
		var f=false;
		var p1,p2;
		for(let i=0;i<notation.currentPostions.length;i++){
			if(notation.currentPostions[i].pieceName==p1name){
				p1=notation.currentPostions[i];
			}
			if(notation.currentPostions[i].pieceName==p2name){
				p2=notation.currentPostions[i];
			}				
		}
		if(p1.LDE==0&&p2.LDE==0){
			if(Math.abs(p1.Px-p2.Px)<=1&&Math.abs(p1.Py-p2.Py)<=1){
				f=true;
			}
		}
			
		return f
	}

	public setRestrict(pieceName:string):void{
		if(pieceName==""){
			for(let i=0;i<this.notation.currentPostions.length;i++){
				if(this.BoardLayer.getChildByName(this.notation.currentPostions[i].pieceName)){
					var p=<Piece>this.BoardLayer.getChildByName(this.notation.currentPostions[i].pieceName);
					p.setRestrict(false);
				}
			}
			//取消所有棋子的restricted状态。
		
		}else{
			var p=<Piece>this.BoardLayer.getChildByName(pieceName);
			p.setRestrict(true);

		}

	}

	public checkEFIwithNotation(notation:any):void{
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
		var Ds=['AD','FD','WD','ED'];
		var Ps=['AP','FP','WP','EP'];
		var Ws=['AW','FW','WW','EW'];
		var Is=['AI','FI','WI','EI'];
		for(let i=0;i<4;i++){
			for(let j=0;j<notation.currentPostions.length;j++){
				var d;
				if(notation.currentPostions[j].pieceName==Ds[i]){
					d=notation.currentPostions[j];					
				}
			}
			if((notation.currentStats.restrict!=Ds[i])&&(d.LDE==0)){
				for(let y=-1;y<2;y++){
					for(let x=-1;x<2;x++){
						var bpx=d.Px+x;
						var bpy=d.Py+y;
						if((bpx>=0) &&(bpx<=10)&&(bpy>=0)&&(bpy<=10)){
							if(i==0){
								this.boards[bpy][bpx].Aenchant=1;
							}else if(i==1){
								this.boards[bpy][bpx].Fenchant=1;
							}else if(i==2){
								this.boards[bpy][bpx].Wenchant=1;
							}else if(i==3){
								this.boards[bpy][bpx].Eenchant=1;
							}	
						}
					}
				}
			this.putEnchantAt((i+1),d.Px,d.Py);		
			}			
		}

		//分别寻找P的位置：
		for(let i=0;i<4;i++){
			for(let j=0;j<notation.currentPostions.length;j++){
				var p;
				if(notation.currentPostions[j].pieceName==Ps[i]){
					p=notation.currentPostions[j];
					
				}
			}
			//检查是否在法力之源
			if((p.LDE==0&&p.Px==5&&p.Py==5)){
			//若在法力之源，在周围八个位置中，没有敌方E设置F，设置对应F的位置				
				for(let y=-1;y<2;y++){
					for(let x=-1;x<2;x++){
						var bpx=p.Px+x;
						var bpy=p.Py+y;
						if(i%2==0){
							if(this.boards[bpy][bpx].Fenchant+this.boards[bpy][bpx].Eenchant==0){
								if(i==0){
									this.boards[bpy][bpx].Afield=1;
								}else if(i==2){
									this.boards[bpy][bpx].Wfield=1;
								}
								if (x==0 && y==0){
									this.putFieldAt((i+1),bpx,bpy,true);
								}else{
									this.putFieldAt((i+1),bpx,bpy,false);
								}
							}
						}else{
							if(this.boards[bpy][bpx].Aenchant+this.boards[bpy][bpx].Wenchant==0){
								if(i==1){
									this.boards[bpy][bpx].Ffield=1;
								}else if(i==3){
									this.boards[bpy][bpx].Efield=1;
								}
								if (x==0 && y==0){
									this.putFieldAt((i+1),bpx,bpy,true);
								}else{
									this.putFieldAt((i+1),bpx,bpy,false);
								}
							}
						}						
					}
				}		
			}else if((notation.currentStats.restrict!=Ps[i])&&(p.LDE==0)){
				if(this.findSurroundwithNotation(Ps[i],Ws[i],notation)){
					if(i%2==0){
						if(this.boards[p.Py][p.Px].Fenchant+this.boards[p.Py][p.Px].Eenchant==0){
							//主
							if(i==0){
								this.boards[p.Py][p.Px].Afield=1;
							}else if(i==2){
								this.boards[p.Py][p.Px].Wfield=1;
							}								
							this.putFieldAt((i+1),p.Px,p.Py,true);
							//左
							if((p.Px-1)>=0&&(this.boards[p.Py][p.Px-1].Fenchant+this.boards[p.Py][p.Px-1].Eenchant)==0){
								if(i==0){
								this.boards[p.Py][p.Px-1].Afield=1;
								}else if(i==2){
								this.boards[p.Py][p.Px-1].Wfield=1;
								}								
								this.putFieldAt((i+1),p.Px-1,p.Py,false);									
							}
							//右
							if((p.Px+1)<=10&&(this.boards[p.Py][p.Px+1].Fenchant+this.boards[p.Py][p.Px+1].Eenchant)==0){
								if(i==0){
								this.boards[p.Py][p.Px+1].Afield=1;
								}else if(i==2){
								this.boards[p.Py][p.Px+1].Wfield=1;
								}								
								this.putFieldAt((i+1),p.Px+1,p.Py,false);	
							}
						}
					}else{
						if(this.boards[p.Py][p.Px].Aenchant+this.boards[p.Py][p.Px].Wenchant==0){
							//主
							if(i==1){
								this.boards[p.Py][p.Px].Ffield=1;
							}else if(i==3){
								this.boards[p.Py][p.Px].Efield=1;
							}								
							this.putFieldAt((i+1),p.Px,p.Py,true);
							//左
							if((p.Py-1)>=0&&(this.boards[p.Py-1][p.Px].Aenchant+this.boards[p.Py-1][p.Px].Wenchant)==0){
								if(i==1){
								this.boards[p.Py-1][p.Px].Ffield=1;
								}else if(i==3){
								this.boards[p.Py-1][p.Px].Efield=1;
								}								
								this.putFieldAt((i+1),p.Px,p.Py-1,false);									
							}
							//右
							if((p.Py+1)<=10&&(this.boards[p.Py+1][p.Px].Aenchant+this.boards[p.Py+1][p.Px].Wenchant)==0){
								if(i==1){
								this.boards[p.Py+1][p.Px].Ffield=1;
								}else if(i==3){
								this.boards[p.Py+1][p.Px].Efield=1;
								}								
								this.putFieldAt((i+1),p.Px,p.Py+1,false);	
							}
						}
					}
				}
			}	
		}
		//分别寻找I的位置：
		for(let i=0;i<4;i++){
			for(let j=0;j<notation.currentPostions.length;j++){
				var illu;
				if(notation.currentPostions[j].pieceName==Is[i]){
					illu=notation.currentPostions[j];					
				}				
			}
			var ip;
			for (var j=0;j<this.Pieces.length;j++){
				if(this.Pieces[j].pieceName==Is[i]){
					ip=this.Pieces[j];			
				}
			}

			ip.setInvisable(true);
			if(notation.currentStats.restrict==Is[i]){
				ip.setInvisable(false);
			}
			if(i%2==0){
				if((this.boards[illu.Py][illu.Px].Fenchant+this.boards[illu.Py][illu.Px].Eenchant+this.boards[illu.Py][illu.Px].Ffield+this.boards[illu.Py][illu.Px].Efield)>0){
					ip.setInvisable(false);
				}	
			}else{
				if((this.boards[illu.Py][illu.Px].Aenchant+this.boards[illu.Py][illu.Px].Wenchant+this.boards[illu.Py][illu.Px].Afield+this.boards[illu.Py][illu.Px].Wfield)>0){
					ip.setInvisable(false);
				}
			}
		}
	}







	

	public checkEFI():void{
		//已废弃！！
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
		// var T="AD";
		//分别寻找D的位置:
			//检查是否被禁锢
			//若未禁锢，设置当前位置，及周围八个位置的对应E，设置对应E的显示位置		
		var d1=<Piece>this.BoardLayer.getChildByName("AD");
		// var d1={pieceName:"AE",belong:1,pieceType:"E",revive:false,LDE:0,Px:2,Py:0,restricted:false};
		// T="AD";
		// for(let i=0;i<notation.currentPostions.length;i++){
		// 	if(notation.currentPostions[i].pieceName==T){
		// 		d1=notation.currentPostions[i];
		// 		if (notation.currentStats.restrict==T){
		// 			d1.restricted=true;
		// 		}else{
		// 			d1.restricted=false;
		// 		}
		// 	}
		// }
		
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
		var d2=<Piece>this.BoardLayer.getChildByName("FD");
		// var d2={pieceName:"AE",belong:1,pieceType:"E",revive:false,LDE:0,Px:2,Py:0,restricted:false};
		// T="FD";
		// for(let i=0;i<notation.currentPostions.length;i++){
		// 	if(notation.currentPostions[i].pieceName==T){
		// 		d2=notation.currentPostions[i];
		// 		if (notation.currentStats.restrict==T){
		// 			d2.restricted=true;
		// 		}else{
		// 			d2.restricted=false;
		// 		}
		// 	}
		// }
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
		var d3=<Piece>this.BoardLayer.getChildByName("WD");
		// var d3={pieceName:"AE",belong:1,pieceType:"E",revive:false,LDE:0,Px:2,Py:0,restricted:false};
		// T="WD";
		// for(let i=0;i<notation.currentPostions.length;i++){
		// 	if(notation.currentPostions[i].pieceName==T){
		// 		d3=notation.currentPostions[i];
		// 		if (notation.currentStats.restrict==T){
		// 			d3.restricted=true;
		// 		}else{
		// 			d3.restricted=false;
		// 		}
		// 	}
		// }
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
		var d4=<Piece>this.BoardLayer.getChildByName("ED");
		// var d4={pieceName:"AE",belong:1,pieceType:"E",revive:false,LDE:0,Px:2,Py:0,restricted:false};
		// T="ED";
		// for(let i=0;i<notation.currentPostions.length;i++){
		// 	if(notation.currentPostions[i].pieceName==T){
		// 		d4=notation.currentPostions[i];
		// 		if (notation.currentStats.restrict==T){
		// 			d4.restricted=true;
		// 		}else{
		// 			d4.restricted=false;
		// 		}
		// 	}
		// }


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
		var p1=<Piece>this.BoardLayer.getChildByName("AP");	
		// var p1={pieceName:"AE",belong:1,pieceType:"E",revive:false,LDE:0,Px:2,Py:0,restricted:false};
		// T="AP";
		// for(let i=0;i<notation.currentPostions.length;i++){
		// 	if(notation.currentPostions[i].pieceName==T){
		// 		p1=notation.currentPostions[i];
		// 		if (notation.currentStats.restrict==T){
		// 			p1.restricted=true;
		// 		}else{
		// 			p1.restricted=false;
		// 		}
		// 	}
		// }	
			//检查是否在法力之源
			if((p1.LDE==0&&p1.Px==5&&p1.Py==5)){
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
			
		var p2=<Piece>this.BoardLayer.getChildByName("FP");		
			//检查是否在法力之源
			if((p2.LDE==0&&p2.Px==5&&p2.Py==5)){
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

		var p3=<Piece>this.BoardLayer.getChildByName("WP");		
			//检查是否在法力之源
			if((p3.LDE==0&&p3.Px==5&&p3.Py==5)){
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

		var p4=<Piece>this.BoardLayer.getChildByName("EP");		
			//检查是否在法力之源
			if((p4.LDE==0&&p4.Px==5&&p4.Py==5)){
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
		var i1=<Piece>this.BoardLayer.getChildByName("AI");
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

		var i2=<Piece>this.BoardLayer.getChildByName("FI");
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

		var i3=<Piece>this.BoardLayer.getChildByName("WI");
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

		var i4=<Piece>this.BoardLayer.getChildByName("EI");
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

	

	//发送消息
	public sendMoves():void{
	

		var data={
			username:username,
			token:token,
			roomID:this.gameInfo.roomID,
			gameID:this.gameInfo.gameID,
			notation:this.notation,
			gameMove:this.gameMove
			};

		// 	var msg=JSON.stringify(data);
		// console.log(msg);

		// //test
		
		// if(this.notation.currentPlayer<4){
		// 	this.notation.currentPlayer++;
		// }else{
		// 	this.notation.currentPlayer=1;
		// }
		// this.setBoardColor(this.notation.currentPlayer);
		
		// //test.		
		socket.emit("GameMove",data);
		this.clearMoves();
	}


	public board:eui.Image;	
	public EFlayer:eui.Group;

	public BoardLayer:eui.Group;
	public boardcancel:eui.Rect;
	public confirmTargetButton:eui.Button;

	public gameInfo:any={};

	public Pieces:Piece[]=[]





	//死灵复活用
	public reviveZone:eui.Group;
	public reviveCancel:eui.Rect;
	public confirm:eui.Button;
	public bordies:eui.Group;
	public cantReviveTip:eui.Label;


	//已死棋子（不包括权杖和召唤师）
	public showdead:eui.Button;
	public graveyard:eui.Group;
	public graveA:eui.Group;
	public graveW:eui.Group;
	public graveF:eui.Group;
	public graveE:eui.Group;
	public graveyardClose:eui.Rect;


	public bwidth:number=700;
	public bmargin:number=5;
	public pwidth:number=60;
	public ewidth:number=172;
	public fwidth:number=62;
	public twidth:number=50;

	public gameMove:any={currentPieceName:"",currentSkill:"",currentTargets:[]};

	public currentSelectedPiece:Piece;	
	public targets:Target[]=[];
	public confirmTargets:Target[]=[];

	public notation:Notation;
	public boards:BoardPostion[][]=[];
	private Pnamelist:Array<string>=["A","B","C","D","E","F","G","H","I","J","K"];
	


	
}