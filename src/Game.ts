/// <reference path="./defs/definitions.d.ts"/>

import {default as Boot} from './state/Boot';
import {default as Preload} from './state/Preload';
import {default as Main} from './state/Main';

class Game extends Phaser.Game {
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

window.onload = function() {
  new Game();
};

var arr = [1, 2, 3];
for (var prop of arr) {
  console.log(prop)
}
