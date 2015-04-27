/// <reference path="../node_modules/phaser/typescript/phaser.comments.d.ts"/>

import Boot = require('./state/Boot');
import Preload = require('./state/Preload');
import Main = require('./state/Main');

//module Wormsjs {
  export class Game extends Phaser.Game {
    constructor() {
      super({
        width: 800,
        height: 600,
        transparent: false,
        enableDebug: true
      });

      this.state.add('boot', Boot);
      this.state.add('preload', Preload);
      this.state.add('main', Main);

      this.state.start('boot');
    }
  }
//}

window.onload = function() {
  new Game();
};
