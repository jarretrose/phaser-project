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
    this.music = null
    this.scroll = null
    this.smallscroll = null
    this.guard = null

    this.guardSaidNo = false
  }

  create() {

    this.music = this.sound.add('theme')
    this.music.loop = true
    this.music.play()

    this.physics.world.bounds.width = 2400;
    this.physics.world.bounds.height = 600;

    this.buffers = this.physics.add.staticGroup();
    this.buffers.create(1200, 600, 'buffer');
    this.buffers.create(1600, 440, 'buffer2')

    this.mountains = this.add.image(1200, 300, 'mountains')
    this.treehouse = this.add.image(800, 350, 'treehouse')

    this.crates = this.physics.add.group()
    this.crates.create(600, 545, 'crate').setDrag(10000, 0).setCollideWorldBounds(true)

    this.smallscroll = this.physics.add.image(1550, 300, 'smallscroll')

    this.guard = this.physics.add.sprite(2400, 410, 'guard').setDrag(10000, 0).setCollideWorldBounds(true)

    this.player = this.physics.add.sprite(50, 560, 'player').setCollideWorldBounds(true)

    this.cursors = this.input.keyboard.createCursorKeys();

    this.physics.add.collider(this.player, this.buffers)
    this.physics.add.collider(this.player, this.crates)
    this.physics.add.collider(this.crates, this.buffers)
    this.physics.add.collider(this.smallscroll, this.buffers)
    this.physics.add.collider(this.guard, this.buffers)
    this.physics.add.collider(this.player, this.guard, this.guardNo, null, this)

    this.physics.add.overlap(this.player, this.smallscroll, this.kindfist, null, this)

    this.cameras.main.setBounds(0, 0, 2400, 600);
    this.cameras.main.fadeIn(2000)
    this.cameras.main.startFollow(this.player)

  }

  guardNo(player, guard) {
    if (!this.guardSaidNo) {
      console.log('Sorry, you cannot pass.')
      this.guardSaidNo = true;
    }
  }

  kindfist(player, smallscroll) {
    smallscroll.destroy()
    this.scene.start('kindfist')
  }

  update() {
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

