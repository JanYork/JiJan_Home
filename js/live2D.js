		    // 此处需支持修改定义，不进行压缩混淆
			L2Dwidget.init({
		        "model": {
		　　　　　　　jsonPath: "https://unpkg.com/live2d-widget-model-tororo@1.0.5/assets/tororo.model.json",
		            "scale": 1
		        },
		        "display": {
		            "position": "left", //模型的表现位置
		            "width": 100,  //模型的宽度
		            "height": 250, //模型的高度
		            "hOffset": 60,
		            "vOffset": -130,
		        },
		        "mobile": {
		            "show": true,
		            "scale": 0.5
		        },
		        "react": {
		            "opacityDefault": 0.7,  //模型默认透明度
		            "opacityOnHover": 0.2
		        }
		    });