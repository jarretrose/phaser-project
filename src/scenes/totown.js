import Phaser, { Scene } from 'phaser'

export class ToTown extends Scene {
  constructor() {
    super({
      key: 'totown',
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
    this.music = null
    this.scroll = null
    this.guard = null
    this.gate = null
    this.cameras = null

    this.guardSaidNo = false
    this.guardSaidYes = false

  }

  create() {

    this.physics.world.bounds.width = 2400;
    this.physics.world.bounds.height = 600;

    this.buffers = this.physics.add.staticGroup();
    this.buffers.create(1200, 600, 'buffer');
    this.buffers.create(1600, 440, 'buffer2')

    this.gate = this.physics.add.staticGroup();
    this.gate.create(2400, 410, 'buffer3')

    this.mountains = this.add.image(1200, 300, 'mountains') 
    this.treehouse = this.add.image(800, 350, 'treehouse')

    this.guard = this.physics.add.sprite(2400, 410, 'guard').setDrag(10000, 0).setCollideWorldBounds(true)

    this.player = this.physics.add.sprite(1550, 410, 'player').setCollideWorldBounds(true)

    this.cursors = this.input.keyboard.createCursorKeys();

    this.physics.add.collider(this.player, this.buffers)
    this.physics.add.collider(this.guard, this.buffers)
    this.guardCollider = this.physics.add.collider(this.player, this.guard, this.guardPrevent, null, this)

    this.physics.add.overlap(this.player, this.gate, this.throughGate, null, this)

    this.cameras.main.setBounds(0, 0, 2400, 600);
    this.cameras.main.fadeIn(2000)
    this.cameras.main.startFollow(this.player)


  }
 
  guardPrevent(player, guard) {
    if (!this.guardSaidYes && !this.guardSaidNo) {
      console.log('I already told you! You cannot pass!')
      console.log('Press Space to activate KIND FIST BUMP!')
      this.guardSaidNo = true
    }
  }

  throughGate(player, gate) {
    if (this.guardSaidYes) {
      this.scene.start('town')
    }
  }

  update() {

    if (this.cursors.space.isDown && this.guardSaidNo && !this.guardSaidYes) {
      console.log('That was really KIND of you! I guess I can let you in!')
      this.guardSaidYes = true
      this.guardCollider.destroy()
      console.log('You know what, I think I can let someone as nice as you pass. Have a nice day!')
    }

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.anims.play('left', true);
    }

    else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      this.player.anims.play('right', true);
    }

    else {
      this.player.setVelocityX(0);
      this.player.anims.play('turn');
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-300);
    }

    // ***** DEV SPEED
    // if (this.cursors.left.isDown) {
    //   this.player.setVelocityX(-500);
    //   this.player.anims.play('left', true);
    // }

    // else if (this.cursors.right.isDown) {
    //   this.player.setVelocityX(500);
    //   this.player.anims.play('right', true);
    // }

    // else {
    //   this.player.setVelocityX(0);
    //   this.player.anims.play('turn');
    // }

    // if (this.cursors.space.isDown && this.player.body.touching.down) {
    //   this.player.setVelocityY(-600);
    // }
  }
}

