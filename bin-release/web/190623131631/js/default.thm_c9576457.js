window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","HomeUI":"resource/eui_skins/HomeUI.exml"};generateEUI.paths['resource/custom_skins/ChangePW.exml'] = window.ChangePWSkin = (function (_super) {
	__extends(ChangePWSkin, _super);
	var ChangePWSkin$Skin1 = 	(function (_super) {
		__extends(ChangePWSkin$Skin1, _super);
		function ChangePWSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/dialog/close-click.png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ChangePWSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/dialog/close.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ChangePWSkin$Skin1;
	})(eui.Skin);

	var ChangePWSkin$Skin2 = 	(function (_super) {
		__extends(ChangePWSkin$Skin2, _super);
		function ChangePWSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/dialog/submit-click.png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","resource/pic/dialog/submit-disable.png")
					])
			];
		}
		var _proto = ChangePWSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/dialog/submit.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ChangePWSkin$Skin2;
	})(eui.Skin);

	function ChangePWSkin() {
		_super.call(this);
		this.skinParts = ["curtain","newPW","lhintNP","repeatPW","lhintRP","clueName","lhintCN","title","btnClose","btnSubmit"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.curtain_i(),this._Image1_i(),this._Rect1_i(),this.newPW_i(),this.lhintNP_i(),this._Rect2_i(),this.repeatPW_i(),this.lhintRP_i(),this._Rect3_i(),this.clueName_i(),this.lhintCN_i(),this.title_i(),this.btnClose_i(),this.btnSubmit_i()];
	}
	var _proto = ChangePWSkin.prototype;

	_proto.curtain_i = function () {
		var t = new eui.Rect();
		this.curtain = t;
		t.fillAlpha = 0.75;
		t.height = 1280;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 600;
		t.source = "resource/pic/dialog/dialogback.png";
		t.width = 600;
		t.x = 60;
		t.y = 253.48;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xcccccc;
		t.height = 76.06;
		t.width = 541.21;
		t.x = 89;
		t.y = 362.48;
		return t;
	};
	_proto.newPW_i = function () {
		var t = new eui.TextInput();
		this.newPW = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.prompt = "新密码";
		t.textColor = 0x666666;
		t.width = 541.21;
		t.x = 89.55;
		t.y = 360.94;
		return t;
	};
	_proto.lhintNP_i = function () {
		var t = new eui.Label();
		this.lhintNP = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = true;
		t.backgroundColor = 0xff9900;
		t.fontFamily = "Microsoft YaHei";
		t.height = 34.55;
		t.size = 20;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 203.54;
		t.x = 420.79;
		t.y = 420.97;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xCCCCCC;
		t.height = 76.06;
		t.width = 541.21;
		t.x = 88.45;
		t.y = 471.98;
		return t;
	};
	_proto.repeatPW_i = function () {
		var t = new eui.TextInput();
		this.repeatPW = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.prompt = "重复密码";
		t.textColor = 0x666666;
		t.width = 541.21;
		t.x = 89;
		t.y = 470.44;
		return t;
	};
	_proto.lhintRP_i = function () {
		var t = new eui.Label();
		this.lhintRP = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = true;
		t.backgroundColor = 0xff9900;
		t.fontFamily = "Microsoft YaHei";
		t.height = 34.55;
		t.size = 20;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 203.54;
		t.x = 418.52;
		t.y = 531.06;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xCCCCCC;
		t.height = 76.06;
		t.width = 541.21;
		t.x = 89;
		t.y = 581.98;
		return t;
	};
	_proto.clueName_i = function () {
		var t = new eui.TextInput();
		this.clueName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.prompt = "注册时填写的喜欢角色";
		t.textColor = 0x666666;
		t.width = 541.21;
		t.x = 89.55;
		t.y = 580.44;
		return t;
	};
	_proto.lhintCN_i = function () {
		var t = new eui.Label();
		this.lhintCN = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = true;
		t.backgroundColor = 0xff9900;
		t.fontFamily = "Microsoft YaHei";
		t.height = 34.55;
		t.size = 20;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 203.54;
		t.x = 418.52;
		t.y = 642.29;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.horizontalCenter = 0;
		t.italic = true;
		t.size = 36;
		t.text = "修改密码";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 400;
		t.y = 274;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.height = 54;
		t.label = "";
		t.width = 54;
		t.x = 595.06;
		t.y = 268.48;
		t.skinName = ChangePWSkin$Skin1;
		return t;
	};
	_proto.btnSubmit_i = function () {
		var t = new eui.Button();
		this.btnSubmit = t;
		t.height = 70;
		t.horizontalCenter = 0;
		t.label = "";
		t.width = 200;
		t.y = 747;
		t.skinName = ChangePWSkin$Skin2;
		return t;
	};
	return ChangePWSkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/Create.exml'] = window.CreateSkin = (function (_super) {
	__extends(CreateSkin, _super);
	var CreateSkin$Skin3 = 	(function (_super) {
		__extends(CreateSkin$Skin3, _super);
		function CreateSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/dialog/close-click.png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/dialog/close.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateSkin$Skin3;
	})(eui.Skin);

	var CreateSkin$Skin4 = 	(function (_super) {
		__extends(CreateSkin$Skin4, _super);
		function CreateSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/dialog/btncreate-click.png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","resource/pic/dialog/btncreate-disable.png")
					])
			];
		}
		var _proto = CreateSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/dialog/btncreate.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateSkin$Skin4;
	})(eui.Skin);

	var CreateSkin$Skin5 = 	(function (_super) {
		__extends(CreateSkin$Skin5, _super);
		function CreateSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/dialog/type11-click.png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/dialog/type11.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateSkin$Skin5;
	})(eui.Skin);

	var CreateSkin$Skin6 = 	(function (_super) {
		__extends(CreateSkin$Skin6, _super);
		function CreateSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/dialog/timefast-click.png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/dialog/timefast.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateSkin$Skin6;
	})(eui.Skin);

	var CreateSkin$Skin7 = 	(function (_super) {
		__extends(CreateSkin$Skin7, _super);
		function CreateSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/dialog/timeslow-click.png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/dialog/timeslow.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateSkin$Skin7;
	})(eui.Skin);

	var CreateSkin$Skin8 = 	(function (_super) {
		__extends(CreateSkin$Skin8, _super);
		function CreateSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/dialog/timeunlimited-click.png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/dialog/timeunlimited.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateSkin$Skin8;
	})(eui.Skin);

	var CreateSkin$Skin9 = 	(function (_super) {
		__extends(CreateSkin$Skin9, _super);
		function CreateSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/dialog/type22-click.png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/dialog/type22.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateSkin$Skin9;
	})(eui.Skin);

	var CreateSkin$Skin10 = 	(function (_super) {
		__extends(CreateSkin$Skin10, _super);
		function CreateSkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/dialog/type22rt-click.png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/dialog/type22rt.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateSkin$Skin10;
	})(eui.Skin);

	function CreateSkin() {
		_super.call(this);
		this.skinParts = ["curtain","title","btnClose","btnSubmit","typehint","timehint","type1","time1","time2","time3","type2","type3"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.curtain_i(),this._Image1_i(),this.title_i(),this.btnClose_i(),this.btnSubmit_i(),this.typehint_i(),this.timehint_i(),this.type1_i(),this.time1_i(),this.time2_i(),this.time3_i(),this.type2_i(),this.type3_i()];
	}
	var _proto = CreateSkin.prototype;

	_proto.curtain_i = function () {
		var t = new eui.Rect();
		this.curtain = t;
		t.fillAlpha = 0.75;
		t.height = 1280;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 600;
		t.source = "resource/pic/dialog/dialogback.png";
		t.width = 600;
		t.x = 60;
		t.y = 253.48;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.horizontalCenter = 0;
		t.italic = true;
		t.size = 36;
		t.text = "username's game";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 400;
		t.y = 274;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.height = 54;
		t.label = "";
		t.width = 54;
		t.x = 595.06;
		t.y = 268.48;
		t.skinName = CreateSkin$Skin3;
		return t;
	};
	_proto.btnSubmit_i = function () {
		var t = new eui.Button();
		this.btnSubmit = t;
		t.height = 70;
		t.horizontalCenter = 0;
		t.label = "";
		t.width = 200;
		t.y = 750;
		t.skinName = CreateSkin$Skin4;
		return t;
	};
	_proto.typehint_i = function () {
		var t = new eui.Label();
		this.typehint = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.horizontalCenter = 0;
		t.italic = true;
		t.lineSpacing = 12;
		t.multiline = true;
		t.size = 24;
		t.text = "每人控制一方，";
		t.textColor = 0xaaaaaa;
		t.width = 520;
		t.y = 454.66;
		return t;
	};
	_proto.timehint_i = function () {
		var t = new eui.Label();
		this.timehint = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.horizontalCenter = 0;
		t.italic = true;
		t.lineSpacing = 12;
		t.multiline = true;
		t.size = 24;
		t.text = "每步1分钟，步超时消耗长考时间，长考时间每人10分钟";
		t.textColor = 0xAAAAAA;
		t.width = 520;
		t.y = 614.66;
		return t;
	};
	_proto.type1_i = function () {
		var t = new eui.ToggleButton();
		this.type1 = t;
		t.height = 59;
		t.label = "";
		t.width = 120;
		t.x = 86;
		t.y = 381;
		t.skinName = CreateSkin$Skin5;
		return t;
	};
	_proto.time1_i = function () {
		var t = new eui.ToggleButton();
		this.time1 = t;
		t.height = 59;
		t.label = "";
		t.width = 120;
		t.x = 86;
		t.y = 544;
		t.skinName = CreateSkin$Skin6;
		return t;
	};
	_proto.time2_i = function () {
		var t = new eui.ToggleButton();
		this.time2 = t;
		t.height = 59;
		t.label = "";
		t.width = 120;
		t.x = 240;
		t.y = 544;
		t.skinName = CreateSkin$Skin7;
		return t;
	};
	_proto.time3_i = function () {
		var t = new eui.ToggleButton();
		this.time3 = t;
		t.height = 59;
		t.label = "";
		t.width = 120;
		t.x = 386;
		t.y = 544;
		t.skinName = CreateSkin$Skin8;
		return t;
	};
	_proto.type2_i = function () {
		var t = new eui.ToggleButton();
		this.type2 = t;
		t.height = 59;
		t.label = "";
		t.width = 120;
		t.x = 236;
		t.y = 381;
		t.skinName = CreateSkin$Skin9;
		return t;
	};
	_proto.type3_i = function () {
		var t = new eui.ToggleButton();
		this.type3 = t;
		t.height = 59;
		t.label = "";
		t.width = 120;
		t.x = 386;
		t.y = 381;
		t.skinName = CreateSkin$Skin10;
		return t;
	};
	return CreateSkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/GameItem.exml'] = window.GameItemSkin = (function (_super) {
	__extends(GameItemSkin, _super);
	var GameItemSkin$Skin11 = 	(function (_super) {
		__extends(GameItemSkin$Skin11, _super);
		function GameItemSkin$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/home/listbg-click.png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameItemSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/home/listbg.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameItemSkin$Skin11;
	})(eui.Skin);

	function GameItemSkin() {
		_super.call(this);
		this.skinParts = ["roomEnter","hostName","gameType","gameTime","gameDate"];
		
		this.height = 132;
		this.width = 671;
		this.elementsContent = [this.roomEnter_i(),this.hostName_i(),this.gameType_i(),this.gameTime_i(),this.gameDate_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.gameType"],[0],this.gameType,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.gameTime"],[0],this.gameTime,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.gameDate"],[0],this.gameDate,"text");
	}
	var _proto = GameItemSkin.prototype;

	_proto.roomEnter_i = function () {
		var t = new eui.Button();
		this.roomEnter = t;
		t.height = 123;
		t.label = "";
		t.width = 671;
		t.x = 0;
		t.y = 0;
		t.skinName = GameItemSkin$Skin11;
		return t;
	};
	_proto.hostName_i = function () {
		var t = new eui.Label();
		this.hostName = t;
		t.size = 36;
		t.text = "";
		t.x = 17;
		t.y = 18;
		return t;
	};
	_proto.gameType_i = function () {
		var t = new eui.Label();
		this.gameType = t;
		t.fontFamily = "Microsoft YaHei";
		t.italic = true;
		t.size = 24;
		t.x = 18;
		t.y = 76;
		return t;
	};
	_proto.gameTime_i = function () {
		var t = new eui.Label();
		this.gameTime = t;
		t.fontFamily = "Microsoft YaHei";
		t.italic = true;
		t.size = 24;
		t.x = 178;
		t.y = 76;
		return t;
	};
	_proto.gameDate_i = function () {
		var t = new eui.Label();
		this.gameDate = t;
		t.fontFamily = "Microsoft YaHei";
		t.italic = true;
		t.size = 24;
		t.x = 338;
		t.y = 76;
		return t;
	};
	return GameItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin2.exml'] = window.skins.TextInputSkin2 = (function (_super) {
	__extends(TextInputSkin2, _super);
	function TextInputSkin2() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin2.prototype;

	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 24;
		t.textColor = 0xcccccc;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 24;
		t.textColor = 0x666666;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin2;
})(eui.Skin);generateEUI.paths['resource/custom_skins/Home.exml'] = window.HomeUISkin = (function (_super) {
	__extends(HomeUISkin, _super);
	var HomeUISkin$Skin12 = 	(function (_super) {
		__extends(HomeUISkin$Skin12, _super);
		function HomeUISkin$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/home/create-click.png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomeUISkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/home/create.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HomeUISkin$Skin12;
	})(eui.Skin);

	var HomeUISkin$Skin13 = 	(function (_super) {
		__extends(HomeUISkin$Skin13, _super);
		function HomeUISkin$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/home/join-click.png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomeUISkin$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/home/join.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HomeUISkin$Skin13;
	})(eui.Skin);

	var HomeUISkin$Skin14 = 	(function (_super) {
		__extends(HomeUISkin$Skin14, _super);
		function HomeUISkin$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/home/observe-click.png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomeUISkin$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/home/observe.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HomeUISkin$Skin14;
	})(eui.Skin);

	var HomeUISkin$Skin15 = 	(function (_super) {
		__extends(HomeUISkin$Skin15, _super);
		function HomeUISkin$Skin15() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/home/history-click.png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomeUISkin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/home/history.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HomeUISkin$Skin15;
	})(eui.Skin);

	var HomeUISkin$Skin16 = 	(function (_super) {
		__extends(HomeUISkin$Skin16, _super);
		function HomeUISkin$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/home/search-click.png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomeUISkin$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/home/search.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HomeUISkin$Skin16;
	})(eui.Skin);

	var HomeUISkin$Skin17 = 	(function (_super) {
		__extends(HomeUISkin$Skin17, _super);
		function HomeUISkin$Skin17() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/home/clear-click.png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomeUISkin$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/home/clear.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HomeUISkin$Skin17;
	})(eui.Skin);

	function HomeUISkin() {
		_super.call(this);
		this.skinParts = ["logo","person","create","join","observe","history","searchCondition","search","clear","rooms"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.logo_i(),this.person_i(),this._Image1_i(),this.create_i(),this.join_i(),this.observe_i(),this.history_i(),this._Image2_i(),this.searchCondition_i(),this.search_i(),this.clear_i(),this._Scroller1_i()];
	}
	var _proto = HomeUISkin.prototype;

	_proto.logo_i = function () {
		var t = new eui.Image();
		this.logo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "resource/pic/home/logo.png";
		t.width = 368;
		t.x = 40;
		t.y = 42;
		return t;
	};
	_proto.person_i = function () {
		var t = new eui.Label();
		this.person = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.text = "请登录";
		t.textAlign = "right";
		t.textColor = 0x6699ff;
		t.width = 169;
		t.x = 537;
		t.y = 60;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 2;
		t.source = "resource/pic/home/line.png";
		t.width = 700;
		t.x = 12;
		t.y = 108;
		return t;
	};
	_proto.create_i = function () {
		var t = new eui.Button();
		this.create = t;
		t.label = "";
		t.x = 582.5;
		t.y = 146;
		t.skinName = HomeUISkin$Skin12;
		return t;
	};
	_proto.join_i = function () {
		var t = new eui.ToggleButton();
		this.join = t;
		t.label = "";
		t.x = 6;
		t.y = 146;
		t.skinName = HomeUISkin$Skin13;
		return t;
	};
	_proto.observe_i = function () {
		var t = new eui.ToggleButton();
		this.observe = t;
		t.label = "";
		t.x = 139;
		t.y = 147;
		t.skinName = HomeUISkin$Skin14;
		return t;
	};
	_proto.history_i = function () {
		var t = new eui.ToggleButton();
		this.history = t;
		t.label = "";
		t.x = 270;
		t.y = 146;
		t.skinName = HomeUISkin$Skin15;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 63;
		t.source = "resource/pic/home/searchinputbox.png";
		t.width = 375;
		t.x = 28;
		t.y = 226;
		return t;
	};
	_proto.searchCondition_i = function () {
		var t = new eui.TextInput();
		this.searchCondition = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.prompt = "输入房主ID...";
		t.skinName = "skins.TextInputSkin2";
		t.textColor = 0xcccccc;
		t.width = 274;
		t.x = 54.5;
		t.y = 237;
		return t;
	};
	_proto.search_i = function () {
		var t = new eui.Button();
		this.search = t;
		t.label = "";
		t.x = 350;
		t.y = 238;
		t.skinName = HomeUISkin$Skin16;
		return t;
	};
	_proto.clear_i = function () {
		var t = new eui.Button();
		this.clear = t;
		t.label = "";
		t.x = 414;
		t.y = 234;
		t.skinName = HomeUISkin$Skin17;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 925;
		t.scrollPolicyH = "off";
		t.width = 667;
		t.x = 30;
		t.y = 306;
		t.viewport = this.rooms_i();
		return t;
	};
	_proto.rooms_i = function () {
		var t = new eui.List();
		this.rooms = t;
		t.anchorOffsetY = 0;
		t.height = 931.06;
		t.itemRendererSkinName = GameItemSkin;
		t.x = 76.5;
		t.y = 2;
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i(),this._Object5_i(),this._Object6_i(),this._Object7_i(),this._Object8_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.gameDate = "20190528";
		t.gameTime = "快棋";
		t.gameType = "1v1";
		t.hostName = "ruchaos ‘s game";
		t.roomState = "1";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.gameDate = "20190528";
		t.gameTime = "长考";
		t.gameType = "2v2";
		t.hostName = "nicle ‘s game";
		t.roomState = "1";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.gameDate = "20190528";
		t.gameTime = "不限";
		t.gameType = "1v1";
		t.hostName = "mir ‘s game";
		t.roomState = "1";
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.gameDate = "20190528";
		t.gameTime = "快棋";
		t.gameType = "1v1";
		t.hostName = "ruchaos ‘s game";
		t.roomState = "1";
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		t.gameDate = "20190528";
		t.gameTime = "快棋";
		t.gameType = "1v1";
		t.hostName = "ruchaos ‘s game";
		t.roomState = "1";
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		t.gameDate = "20190528";
		t.gameTime = "快棋";
		t.gameType = "1v1";
		t.hostName = "ruchaos ‘s game";
		t.roomState = "1";
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		t.gameDate = "20190528";
		t.gameTime = "长考";
		t.gameType = "1v1";
		t.hostName = "ruchaos ‘s game";
		t.roomState = "1";
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		t.gameDate = "20190528";
		t.gameTime = "长考";
		t.gameType = "1v1";
		t.hostName = "ruchaos ‘s game";
		t.roomState = "1";
		return t;
	};
	return HomeUISkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/Login.exml'] = window.LoginSkin = (function (_super) {
	__extends(LoginSkin, _super);
	var LoginSkin$Skin18 = 	(function (_super) {
		__extends(LoginSkin$Skin18, _super);
		function LoginSkin$Skin18() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/dialog/close-click.png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginSkin$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/dialog/close.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginSkin$Skin18;
	})(eui.Skin);

	var LoginSkin$Skin19 = 	(function (_super) {
		__extends(LoginSkin$Skin19, _super);
		function LoginSkin$Skin19() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/dialog/login-click.png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","resource/pic/dialog/login-disable.png")
					])
			];
		}
		var _proto = LoginSkin$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/dialog/login.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginSkin$Skin19;
	})(eui.Skin);

	function LoginSkin() {
		_super.call(this);
		this.skinParts = ["curtain","userName","lhintUN","password","lhintPW","title","btnClose","btnSubmit","toRegister","toChangePW"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.curtain_i(),this._Image1_i(),this._Rect1_i(),this.userName_i(),this.lhintUN_i(),this._Rect2_i(),this.password_i(),this.lhintPW_i(),this.title_i(),this.btnClose_i(),this.btnSubmit_i(),this.toRegister_i(),this.toChangePW_i()];
	}
	var _proto = LoginSkin.prototype;

	_proto.curtain_i = function () {
		var t = new eui.Rect();
		this.curtain = t;
		t.fillAlpha = 0.75;
		t.height = 1280;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 600;
		t.source = "resource/pic/dialog/dialogback.png";
		t.width = 600;
		t.x = 60;
		t.y = 253.48;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xcccccc;
		t.height = 76.06;
		t.width = 541.21;
		t.x = 89;
		t.y = 401.87;
		return t;
	};
	_proto.userName_i = function () {
		var t = new eui.TextInput();
		this.userName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 76;
		t.prompt = "用户名";
		t.textColor = 0x666666;
		t.width = 541.21;
		t.x = 89.55;
		t.y = 401.33;
		return t;
	};
	_proto.lhintUN_i = function () {
		var t = new eui.Label();
		this.lhintUN = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = true;
		t.backgroundColor = 0xff9900;
		t.fontFamily = "Microsoft YaHei";
		t.height = 34.55;
		t.size = 20;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 203.54;
		t.x = 420.79;
		t.y = 460.36;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xCCCCCC;
		t.height = 76.06;
		t.width = 541.21;
		t.x = 89.55;
		t.y = 510.32;
		return t;
	};
	_proto.password_i = function () {
		var t = new eui.TextInput();
		this.password = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 76;
		t.prompt = "密码";
		t.textColor = 0x666666;
		t.width = 541.21;
		t.x = 89.55;
		t.y = 510.92;
		return t;
	};
	_proto.lhintPW_i = function () {
		var t = new eui.Label();
		this.lhintPW = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = true;
		t.backgroundColor = 0xff9900;
		t.fontFamily = "Microsoft YaHei";
		t.height = 34.55;
		t.size = 20;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 203.54;
		t.x = 420.79;
		t.y = 570.95;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.horizontalCenter = 0;
		t.italic = true;
		t.size = 36;
		t.text = "登录";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 400;
		t.y = 274;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.height = 54;
		t.label = "";
		t.width = 54;
		t.x = 595.06;
		t.y = 268.48;
		t.skinName = LoginSkin$Skin18;
		return t;
	};
	_proto.btnSubmit_i = function () {
		var t = new eui.Button();
		this.btnSubmit = t;
		t.height = 70;
		t.horizontalCenter = 0;
		t.label = "";
		t.width = 200;
		t.y = 747;
		t.skinName = LoginSkin$Skin19;
		return t;
	};
	_proto.toRegister_i = function () {
		var t = new eui.Label();
		this.toRegister = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 48.18;
		t.size = 36;
		t.text = "注册账号";
		t.textAlign = "center";
		t.textColor = 0xaaaaaa;
		t.verticalAlign = "middle";
		t.width = 163.39;
		t.x = 98.13;
		t.y = 621.99;
		return t;
	};
	_proto.toChangePW_i = function () {
		var t = new eui.Label();
		this.toChangePW = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 48.18;
		t.size = 36;
		t.text = "忘记密码";
		t.textAlign = "center";
		t.textColor = 0xAAAAAA;
		t.verticalAlign = "middle";
		t.width = 163.39;
		t.x = 460.94;
		t.y = 621.99;
		return t;
	};
	return LoginSkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/Person.exml'] = window.PersonSkin = (function (_super) {
	__extends(PersonSkin, _super);
	var PersonSkin$Skin20 = 	(function (_super) {
		__extends(PersonSkin$Skin20, _super);
		function PersonSkin$Skin20() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/dialog/close-click.png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PersonSkin$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/dialog/close.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PersonSkin$Skin20;
	})(eui.Skin);

	var PersonSkin$Skin21 = 	(function (_super) {
		__extends(PersonSkin$Skin21, _super);
		function PersonSkin$Skin21() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/dialog/logout-click.png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","resource/pic/dialog/logout-disable.png")
					])
			];
		}
		var _proto = PersonSkin$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/dialog/logout.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PersonSkin$Skin21;
	})(eui.Skin);

	function PersonSkin() {
		_super.call(this);
		this.skinParts = ["curtain","title","btnClose","btnSubmit","games","tips","toChangePW"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.curtain_i(),this._Image1_i(),this.title_i(),this.btnClose_i(),this.btnSubmit_i(),this.games_i(),this.tips_i(),this.toChangePW_i()];
	}
	var _proto = PersonSkin.prototype;

	_proto.curtain_i = function () {
		var t = new eui.Rect();
		this.curtain = t;
		t.fillAlpha = 0.75;
		t.height = 1280;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 600;
		t.source = "resource/pic/dialog/dialogback.png";
		t.width = 600;
		t.x = 60;
		t.y = 253.48;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.horizontalCenter = 0;
		t.italic = true;
		t.size = 36;
		t.text = "hi, username";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 400;
		t.y = 274;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.height = 54;
		t.label = "";
		t.width = 54;
		t.x = 595.06;
		t.y = 268.48;
		t.skinName = PersonSkin$Skin20;
		return t;
	};
	_proto.btnSubmit_i = function () {
		var t = new eui.Button();
		this.btnSubmit = t;
		t.height = 70;
		t.horizontalCenter = -164;
		t.label = "";
		t.width = 200;
		t.y = 749.67;
		t.skinName = PersonSkin$Skin21;
		return t;
	};
	_proto.games_i = function () {
		var t = new eui.Label();
		this.games = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 44.67;
		t.italic = true;
		t.size = 40;
		t.text = "您已进行了10场游戏";
		t.textColor = 0xaaaaaa;
		t.width = 504.67;
		t.x = 106.33;
		t.y = 416.98;
		return t;
	};
	_proto.tips_i = function () {
		var t = new eui.Label();
		this.tips = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 94;
		t.italic = true;
		t.size = 40;
		t.text = "在棋谱中所有您的用户名可以查看比赛记录";
		t.textColor = 0xAAAAAA;
		t.width = 502;
		t.x = 106.33;
		t.y = 489.99;
		return t;
	};
	_proto.toChangePW_i = function () {
		var t = new eui.Label();
		this.toChangePW = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.italic = true;
		t.size = 40;
		t.text = "点击这里修改密码";
		t.textColor = 0xcccccc;
		t.width = 502;
		t.x = 106.33;
		t.y = 624.31;
		return t;
	};
	return PersonSkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/Register.exml'] = window.RegisterSkin = (function (_super) {
	__extends(RegisterSkin, _super);
	var RegisterSkin$Skin22 = 	(function (_super) {
		__extends(RegisterSkin$Skin22, _super);
		function RegisterSkin$Skin22() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/dialog/close-click.png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RegisterSkin$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/dialog/close.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RegisterSkin$Skin22;
	})(eui.Skin);

	var RegisterSkin$Skin23 = 	(function (_super) {
		__extends(RegisterSkin$Skin23, _super);
		function RegisterSkin$Skin23() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/dialog/register-click.png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","resource/pic/dialog/register-disable.png")
					])
			];
		}
		var _proto = RegisterSkin$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/dialog/register.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RegisterSkin$Skin23;
	})(eui.Skin);

	function RegisterSkin() {
		_super.call(this);
		this.skinParts = ["curtain","userName","lhintUN","password","lhintPW","repeatPW","lhintRP","clueName","lhintCN","title","btnClose","btnSubmit"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.curtain_i(),this._Image1_i(),this._Rect1_i(),this.userName_i(),this.lhintUN_i(),this._Rect2_i(),this.password_i(),this.lhintPW_i(),this._Rect3_i(),this.repeatPW_i(),this.lhintRP_i(),this._Rect4_i(),this.clueName_i(),this.lhintCN_i(),this.title_i(),this.btnClose_i(),this.btnSubmit_i()];
	}
	var _proto = RegisterSkin.prototype;

	_proto.curtain_i = function () {
		var t = new eui.Rect();
		this.curtain = t;
		t.fillAlpha = 0.75;
		t.height = 1280;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 600;
		t.source = "resource/pic/dialog/dialogback.png";
		t.width = 600;
		t.x = 60;
		t.y = 253.48;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xcccccc;
		t.height = 76.06;
		t.width = 541.21;
		t.x = 89;
		t.y = 362.48;
		return t;
	};
	_proto.userName_i = function () {
		var t = new eui.TextInput();
		this.userName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 76;
		t.prompt = "用户名";
		t.textColor = 0x666666;
		t.width = 541.21;
		t.x = 89.55;
		t.y = 361.94;
		return t;
	};
	_proto.lhintUN_i = function () {
		var t = new eui.Label();
		this.lhintUN = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = true;
		t.backgroundColor = 0xff9900;
		t.fontFamily = "Microsoft YaHei";
		t.height = 34.55;
		t.size = 20;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 203.54;
		t.x = 420.79;
		t.y = 420.97;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xCCCCCC;
		t.height = 76.06;
		t.width = 541.21;
		t.x = 89.55;
		t.y = 455.52;
		return t;
	};
	_proto.password_i = function () {
		var t = new eui.TextInput();
		this.password = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 76;
		t.prompt = "密码";
		t.textColor = 0x666666;
		t.width = 541.21;
		t.x = 89.55;
		t.y = 456.12;
		return t;
	};
	_proto.lhintPW_i = function () {
		var t = new eui.Label();
		this.lhintPW = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = true;
		t.backgroundColor = 0xff9900;
		t.fontFamily = "Microsoft YaHei";
		t.height = 34.55;
		t.size = 20;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 203.54;
		t.x = 420.79;
		t.y = 516.15;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xCCCCCC;
		t.height = 76.06;
		t.width = 541.21;
		t.x = 89.55;
		t.y = 550.7;
		return t;
	};
	_proto.repeatPW_i = function () {
		var t = new eui.TextInput();
		this.repeatPW = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 76;
		t.prompt = "重复密码";
		t.textColor = 0x666666;
		t.width = 541.21;
		t.x = 89.55;
		t.y = 551.3;
		return t;
	};
	_proto.lhintRP_i = function () {
		var t = new eui.Label();
		this.lhintRP = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = true;
		t.backgroundColor = 0xff9900;
		t.fontFamily = "Microsoft YaHei";
		t.height = 34.55;
		t.size = 20;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 203.54;
		t.x = 420.79;
		t.y = 611.33;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xCCCCCC;
		t.height = 76.06;
		t.width = 541.21;
		t.x = 89.55;
		t.y = 645.88;
		return t;
	};
	_proto.clueName_i = function () {
		var t = new eui.TextInput();
		this.clueName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.prompt = "安全问题：喜欢的角色";
		t.textColor = 0x666666;
		t.width = 541.21;
		t.x = 89.55;
		t.y = 646.48;
		return t;
	};
	_proto.lhintCN_i = function () {
		var t = new eui.Label();
		this.lhintCN = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = true;
		t.backgroundColor = 0xff9900;
		t.fontFamily = "Microsoft YaHei";
		t.height = 34.55;
		t.size = 20;
		t.text = "";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 203.54;
		t.x = 420.79;
		t.y = 706.51;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.horizontalCenter = 0;
		t.italic = true;
		t.size = 36;
		t.text = "注册";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 400;
		t.y = 274;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.height = 54;
		t.label = "";
		t.width = 54;
		t.x = 595.06;
		t.y = 268.48;
		t.skinName = RegisterSkin$Skin22;
		return t;
	};
	_proto.btnSubmit_i = function () {
		var t = new eui.Button();
		this.btnSubmit = t;
		t.height = 70;
		t.horizontalCenter = 0;
		t.label = "";
		t.width = 200;
		t.y = 747;
		t.skinName = RegisterSkin$Skin23;
		return t;
	};
	return RegisterSkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/Room.exml'] = window.RoomSkin = (function (_super) {
	__extends(RoomSkin, _super);
	var RoomSkin$Skin24 = 	(function (_super) {
		__extends(RoomSkin$Skin24, _super);
		function RoomSkin$Skin24() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/room/quit-click.png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RoomSkin$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/room/quit.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RoomSkin$Skin24;
	})(eui.Skin);

	var RoomSkin$Skin25 = 	(function (_super) {
		__extends(RoomSkin$Skin25, _super);
		function RoomSkin$Skin25() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/room/dismiss-click.png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RoomSkin$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/room/dismiss.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RoomSkin$Skin25;
	})(eui.Skin);

	var RoomSkin$Skin26 = 	(function (_super) {
		__extends(RoomSkin$Skin26, _super);
		function RoomSkin$Skin26() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/room/surrender-click.png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RoomSkin$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/room/surrender.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RoomSkin$Skin26;
	})(eui.Skin);

	var RoomSkin$Skin27 = 	(function (_super) {
		__extends(RoomSkin$Skin27, _super);
		function RoomSkin$Skin27() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/room/start-click.png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","resource/pic/room/start-disable.png")
					])
			];
		}
		var _proto = RoomSkin$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/room/start.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RoomSkin$Skin27;
	})(eui.Skin);

	var RoomSkin$Skin28 = 	(function (_super) {
		__extends(RoomSkin$Skin28, _super);
		function RoomSkin$Skin28() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/room/switch-click.png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RoomSkin$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/room/switch.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RoomSkin$Skin28;
	})(eui.Skin);

	var RoomSkin$Skin29 = 	(function (_super) {
		__extends(RoomSkin$Skin29, _super);
		function RoomSkin$Skin29() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/room/switch-click.png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RoomSkin$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/room/switch.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RoomSkin$Skin29;
	})(eui.Skin);

	var RoomSkin$Skin30 = 	(function (_super) {
		__extends(RoomSkin$Skin30, _super);
		function RoomSkin$Skin30() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/room/switch-click.png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RoomSkin$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/room/switch.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RoomSkin$Skin30;
	})(eui.Skin);

	var RoomSkin$Skin31 = 	(function (_super) {
		__extends(RoomSkin$Skin31, _super);
		function RoomSkin$Skin31() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/room/kick-click.png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RoomSkin$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/room/kick.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RoomSkin$Skin31;
	})(eui.Skin);

	var RoomSkin$Skin32 = 	(function (_super) {
		__extends(RoomSkin$Skin32, _super);
		function RoomSkin$Skin32() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/room/kick-click.png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RoomSkin$Skin32.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/room/kick.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RoomSkin$Skin32;
	})(eui.Skin);

	var RoomSkin$Skin33 = 	(function (_super) {
		__extends(RoomSkin$Skin33, _super);
		function RoomSkin$Skin33() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/room/kick-click.png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RoomSkin$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/room/kick.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RoomSkin$Skin33;
	})(eui.Skin);

	var RoomSkin$Skin34 = 	(function (_super) {
		__extends(RoomSkin$Skin34, _super);
		function RoomSkin$Skin34() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/room/kick-click.png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RoomSkin$Skin34.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/room/kick.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RoomSkin$Skin34;
	})(eui.Skin);

	var RoomSkin$Skin35 = 	(function (_super) {
		__extends(RoomSkin$Skin35, _super);
		function RoomSkin$Skin35() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/room/beginning-click.png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","resource/pic/room/beginning-disable.png")
					])
			];
		}
		var _proto = RoomSkin$Skin35.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/room/beginning.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RoomSkin$Skin35;
	})(eui.Skin);

	var RoomSkin$Skin36 = 	(function (_super) {
		__extends(RoomSkin$Skin36, _super);
		function RoomSkin$Skin36() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/room/prev-click.png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","resource/pic/room/prev-disable.png")
					])
			];
		}
		var _proto = RoomSkin$Skin36.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/room/prev.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RoomSkin$Skin36;
	})(eui.Skin);

	var RoomSkin$Skin37 = 	(function (_super) {
		__extends(RoomSkin$Skin37, _super);
		function RoomSkin$Skin37() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/pic/room/next-click.png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","resource/pic/room/next-disable.png")
					])
			];
		}
		var _proto = RoomSkin$Skin37.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "resource/pic/room/next.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RoomSkin$Skin37;
	})(eui.Skin);

	function RoomSkin() {
		_super.call(this);
		this.skinParts = ["roomName","gameType","gameTime","gameDate","quit","dismiss","surrender","BOARD","curtain","hint","start","player1","player2","player3","player4","switch12","switch23","switch34","kick2","kick3","kick4","kick1","timerA1","timerB1","timerA2","timerB2","timerA3","timerB3","timerA4","timerB4","stepNum","winer","beginning","prev","next"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.roomName_i(),this.gameType_i(),this.gameTime_i(),this.gameDate_i(),this.quit_i(),this.dismiss_i(),this.surrender_i(),this.BOARD_i(),this._Image1_i(),this.curtain_i(),this.hint_i(),this.start_i(),this.player1_i(),this.player2_i(),this.player3_i(),this.player4_i(),this._ViewStack1_i()];
	}
	var _proto = RoomSkin.prototype;

	_proto.roomName_i = function () {
		var t = new eui.Label();
		this.roomName = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.italic = true;
		t.size = 40;
		t.text = "ruchaos's game";
		t.textColor = 0xcccccc;
		t.y = 20;
		return t;
	};
	_proto.gameType_i = function () {
		var t = new eui.Label();
		this.gameType = t;
		t.size = 28;
		t.text = "2v2";
		t.textAlign = "left";
		t.textColor = 0xcccccc;
		t.x = 32;
		t.y = 95;
		return t;
	};
	_proto.gameTime_i = function () {
		var t = new eui.Label();
		this.gameTime = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 28;
		t.text = "长考";
		t.textAlign = "left";
		t.textColor = 0xcccccc;
		t.x = 230;
		t.y = 95;
		return t;
	};
	_proto.gameDate_i = function () {
		var t = new eui.Label();
		this.gameDate = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 28;
		t.text = "20190210";
		t.textAlign = "left";
		t.textColor = 0xcccccc;
		t.x = 410;
		t.y = 95;
		return t;
	};
	_proto.quit_i = function () {
		var t = new eui.Button();
		this.quit = t;
		t.label = "";
		t.x = 580;
		t.y = 80;
		t.skinName = RoomSkin$Skin24;
		return t;
	};
	_proto.dismiss_i = function () {
		var t = new eui.Button();
		this.dismiss = t;
		t.label = "";
		t.x = 580;
		t.y = 80;
		t.skinName = RoomSkin$Skin25;
		return t;
	};
	_proto.surrender_i = function () {
		var t = new eui.Button();
		this.surrender = t;
		t.label = "";
		t.x = 580;
		t.y = 80;
		t.skinName = RoomSkin$Skin26;
		return t;
	};
	_proto.BOARD_i = function () {
		var t = new eui.Rect();
		this.BOARD = t;
		t.fillAlpha = 0;
		t.fillColor = 0x000000;
		t.height = 710;
		t.strokeColor = 0x444444;
		t.strokeWeight = 1;
		t.width = 710;
		t.x = 5;
		t.y = 130;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 700;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "resource/pic/room/game.png";
		t.width = 700;
		t.x = 10;
		t.y = 135;
		return t;
	};
	_proto.curtain_i = function () {
		var t = new eui.Rect();
		this.curtain = t;
		t.fillAlpha = 0.75;
		t.fillColor = 0x000000;
		t.height = 710;
		t.strokeColor = 0x444444;
		t.strokeWeight = 1;
		t.width = 710;
		t.x = 5;
		t.y = 130;
		return t;
	};
	_proto.hint_i = function () {
		var t = new eui.Label();
		this.hint = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "等待房主开始游戏...";
		t.textColor = 0xcccccc;
		t.y = 462;
		return t;
	};
	_proto.start_i = function () {
		var t = new eui.Button();
		this.start = t;
		t.horizontalCenter = -2;
		t.label = "";
		t.y = 660;
		t.skinName = RoomSkin$Skin27;
		return t;
	};
	_proto.player1_i = function () {
		var t = new eui.Label();
		this.player1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.size = 24;
		t.text = "Label";
		t.textColor = 0x00ff00;
		t.verticalAlign = "middle";
		t.width = 165;
		t.x = 15;
		t.y = 850;
		return t;
	};
	_proto.player2_i = function () {
		var t = new eui.Label();
		this.player2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.size = 24;
		t.text = "Label";
		t.textColor = 0xffcc00;
		t.verticalAlign = "middle";
		t.width = 165;
		t.x = 189.99999999999997;
		t.y = 850;
		return t;
	};
	_proto.player3_i = function () {
		var t = new eui.Label();
		this.player3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.size = 24;
		t.text = "Label";
		t.textColor = 0x00ccff;
		t.verticalAlign = "middle";
		t.width = 165;
		t.x = 364.99999999999994;
		t.y = 850;
		return t;
	};
	_proto.player4_i = function () {
		var t = new eui.Label();
		this.player4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.size = 24;
		t.text = "Label";
		t.textColor = 0xff00ff;
		t.verticalAlign = "middle";
		t.width = 165;
		t.x = 540;
		t.y = 850;
		return t;
	};
	_proto._ViewStack1_i = function () {
		var t = new eui.ViewStack();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 432;
		t.selectedIndex = 1;
		t.width = 716;
		t.x = 0;
		t.y = 843;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 304;
		t.name = "Group";
		t.width = 714;
		t.x = 0;
		t.y = 52;
		t.elementsContent = [this.switch12_i(),this.switch23_i(),this.switch34_i(),this.kick2_i(),this.kick3_i(),this.kick4_i(),this.kick1_i()];
		return t;
	};
	_proto.switch12_i = function () {
		var t = new eui.Button();
		this.switch12 = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 106;
		t.y = 5;
		t.skinName = RoomSkin$Skin28;
		return t;
	};
	_proto.switch23_i = function () {
		var t = new eui.Button();
		this.switch23 = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 284;
		t.y = 5;
		t.skinName = RoomSkin$Skin29;
		return t;
	};
	_proto.switch34_i = function () {
		var t = new eui.Button();
		this.switch34 = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 463;
		t.y = 5;
		t.skinName = RoomSkin$Skin30;
		return t;
	};
	_proto.kick2_i = function () {
		var t = new eui.Button();
		this.kick2 = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 179.5;
		t.y = 76;
		t.skinName = RoomSkin$Skin31;
		return t;
	};
	_proto.kick3_i = function () {
		var t = new eui.Button();
		this.kick3 = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 354.5;
		t.y = 76;
		t.skinName = RoomSkin$Skin32;
		return t;
	};
	_proto.kick4_i = function () {
		var t = new eui.Button();
		this.kick4 = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 529.5;
		t.y = 76;
		t.skinName = RoomSkin$Skin33;
		return t;
	};
	_proto.kick1_i = function () {
		var t = new eui.Button();
		this.kick1 = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 4.5;
		t.y = 76;
		t.skinName = RoomSkin$Skin34;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.name = "视图";
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.timerA1_i(),this.timerB1_i(),this.timerA2_i(),this.timerB2_i(),this.timerA3_i(),this.timerB3_i(),this.timerA4_i(),this.timerB4_i()];
		return t;
	};
	_proto.timerA1_i = function () {
		var t = new eui.Label();
		this.timerA1 = t;
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "00:00";
		t.textColor = 0xCCCCCC;
		t.x = 12;
		t.y = 58;
		return t;
	};
	_proto.timerB1_i = function () {
		var t = new eui.Label();
		this.timerB1 = t;
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "00:00";
		t.textColor = 0xCCCCCC;
		t.x = 12;
		t.y = 88;
		return t;
	};
	_proto.timerA2_i = function () {
		var t = new eui.Label();
		this.timerA2 = t;
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "00:00";
		t.textColor = 0xCCCCCC;
		t.x = 184;
		t.y = 58;
		return t;
	};
	_proto.timerB2_i = function () {
		var t = new eui.Label();
		this.timerB2 = t;
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "00:00";
		t.textColor = 0xCCCCCC;
		t.x = 184;
		t.y = 88;
		return t;
	};
	_proto.timerA3_i = function () {
		var t = new eui.Label();
		this.timerA3 = t;
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "00:00";
		t.textColor = 0xCCCCCC;
		t.x = 360.5;
		t.y = 58;
		return t;
	};
	_proto.timerB3_i = function () {
		var t = new eui.Label();
		this.timerB3 = t;
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "00:00";
		t.textColor = 0xCCCCCC;
		t.x = 360.5;
		t.y = 88;
		return t;
	};
	_proto.timerA4_i = function () {
		var t = new eui.Label();
		this.timerA4 = t;
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "00:00";
		t.textColor = 0xCCCCCC;
		t.x = 537;
		t.y = 58;
		return t;
	};
	_proto.timerB4_i = function () {
		var t = new eui.Label();
		this.timerB4 = t;
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "00:00";
		t.textColor = 0xCCCCCC;
		t.x = 537;
		t.y = 88;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.name = "视图";
		t.percentWidth = 100;
		t.elementsContent = [this.stepNum_i(),this.winer_i(),this.beginning_i(),this.prev_i(),this.next_i()];
		return t;
	};
	_proto.stepNum_i = function () {
		var t = new eui.Label();
		this.stepNum = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "#122";
		t.textColor = 0xcccccc;
		t.x = 19;
		t.y = 165;
		return t;
	};
	_proto.winer_i = function () {
		var t = new eui.Image();
		this.winer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "resource/pic/room/team1win.png";
		t.width = 454;
		t.x = 130;
		t.y = 136;
		return t;
	};
	_proto.beginning_i = function () {
		var t = new eui.Button();
		this.beginning = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 7;
		t.y = 281;
		t.skinName = RoomSkin$Skin35;
		return t;
	};
	_proto.prev_i = function () {
		var t = new eui.Button();
		this.prev = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 282;
		t.y = 281;
		t.skinName = RoomSkin$Skin36;
		return t;
	};
	_proto.next_i = function () {
		var t = new eui.Button();
		this.next = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 507;
		t.y = 281;
		t.skinName = RoomSkin$Skin37;
		return t;
	};
	return RoomSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 40;
		t.left = "10";
		t.right = "10";
		t.size = 36;
		t.textColor = 0x666666;
		t.verticalAlign = "middle";
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 40;
		t.left = 10;
		t.right = 10;
		t.size = 36;
		t.textColor = 0x666666;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);