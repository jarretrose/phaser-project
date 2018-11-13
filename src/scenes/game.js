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

    this.dontMove = false
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

    this.guard = this.physics.add.sprite(2350, 410, 'guard').setDrag(10000, 0).setCollideWorldBounds(true)

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

    this.haltText = this.add.text(2100, 400, 'HALT! You cannot pass!\n(press space to continue)', { fontSize: '20px', fontFamily: 'Arial', color: 'black', backgroundColor: 'gray', });
    
    this.haltText.visible = false

  }

  guardNo(player, guard) {
    if (!this.guardSaidNo) {
      this.haltText.visible = true
      console.log('Halt!!! You cannot pass.')
      this.guardSaidNo = true;
      this.dontMove = true
    }
  }

  kindfist(player, smallscroll) {
    smallscroll.destroy()
    this.scene.start('kindfist')
  }

  update() {

    if (this.cursors.space.isDown  && this.dontMove) {
      this.haltText.visible = false
      this.dontMove = false
    }

    // if (this.cursors.left.isDown && !this.dontMove) {
    //   this.player.setVelocityX(-160);
    //   this.player.anims.play('left', true);
    // }

    // else if (this.cursors.right.isDown && !this.dontMove) {
    //   this.player.setVelocityX(160);
    //   this.player.anims.play('right', true);
    // }

    // else {
    //   this.player.setVelocityX(0);
    //   this.player.anims.play('turn');
    // }

    // if (this.cursors.up.isDown && this.player.body.touching.down && !this.dontMove) {
    //   this.player.setVelocityY(-300);
    // }

    // ***** DEV SPEED
    if (this.cursors.left.isDown && !this.dontMove) {
      this.player.setVelocityX(-1000);
      this.player.anims.play('left', true);
    }

    else if (this.cursors.right.isDown && !this.dontMove) {
      this.player.setVelocityX(1000);
      this.player.anims.play('right', true);
    }

    else {
      this.player.setVelocityX(0);
      this.player.anims.play('turn');
    }

    if (this.cursors.up.isDown && this.player.body.touching.down && !this.dontMove) {
      this.player.setVelocityY(-600);
    }
  }
}