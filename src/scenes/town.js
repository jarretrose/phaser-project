import Phaser, { Scene } from 'phaser'

export class Town extends Scene {
  constructor() {
    super({ key: 'town' })
    this.thanksText = null
    this.againText = null
    this.cursors = null
    this.cameras = null
  }

  create() {
    this.cameras.main.setBounds(0, 0, 800, 600);
    this.cameras.main.fadeIn(2000)

    this.blurrymountain = this.add.image(400, 300, 'blurrymountain')
    this.thanksText = this.add.text(16, 16, 'Thanks For Playing!', { fontSize: '32px', fill: '#000' });
    this.againText = this.add.text(16, 48, 'Refresh the Page to Play Again!', { fontSize: '32px', fill: '#000' });
  }
}