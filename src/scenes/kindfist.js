import Phaser, { Scene } from 'phaser'

export class KindFist extends Scene {
  constructor() {
    super({
      key: 'kindfist'
    })
    this.cameras = null
  }

  create() {
    this.mountains = this.add.image(400, 300, 'blurrymountain')
    this.scroll = this.add.image(400, 300, 'scroll')
    this.cursors = this.input.keyboard.createCursorKeys();

    this.cameras.main.setBounds(0, 0, 800, 600);
    this.cameras.main.fadeIn(2000)
  }

  update() {
    if (this.cursors.space.isDown) {
      this.scene.start('totown')
    }
  }

}