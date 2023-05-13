import { getCenterX, getCenterY, getHeight, getWidth, option } from "../../utils/utils";

export class GameHUD extends Phaser.Scene {

    private gameOverPanel: Phaser.GameObjects.Container;
    private gameOverText: Phaser.GameObjects.Text;
    private helpPanel: Phaser.GameObjects.Container;
    private blurImage: Phaser.GameObjects.Rectangle;
    private IsHelpPanelOpened: boolean;
    private exitPanel: Phaser.GameObjects.Container;
    private bgSound;

    constructor(){
        super({
            key: "GameHUD"
        });
    }

    create(){
        // game over panel
        this.gameOverPanel = this.add.container(getCenterX(this), -100).setDepth(4);
        this.gameOverText = this.add.text(0, -135, "You win!", {
            fontFamily: "mario",
            fontSize: "38px",
            stroke: '#107AFF',
			strokeThickness: 5,
			shadow: { fill: true, blur: 0, stroke: false, offsetX: 1, offsetY: 1, color: '#000'}
        }).setOrigin(0.5);
        let gameModeBG = this.add.image(0, 0, "panel_bg");
        let reLoadBtn = this.add.image(100, 0, "reloadBtn").setInteractive();
        reLoadBtn.on("pointerdown", ()=>{
            this.scene.start("GameScene");
            this.scene.start("GameHUD");
            this.scene.bringToTop("GameHUD");
            this.gameOverPanel.visible = false;
        });

        let homeBtn = this.add.image(-100, 0, "homeBtn").setInteractive();
        homeBtn.on("pointerdown", ()=>{
            this.goToHome();
            this.gameOverPanel.visible = false;
        });

        this.gameOverPanel.add([gameModeBG, this.gameOverText, reLoadBtn, homeBtn]);
        this.gameOverPanel.visible = false;

        const gameScene = this.scene.get("GameScene");
        gameScene.events.on(
          "GameOver",
          (playerIndex) => {
            this.ShowGameOver(playerIndex);
            this.blurImage.visible = true;
          }
        );

        this.bgSound = this.sound.add("bgSound");
        if(!option.isSoundOff){
            this.bgSound.play();
        }
        // menu container
        let menuContainer = this.add.container(getWidth(this) - 40, 40);
        
        // exit btn
        let exitBtn = this.add.image(0, 70, "exitBtn").setInteractive();
        exitBtn.on("pointerdown", ()=>{
            
            this.exitPanel.visible = true;
            this.blurImage.visible = true;
            this.tweens.add({
                targets: this.exitPanel,
                y: getCenterY(this),
                duration: 500
            })
        })

        // blur image
        this.blurImage = this.add.rectangle(getCenterX(this), getCenterY(this), getWidth(this), getHeight(this), 0x000, 0.9).setDepth(3);

        this.addHelpPanel();
 
        // help btn
        let helpBtn = this.add.image(0, 140, "helpBtn").setInteractive();
        helpBtn.on("pointerdown", ()=>{
            this.IsHelpPanelOpened = !this.IsHelpPanelOpened;
            this.helpPanel.visible = this.IsHelpPanelOpened;
            this.blurImage.visible = this.IsHelpPanelOpened;
            menuContainer.y = -350;
        })

        // audio btn
        let audioBtn = this.add.sprite(0, 210, "audio_icon", option.isSoundOff ? 1:0 ).setInteractive();
        audioBtn.on("pointerdown", ()=>{
            option.isSoundOff?audioBtn.setFrame(0):audioBtn.setFrame(1);
            option.isSoundOff = !option.isSoundOff;
            option.isSoundOff?this.bgSound.stop():this.bgSound.play();
           
        })

        // fullscreen btn
        let fullScreen = this.add.sprite(0, 280, "fullScreen", 0).setInteractive();
        fullScreen.on("pointerdown", ()=>{
            this.scale.isFullscreen?this.scale.stopFullscreen():this.scale.startFullscreen();
            
        })

        menuContainer.add([exitBtn, helpBtn, audioBtn, fullScreen]);
        menuContainer.y = -350;
        menuContainer.alpha = 0;



        // setting btn 
        let settingBtn = this.add.image(getWidth(this) - 40, 40, "buttonSettings").setInteractive().setDepth(2);
        let isMenuOpened: boolean;
        settingBtn.on("pointerdown", ()=>{
            this.tweens.add({
                targets: menuContainer,
                duration: 200,
                y: isMenuOpened?-350:40,
                alpha: isMenuOpened?0:1,
                onComplete: ()=>{
                    isMenuOpened = isMenuOpened?false:true;
                }
            })
        });

        this.addExitPanel();

        
    }

