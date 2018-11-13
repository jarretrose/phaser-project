import Phaser, { Scene } from 'phaser'

export class KindFist extends Scene {
  constructor() {
    super({
      key: 'kindfist'
    })
  }

  create() {
    this.mountains = this.add.image(400, 300, 'blurrymountain')
    this.scroll = this.add.image(400, 300, 'scroll')

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursors.space.isDown) {
      this.scene.start('totown')
    }
  }

}