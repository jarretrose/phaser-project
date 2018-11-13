import Phaser, { Scene } from 'phaser'

export class Login extends Scene {
  constructor() {
    super({ key: 'login' })
    this.cameras = null
  }

  create() {
    // this.music = this.sound.add('logintheme')
    // this.music.loop = true
    // this.music.play()

    this.mountain = this.add.image(400, 300, 'mountain')
    this.title = this.add.image(400, 300, 'title')
    this.cursors = this.input.keyboard.createCursorKeys();

    this.cameras.main.setBounds(0, 0, 800, 600);
    this.cameras.main.fadeIn(2000)
  }

  update() {
    if (this.cursors.space.isDown) {
      this.scene.start('game')
    }
  }
}