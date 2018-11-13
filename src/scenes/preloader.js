import Phaser, { Scene } from 'phaser'

export class Preloader extends Scene {
  constructor() {
    super({ key: 'preloader' })
    this.progressBar = null;
    this.progressRect = null;
    this.progressCompleteRect = null;
  }
  preload() {

    // ********** Progress Bar
    this.load.on('progress', this.onLoadProgress, this)
    this.load.on('complete', this.onLoadComplete, this)
    this.createProgressBar();

    // ********** Preload Images
    this.load.image('buffer', 'assets/images/buffer.png')
    this.load.image('buffer2', 'assets/images/buffer2.png')
    this.load.image('buffer3', 'assets/images/buffer3.png')
    this.load.image('mountains', 'assets/images/mountains.png')
    this.load.image('mountain', 'assets/images/mountain.png')
    this.load.image('blurrymountain', 'assets/images/blurrymountain.png')
    this.load.image('treehouse', 'assets/images/treehouse.png')
    this.load.image('crate', 'assets/images/crate.png')
    this.load.image('smallscroll', 'assets/images/smallscroll.png')
    this.load.image('scroll', 'assets/images/scroll.png')
    this.load.image('guard', 'assets/images/guard1small.png')
    this.load.spritesheet('player', 'assets/images/player.png', { frameWidth: 32, frameHeight: 48 });

    // ********** Preload Audio
    this.load.audio('logintheme', ['assets/audio/emotional_piano.wav'])
    this.load.audio('theme', ['assets/audio/voyager.wav'])

  }

  create() {
    // ********** Starts Login Scene
    this.scene.start('login')

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });
  
    this.anims.create({
      key: 'turn',
      frames: [{ key: 'player', frame: 4 }],
      frameRate: 20
    });
  
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('player', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'faceright',
      frames: [{ key: 'player', frame: 5 }],
      frameRate: 20
    });

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