import Phaser, { Scene } from 'phaser'

export class KindFist extends Scene {
  constructor() {
    super({
      key: 'kindfist'
    })
  }

  create() {
    this.mountains = this.add.image(400, 300, 'blurrymountain')
    this.scroll = this.add.image(400, 300, 'scroll')
  }

  update() {
  }

}