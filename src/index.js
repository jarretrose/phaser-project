import Phaser from 'phaser'
import { Preloader } from './scenes/preloader'
import { Game } from './scenes/game'

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'content',
  scene: [Preloader, Game]
};

const game = new Phaser.Game(config);

// **********
  // physics: {
  //   default: 'arcade',
  //   arcade: {
  //     gravity: { y: 600 },
  //     debug: false
  //   }
  // },

    // scene: {
  //   key: 'main',
  //   preload: preload,
  //   create: create,
  //   update: update
  // }

  // **********


// function preload() {
//   this.load.image('buffer', 'assets/buffer.png')
//   this.load.image('mountains', 'assets/mountains.png')
//   this.load.spritesheet('player', 'assets/player.png', { frameWidth: 32, frameHeight: 48 });
// }

// function create() {
//   this.physics.world.bounds.width = 2400;
//   this.physics.world.bounds.height = 600;

//   buffer = this.physics.add.staticGroup();
//   buffer.create(1200, 600, 'buffer');

//   this.add.image(1200, 300, 'mountains')

//   player = this.physics.add.sprite(100, 450, 'player');
//   player.setBounce(0.2);
//   player.setCollideWorldBounds(true);

//   this.anims.create({
//     key: 'left',
//     frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
//     frameRate: 10,
//     repeat: -1
//   });

//   this.anims.create({
//     key: 'turn',
//     frames: [{ key: 'player', frame: 4 }],
//     frameRate: 20
//   });

//   this.anims.create({
//     key: 'right',
//     frames: this.anims.generateFrameNumbers('player', { start: 5, end: 8 }),
//     frameRate: 10,
//     repeat: -1
//   });

//   cursors = this.input.keyboard.createCursorKeys();

//   this.cameras.main.setBounds(0, 0, 2400, 600);
//   this.cameras.main.startFollow(player);

//   this.physics.add.collider(buffer, player);
// }

// function update() {

//   if (cursors.left.isDown) {
//     player.setVelocityX(-160);
//     player.anims.play('left', true);
//   }

//   else if (cursors.right.isDown) {
//     player.setVelocityX(160);
//     player.anims.play('right', true);
//   }

//   else {
//     player.setVelocityX(0);
//     player.anims.play('turn');
//   }

//   if (cursors.space.isDown && player.body.touching.down) {
//     player.setVelocityY(-330);
//   }
// }