export default class Main extends Phaser.State {

  create() {
    var thing:String = 'be happy !';
    this.add.text(10, 10, `Let's ${thing}`, {font: '65px Arial'});
  }
}
