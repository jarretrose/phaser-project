import { Scene } from 'phaser'

export class Game extends Scene {
  constructor() {
    super({
      key: 'game',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 500 },
          debug: false
        }
      }
    })
    this.buffers = null
    this.mountains = null
    this.player = null
    this.cursors = null
  }

  create() {
    this.physics.world.bounds.width = 2400;
    this.physics.world.bounds.height = 600;

    this.buffers = this.physics.add.staticGroup();
    this.buffers.create(1200, 600, 'buffer');
    this.buffers.create(1600, 440, 'buffer2')

    this.mountains = this.add.image(1200, 300, 'mountains')
    this.treehouse = this.add.image(800, 350, 'treehouse')

    this.player = this.physics.add.sprite(50, 560, 'player');
    this.player.setCollideWorldBounds(true)
    this.cursors = this.input.keyboard.createCursorKeys();

    this.physics.world.enable(this.player)
    this.physics.add.collider(this.player, this.buffers)

    this.cameras.main.setBounds(0, 0, 2400, 600);
    this.cameras.main.startFollow(this.player)

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

  }

  update() {


    if (this.cursors.left.isDown) 
    {
      this.player.setVelocityX(-300);
      this.player.anims.play('left', true);
    }

    else if (this.cursors.right.isDown) 
    {
      this.player.setVelocityX(300);
      this.player.anims.play('right', true);
    }

    else 
    {
      this.player.setVelocityX(0);
      this.player.anims.play('turn');
    }

    if (this.cursors.space.isDown && this.player.body.touching.down) 
    {
      this.player.setVelocityY(-400);
    }
  }
}

