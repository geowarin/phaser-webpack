webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="./defs/definitions.d.ts"/>
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var States_1 = __webpack_require__(5);
	var Game = (function (_super) {
	    __extends(Game, _super);
	    function Game() {
	        _super.call(this, {
	            width: 800,
	            height: 600,
	            transparent: false,
	            enableDebug: true
	        });
	        this.state.add('boot', States_1.Boot);
	        this.state.add('preload', States_1.Preload);
	        this.state.add('main', States_1.Main);
	        this.state.start('boot');
	    }
	    return Game;
	})(Phaser.Game);
	window.onload = function () {
	    new Game();
	};
	//# sourceMappingURL=Game.js.map

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var Main_1 = __webpack_require__(6);
	exports.Main = Main_1.Main;
	var Preload_1 = __webpack_require__(7);
	exports.Preload = Preload_1.Preload;
	var Boot_1 = __webpack_require__(8);
	exports.Boot = Boot_1.Boot;
	//# sourceMappingURL=States.js.map

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var Main = (function (_super) {
	    __extends(Main, _super);
	    function Main() {
	        _super.apply(this, arguments);
	    }
	    Main.prototype.create = function () {
	        var thing = 'code !';
	        this.text = this.add.text(10, 10, "Let's " + thing, { font: '65px Arial' });
	    };
	    Main.prototype.update = function () {
	        this.text.position.x += 1;
	        if (this.text.position.x > this.scale.bounds.width) {
	            this.text.position.x = 10;
	        }
	    };
	    return Main;
	})(Phaser.State);
	exports.Main = Main;
	//# sourceMappingURL=Main.js.map

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var Preload = (function (_super) {
	    __extends(Preload, _super);
	    function Preload() {
	        _super.apply(this, arguments);
	    }
	    Preload.prototype.preload = function () {
	        this.preloadBar = this.add.sprite(290, 290, 'preload-bar');
	        this.load.setPreloadSprite(this.preloadBar);
	    };
	    Preload.prototype.create = function () {
	        this.game.state.start('main');
	    };
	    return Preload;
	})(Phaser.State);
	exports.Preload = Preload;
	//# sourceMappingURL=Preload.js.map

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var Boot = (function (_super) {
	    __extends(Boot, _super);
	    function Boot() {
	        _super.apply(this, arguments);
	    }
	    Boot.prototype.preload = function () {
	        this.load.image('preload-bar', 'assets/loading.png');
	    };
	    Boot.prototype.create = function () {
	        this.game.stage.backgroundColor = 0xFFFFFF;
	        this.input.maxPointers = 1;
	        this.stage.disableVisibilityChange = true;
	        this.game.state.start('preload');
	    };
	    return Boot;
	})(Phaser.State);
	exports.Boot = Boot;
	//# sourceMappingURL=Boot.js.map

/***/ }
]);
//# sourceMappingURL=bundle.js.map