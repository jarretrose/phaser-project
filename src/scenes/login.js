import Phaser, { Scene } from 'phaser'

export class Login extends Scene {
  constructor() {
    super({ key: 'login' })
  }

  create() {
    // this.music = this.sound.add('logintheme')
    // this.music.loop = true
    // this.music.play()

    this.mountain = this.add.image(400, 300, 'mountain')
    this.title = this.add.image(400, 300, 'title')
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursors.space.isDown) {
      this.scene.start('game')
    }
  }
}