import { Scene } from 'phaser'

export class Game extends Scene {
  constructor() {
    super({
      key: 'game',
      physics: {
        default: 'arcade',
        arcade: {
          debug: false
        }
      }
    })
    this.buffer = null
    this.mountains = null
    this.player = null
  }

  create() {
    this.physics.world.bounds.width = 2400;
    this.physics.world.bounds.height = 600;

    this.add.sprite(1200, 600, 'buffer');

    this.mountains = this.add.image(1200, 300, 'mountains')

    this.player = this.add.sprite(100, 450, 'player');

    this.physics.world.enable(this.player)
    this.physics.add.collider(this.player, this.buffer)

    this.cameras.main.setBounds(0, 0, 2400, 600);
  }

  update() {

  }
}

