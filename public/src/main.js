import Phaser from './lib/phaser.js';
import Game from './scenes/game.js';
import GameOver from './scenes/gameo.js';

/*
 Drawing the game to the window
*/
export default new Phaser.Game({
    type: Phaser.AUTO,
    scale:{
    mode:Phaser.Scale.FIT,
    autoCenter:Phaser.Scale.CENTER_BOTH,
    width:480,
    height: 640
    },
    scene:[ Game, GameOver],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 200
            },
            debug: true
        },

    }
})