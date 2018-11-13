import Phaser, { Scene } from 'phaser'

export class Login extends Scene {
  constructor() {
    super({ key: 'login' })
    this.cameras = null
  }

  create() {
    this.music = this.sound.add('logintheme')
    this.music.loop = true
    this.music.play()

    this.mountain = this.add.image(400, 300, 'mountain')
    this.cursors = this.input.keyboard.createCursorKeys(); 

    this.thanksText = this.add.text(16, 16, 'Welcome to Kid Quest!', { fontSize: '32px', fill: '#000' });
    this.moveText = this.add.text(16, 48, 'Use Left and Right Arrow Keys to Move.', { fontSize: '32px', fill: '#000' });
    this.jumpText = this.add.text(16, 80, 'Use Up Arrow to Jump.', { fontSize: '32px', fill: '#000' });

    this.startText = this.add.text(16, 160, 'Press Space to Start!', { fontSize: '32px', fill: '#000' });


    this.cameras.main.setBounds(0, 0, 800, 600);
    this.cameras.main.fadeIn(2000)
  }

  update() {
    if (this.cursors.space.isDown) {
      this.sound.stopAll()
      this.scene.start('game')
    }
  }
}