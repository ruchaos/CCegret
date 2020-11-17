class Toast extends eui.Component implements  eui.UIComponent {
	public constructor( msg:string, w:number, h:number ) {
		super();
		this.skinName="resource/custom_skins/ToastUI.exml"
		this.toastMsg.text=msg;
		this.anchorOffsetX=this.width/2;
		this.anchorOffsetY=this.height/2;
		this.x=w/2;
		this.y=h*1/3;
		this.alpha=0;

		egret.Tween.get( this )
            .to( { alpha: 1 }, 600, egret.Ease.quintOut )
            //.to( { scaleX: 1.2, scaleY: 1.2 }, 100, egret.Ease.quintOut )
            //.call( ()=>{ console.log( "tween tween tween" ); } ) 
            //.to( { scaleX: 1.0, scaleY: 1.0 }, 300, egret.Ease.quintIn )
            .wait( 1200 )
            .to( { alpha: 0 }, 1200, egret.Ease.quintIn  ).call( ()=>{      /*  y: this.y - 50, */
            if( this.parent ){
                this.parent.removeChild( this );
            }
        } );
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}

	public static init( cont:egret.DisplayObjectContainer):void{
        this._cont = cont;        
    }
	private static _cont:egret.DisplayObjectContainer;

	
    public static launch( msg:string ):void{
        if( this._cont ){
            var toast:Toast = new Toast( msg, this._cont.stage.stageWidth, this._cont.stage.stageHeight );
            this._cont.addChild( toast );
			this._cont.setChildIndex(toast,-1);
        }
    }

	public toastMsg:eui.Label;

	
}