import Phaser, { Scene } from 'phaser'

export class Preloader extends Scene {
  constructor() {
    super({ key: 'preloader' })
  }
  preload() {
    this.load.image('buffer', 'assets/buffer.png')
    this.load.image('buffer2', 'assets/buffer2.png')
    this.load.image('mountains', 'assets/mountains.png')
    this.load.image('title', 'assets/title.png')
    this.load.image('treehouse', 'assets/treehouse.png')
    this.load.image('crate', 'assets/crate.png')
    this.load.image('smallscroll', 'assets/smallscroll.png')
    this.load.image('scroll', 'assets/scroll.png')
    this.load.spritesheet('player', 'assets/player.png', { frameWidth: 32, frameHeight: 48 });
    this.load.audio('theme', ['assets/voyager.wav'])
  }

  create() {
    // this.scene.start('game')
    this.scene.start('login')
  }

}