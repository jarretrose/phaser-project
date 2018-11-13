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

    this.thanksText = this.add.text(20, 16, 'Welcome to Kid Quest!', { fontSize: '32px', fontFamily: 'Arial', color: 'yellow'});
    this.moveText = this.add.text(20, 58, 'Use Left and Right Arrow Keys to Move.', { fontSize: '32px', fontFamily: 'Arial', color: 'yellow', align: 'center' });
    this.jumpText = this.add.text(20, 100, 'Use Up Arrow to Jump.', { fontSize: '32px', fontFamily: 'Arial', color: 'yellow', align: 'center' });

    this.startText = this.add.text(20, 500, 'Press Space to Start!', { fontSize: '32px', fontFamily: 'Arial', color: 'yellow'});

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