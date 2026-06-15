import Phaser from "../lib/phaser.js"

export default class GameOver extends Phaser.Scene {
    constructor(){
        super('game-over')
    }
    init(data){
        this.score = data;
    }
    preload(){
        this.load.image('background', 'assets/PNG/Background/bg_layer1.png')
    }
    create(){
        this.add.image( 240, 300,'background').setScrollFactor(1,0)
        const width = this.scale.width
        const height = this.scale.height

        this.add.text(width*0.5,height*0.5,'Game Over',{color:'#000',fontSize: 48})
        .setOrigin(0.5)
        
        this.add.text(width*0.5, height*0.6, `Score: ${this.score}`, {color:'#000',fontSize:30})
        .setOrigin(0.5)

        this.add.text(width*0.5, height*0.7, 'Press SPACE  or TAP SCREEN to try again', {color:'#000',fontSize:20})
        .setOrigin(0.5)

    

        this.input.keyboard.once('keydown-SPACE',()=>{
           this.scene.start('game')
       })
       this.input.on('pointerdown',(pointer)=>{
            this.scene.start('game');
       });
    }
}