import Phaser from 'phaser'
import { Preloader } from './scenes/preloader'
import { Login } from './scenes/login'
import { Game } from './scenes/game'
import { KindFist } from './scenes/kindfist'

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'content',
  scene: [Preloader, Login, Game, KindFist]
};

const game = new Phaser.Game(config);