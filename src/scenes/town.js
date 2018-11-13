import Phaser, { Scene } from 'phaser'

export class Town extends Scene {
  constructor() {
    super({ key: 'town' })
    this.thanksText = null
  }

  create() {
    this.blurrymountain = this.add.image(400, 300, 'blurrymountain')
    this.thanksText = this.add.text(16, 16, 'Thanks For Playing!', { fontSize: '32px', fill: '#000' });
  }

  update() {
    if (this.cursors.space.isDown) {
      this.scene.start('login')
    }
  }
}