import Phaser from "../lib/phaser.js"

export default class StartScreen extends Phaser.Scene {
    constructor(){
        super('start-screen')
    }
    init(){
        this.playerName = "doe";
    }
    preload(){
        this.load.image('background', 'assets/PNG/Background/bg_layer1.png')
    }
    create(){
         this.add.image( 240, 300,'background').setScrollFactor(1,0)
        
    const inputElement = this.add.dom(240, 300, 'input', 'width: 200px; height: 30px; font-size: 18px;', 'Enter Name');
    
    
    const nativeInput = inputElement.node; // Accesses the raw HTML element
    nativeInput.placeholder = "Your Name...";
    nativeInput.maxLength = 10;

    this.input.keyboard.on('keydown-ENTER', () => {
        const playerInputText = nativeInput.value;
        if (playerInputText.trim() !== "") {
            console.log("Player entered:", playerInputText);
            
            // Example: carry over data to next scene
            this.scene.start('game', { name: playerInputText });
        }
    });
       
          
    }
}