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
    this.player = null
    this.cursors = null
    this.crates = null
  }

  create() {
    this.physics.world.bounds.width = 2400;
    this.physics.world.bounds.height = 600;

    this.buffers = this.physics.add.staticGroup();
    this.buffers.create(1200, 600, 'buffer');
    this.buffers.create(1600, 440, 'buffer2')

    this.mountains = this.add.image(1200, 300, 'mountains')
    this.treehouse = this.add.image(800, 350, 'treehouse')

    this.crates = this.physics.add.group()
    this.crates.create(2200, 545, 'crate').setDrag(10000,0).setCollideWorldBounds(true)

    this.player = this.physics.add.sprite(50, 560, 'player').setCollideWorldBounds(true)

    this.cursors = this.input.keyboard.createCursorKeys();

    this.physics.add.collider(this.player, this.buffers)
    this.physics.add.collider(this.player, this.crates)
    this.physics.add.collider(this.crates, this.buffers)

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

    this.anims.create({
      key: 'faceright',
      frames: [{ key: 'player', frame: 5 }],
      frameRate: 20
    });

  }

  update() {


    if (this.cursors.left.isDown) 
    {
      this.player.setVelocityX(-160);
      this.player.anims.play('left', true);
    }

    else if (this.cursors.right.isDown) 
    {
      this.player.setVelocityX(160);
      this.player.anims.play('right', true);
    }

    else 
    {
      this.player.setVelocityX(0);
      this.player.anims.play('turn');
    }

    if (this.cursors.space.isDown && this.player.body.touching.down) 
    {
      this.player.setVelocityY(-300);
    }
  }
}

