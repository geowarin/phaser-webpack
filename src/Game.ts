/// <reference path="./defs/definitions.d.ts"/>

import { Boot, Preload, Main } from './state/States';

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
