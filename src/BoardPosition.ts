class BoardPostion {
    public constructor(){

    }

    public  Pname:string;
	public  Px:number;
	public	Py:number;
	public	Piece:string="";

	public connect:number[]=[1,1,1,1,0,0,0,0];
	//up-0,down-1,left-2,right-3,↖leftup-4，↗rightup-5，↙leftdown-6，↘rightdown-7

    public	up:number=1;
	public	down:number=1;
	public	left:number=1;
	public	right:number=1;
	public	leftup:number=0;
	public	rightup:number=0;
	public	leftdown:number=0;
	public	rightdown:number=0;	

	public	Aenchant:number=0;
	public	Fenchant:number=0;
	public	Wenchant:number=0;
	public	Eenchant:number=0;
			
	public	Afield:number=0;
	public	Ffield:number=0;
	public	Wfield:number=0;
	public	Efield:number=0;
}

