class Target extends eui.Component implements  eui.UIComponent {
    public constructor(type:number,Px:number,Py:number){
		super();
		this.skinName="resource/custom_skins/Target.exml";
        var typeimg="";
        if (type==1){
            typeimg="destination";
        }else{
            typeimg="skilltarget";
        }
		this.targeting.source="resource/pic/game/"+typeimg+".png";
		this.Px=Px;
		this.Py=Py;
		this.hold=false;
    }

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}

	public targeting:eui.Image;
	public hold:boolean;
	public Px:number;
	public Py:number;
	
}