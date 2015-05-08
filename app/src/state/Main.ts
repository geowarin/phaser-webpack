export class Main extends Phaser.State {
  text: Phaser.Text;

  create() {
    var thing: String = 'code !';
    this.text = this.add.text(10, 10, `Let's ${thing}`, {font: '65px Arial'});
  }

  update() {
    this.text.position.x += 1;
    if (this.text.position.x > this.scale.bounds.width) {
      this.text.position.x = 10;
    }
  }
}
