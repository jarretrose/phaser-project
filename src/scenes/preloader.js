import Phaser, { Scene } from 'phaser'

export class Preloader extends Scene {
  constructor() {
    super({ key: 'preloader' })
    this.progressBar = null;
    this.progressRect = null;
    this.progressCompleteRect = null;
  }
  preload() {

    this.load.on('progress', this.onLoadProgress, this)
    this.load.on('complete', this.onLoadComplete, this)
    this.createProgressBar();

    this.load.image('buffer', 'assets/buffer.png')
    this.load.image('buffer2', 'assets/buffer2.png')
    this.load.image('mountains', 'assets/mountains.png')
    this.load.image('mountain', 'assets/mountain.png')
    this.load.image('blurrymountain', 'assets/blurrymountain.png')
    this.load.image('title', 'assets/title.png')
    this.load.image('treehouse', 'assets/treehouse.png')
    this.load.image('crate', 'assets/crate.png')
    this.load.image('smallscroll', 'assets/smallscroll.png')
    this.load.image('scroll', 'assets/scroll.png')
    this.load.spritesheet('player', 'assets/player.png', { frameWidth: 32, frameHeight: 48 });
    this.load.audio('logintheme', ['assets/emotional_piano.wav'])
    this.load.audio('theme', ['assets/voyager.wav'])
  }

  create() {
    this.scene.start('login')
  }

  createProgressBar() {
    let Rectangle = Phaser.Geom.Rectangle;
    let main = Rectangle.Clone(this.cameras.main);

    this.progressRect = new Rectangle(0, 0, main.width / 2, 50);
    Rectangle.CenterOn(this.progressRect, main.centerX, main.centerY);

    this.progressCompleteRect = Phaser.Geom.Rectangle.Clone(this.progressRect);

    this.progressBar = this.add.graphics();
  }

  onLoadComplete(loader) {
    this.scene.start('login');
    this.scene.shutdown();
  }

  onLoadProgress(progress) {
    let color = (0xFFFF00);

    this.progressRect.width = progress * this.progressCompleteRect.width;
    this.progressBar
      .clear()
      .fillStyle(0x222222)
      .fillRectShape(this.progressCompleteRect)
      .fillStyle(color)
      .fillRectShape(this.progressRect);
  }

}