    // help container
    private addHelpPanel(): void{
        this.helpPanel = this.add.container(getCenterX(this), getCenterY(this)).setDepth(4);
        let ledderText = this.add.text(0, -135, "REACH THE END OF THE BOARD \n LAUNCHINGG THE DICE", {
            fontFamily: "mario",
            fontSize: "30px",
            stroke: '#107AFF',
			strokeThickness: 5,
			shadow: { fill: true, blur: 0, stroke: false, offsetX: 1, offsetY: 1, color: '#000'}
            
        }).setOrigin(0.5);
        let helpPanelBG = this.add.image(0, 0, "panel_bg");

        let help_ladder = this.add.image(-200, -10, "help_ladder");
        let helpLadderText = this.add.text(-120, -50, "LADDER: YOU GO UP!", {
            fontSize: "25px",
            fontFamily: "mario"
        })

        let help_snake = this.add.image(200, 40, "help_snake");
        let helpSnakeText = this.add.text(-210, 60, "SNAKE: YOU GO DOWN!", {
            fontSize: "25px",
            fontFamily: "mario"
        })


        let ladderhelpPlayer = this.add.sprite(-170, -10, `playerbig_${option.gameMode}`, 1).setScale(-0.5, 0.5);
        this.tweens.add({
            targets: ladderhelpPlayer,
            x: -230,
            y: -80,
            duration: 1000,
            repeat: -1
        })

        let snakehelpPlayer = this.add.sprite(180, -10, `playerbig_${option.gameMode}`, 1).setScale(-0.5, 0.5);
        this.tweens.add({
            targets: snakehelpPlayer,
            x: 220,
            y: 70,
            duration: 1000,
            repeat: -1
        })

        let nextBtn = this.add.image(0, 180, "nextBtn").setInteractive();
        nextBtn.on("pointerdown", ()=>{
            this.helpPanel.visible = false;
            this.blurImage.visible = false;
            this.IsHelpPanelOpened = false;
        });



        this.helpPanel.add([helpPanelBG, ledderText, help_ladder, helpLadderText, helpSnakeText, help_snake, ladderhelpPlayer, snakehelpPlayer, nextBtn]);
       // this.helpPanel.visible = false;
    }

    //exit panel
    private addExitPanel(): void {
        this.exitPanel = this.add.container(getCenterX(this), 500).setDepth(4);
        let exitPanelBG = this.add.image(0, 0, "panel_bg");
        let text = this.add.text(0, -100, "ARE YOU SURE?", {
            fontFamily: "mario",
            fontSize: "45px",
            stroke: '#107AFF',
			strokeThickness: 5,
			shadow: { fill: true, blur: 0, stroke: false, offsetX: 1, offsetY: 1, color: '#000'}
        }).setOrigin(0.5);

        let yesBtn = this.add.image(100, 60, "yesBtn").setInteractive();
        yesBtn.on("pointerdown", ()=>{
            const gameScene = this.scene.get("GameScene");
            gameScene.events.off("changePlayer");
            this.goToHome();
        });

        let noBtn = this.add.image(-100, 60, "noBtn").setInteractive();
        noBtn.on("pointerdown", ()=>{
            this.exitPanel.visible = false;
            this.blurImage.visible = false;
            this.exitPanel.y = 500;
        });


        this.exitPanel.add([exitPanelBG, text, yesBtn, noBtn]);
        this.exitPanel.visible = false;

    }


    private goToHome(): void {
        this.bgSound.destroy();
        this.scene.stop("GameScene");
        this.scene.stop("GameHUD");
        this.scene.start("HomeScene");


    }

    private ShowGameOver(playerIndex: number): void {
        if(option.aiMode == true){
            if(playerIndex == 0){
                // you win
                this.gameOverText.setText("You win!");
              
            }else{
                // you loss
                this.gameOverText.setText("You loss!");
       
            }
        }

        if(!option.aiMode){
            // player win
            this.gameOverText.setText(`Player ${playerIndex + 1} win!`)
            
        }
        this.gameOverPanel.visible = true;
        this.tweens.add({
            targets: this.gameOverPanel,
            duration: 500,
            y: getCenterY(this)
        })
    }
}