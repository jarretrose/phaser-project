import Phaser from 'phaser'
import { Preloader } from './scenes/preloader'
import { Login } from './scenes/login'
import { Game } from './scenes/game'
import { KindFist } from './scenes/kindfist'
import { ToTown } from './scenes/totown'
import { Town } from './scenes/town'

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'content',
  scene: [Preloader, Login, Game, KindFist, ToTown, Town]
};

const game = new Phaser.Game(config);