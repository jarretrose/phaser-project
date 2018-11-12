import Phaser from 'phaser'
import { Preloader } from './scenes/preloader'
import { Login } from './scenes/login'
import { Game } from './scenes/game'

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'content',
  scene: [Preloader, Login, Game]
};

const game = new Phaser.Game(config);