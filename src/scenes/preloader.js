import Phaser from 'phaser'

export class Preloader extends Phaser.Scene {
  constructor() {
    super({ key: 'preloader' })
  }
  preload() {
    this.load.image('buffer', 'assets/buffer.png')
    this.load.image('mountains', 'assets/mountains.png')
    this.load.spritesheet('player', 'assets/player.png', { frameWidth: 32, frameHeight: 48 });
  }

  create() {
    this.scene.start('game')
  }

}