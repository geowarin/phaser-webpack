/// <reference path="../node_modules/phaser/typescript/phaser.comments.d.ts"/>

import boot = require('./state/Boot');
import preload = require('./state/Preload');
import main = require('./state/Main');

//module Wormsjs {
  export class Game extends Phaser.Game {
    constructor() {
      super({
        width: 800,
        height: 600,
        transparent: false,
        enableDebug: true
      });

      this.state.add('boot', boot.Boot);
      this.state.add('preload', preload.Preload);
      this.state.add('main', main.Main);

      this.state.start('boot');
    }
  }
//}

window.onload = function() {
  new Game();
};
