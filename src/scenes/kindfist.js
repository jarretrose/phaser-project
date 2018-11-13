import Phaser, { Scene } from 'phaser'

export class KindFist extends Scene {
  constructor() {
    super({ key: 'kindfist' })
  }

  create() {
    this.image.add(400, 300, 'scroll')
  }

  update() {
  }

}