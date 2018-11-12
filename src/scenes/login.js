import Phaser, { Scene } from 'phaser'

export class Login extends Scene {
  constructor() {
    super({ key: 'login' })
  }

  create() {
    this.mountains = this.add.image(400, 300, 'mountains')
    this.title = this.add.image(400, 300, 'title')
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursors.space.isDown) {
      this.scene.start('game')
    }
  }
}