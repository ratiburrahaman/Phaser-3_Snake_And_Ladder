import { getCenterX, getCenterY, option } from "../utils/utils";

export class SelectionScene extends Phaser.Scene {

    private opponentsPanel: Phaser.GameObjects.Container;
    private numberOfplayerPanel: Phaser.GameObjects.Container;
    private playerColorPanel: Phaser.GameObjects.Container;
    private gameModePanel: Phaser.GameObjects.Container;
    private bgSound;

    

    constructor(){
        super("SelectionScene");
    }

    init(){

    }

    create(){
        this.add.image(getCenterX(this), getCenterY(this), "board_0");

        this.bgSound = this.sound.add("bgSound");
        if(!option.isSoundOff){
            this.bgSound.play();
        }

        // game mode panel
        this.gameModePanel = this.add.container(getCenterX(this), getCenterY(this));
        let modeText = this.add.text(0, -135, "SELECT GAME MODE", {
            fontFamily: "mario",
            fontSize: "38px",
            stroke: '#107AFF',
			strokeThickness: 5,
			shadow: { fill: true, blur: 0, stroke: false, offsetX: 1, offsetY: 1, color: '#000' }
        }).setOrigin(0.5);
        let gameModeBG = this.add.image(0, 0, "panel_bg");
        let modeButton_0 = this.add.image(-120, 0, "modeButton_0").setInteractive();
        modeButton_0.on("pointerdown", ()=>{
            option.gameMode = 0;
            this.opponentsPanel.visible = true;
        });

        let modeButton_1 = this.add.image(120, 0, "modeButton_1").setInteractive();
        modeButton_1.on("pointerdown", ()=>{
            option.gameMode = 1;
            this.opponentsPanel.visible = true;
        });

        this.gameModePanel.add([gameModeBG, modeText, modeButton_0, modeButton_1]);

        // oponent panel
        this.opponentsPanel = this.add.container(getCenterX(this), getCenterY(this));
        let opponetsText = this.add.text(0, -135, "SELECT OPPONENTS", {
            fontFamily: "mario",
            fontSize: "38px",
            stroke: '#107AFF',
			strokeThickness: 5,
			shadow: { fill: true, blur: 0, stroke: false, offsetX: 1, offsetY: 1, color: '#000'}
        }).setOrigin(0.5);
        let panelBG = this.add.image(0, 0, "panel_bg");
        let vs_man_panel = this.add.image(-120, 0, "vs_man_panel").setInteractive();
        let vs_pc_panel = this.add.image(120, 0, "vs_pc_panel").setInteractive();
        this.opponentsPanel.visible = false;
        this.opponentsPanel.add([panelBG, opponetsText, vs_man_panel, vs_pc_panel]);

        vs_man_panel.on("pointerdown", ()=>{
            option.aiMode = false;
            this.opponentsPanel.visible = false;
           // number of player panel
           this.numberOfplayer();

        });

        vs_pc_panel.on("pointerdown", ()=>{
            option.aiMode = true;
            this.opponentsPanel.visible = false;
        
            this.numberOfplayer();

        });

       
 
        

        
    }

    private numberOfplayer(): void{
        let playerPanelBG = this.add.image(0, 0, "panel_bg");
        let numberOfPlayerText = this.add.text(0, -135, "SELECT PLAYERS", {
            fontFamily: "mario",
            fontSize: "38px",
            stroke: '#107AFF',
			strokeThickness: 5,
			shadow: { fill: true, blur: 0, stroke: false, offsetX: 1, offsetY: 1, color: '#000'}
        }).setOrigin(0.5);

        this.numberOfplayerPanel = this.add.container(getCenterX(this), getCenterY(this));
        let player_1 = this.add.sprite(-215, -40, `playerButton_${option.gameMode}`, 0).setInteractive();
        player_1.on("pointerdown", ()=>{
            option.numberOfPlayer = 2;
            this.addPlayerColor();
        })
        let player_2 = this.add.sprite(-100, 40, `playerButton_${option.gameMode}`, 1).setInteractive();
        player_2.on("pointerdown", ()=>{
            option.numberOfPlayer = 3;
            this.addPlayerColor();
        })
        let player_3 = this.add.sprite(0, -40, `playerButton_${option.gameMode}`, 2).setInteractive();
        player_3.on("pointerdown", ()=>{
            option.numberOfPlayer = 4;
            this.addPlayerColor();
        })
        let player_4 = this.add.sprite(100, 40, `playerButton_${option.gameMode}`, 3).setInteractive();
        player_4.on("pointerdown", ()=>{
            option.numberOfPlayer = 5;
            this.addPlayerColor();
        })
        let player_5 = this.add.sprite(200, -40, `playerButton_${option.gameMode}`, 4).setInteractive();
        player_5.on("pointerdown", ()=>{
            option.numberOfPlayer = 6;
            this.addPlayerColor();
        })

        this.numberOfplayerPanel.add([playerPanelBG, numberOfPlayerText, player_1, player_2, player_3, player_4, player_5]);
        //this.playerPanel.visible = false;
    }

    private addPlayerColor(): void {
        // select player color panel
        let playerColorPanelBG = this.add.image(0, 0, "panel_bg");

        let playerColorText = this.add.text(0, -135, "SELECT YOUR PLAYER", {
            fontFamily: "mario",
            fontSize: "38px",
            stroke: '#107AFF',
			strokeThickness: 5,
			shadow: { fill: true, blur: 0, stroke: false, offsetX: 1, offsetY: 1, color: '#000'}
        }).setOrigin(0.5);

        this.playerColorPanel = this.add.container(getCenterX(this), getCenterY(this));
        //this.playerColorPanel.visible = false;
        let color_1 = this.add.sprite(-215, 0, `playerbig_${option.gameMode}`, 0).setInteractive();//.setScale(option.gameMode == 0 ? 3:1);
        color_1.on("pointerdown", ()=>{
            option.yourPlayerFrame = 0;
            this.bgSound.destroy();
            this.scene.start("GameScene");
            this.scene.start("GameHUD");
            this.scene.bringToTop("GameHUD");
            
        })
        let color_2 = this.add.sprite(-100, 0, `playerbig_${option.gameMode}`, 1).setInteractive();
        color_2.on("pointerdown", ()=>{
            option.yourPlayerFrame = 1;
            this.bgSound.destroy();
            this.scene.start("GameScene");
            this.scene.start("GameHUD");
            this.scene.bringToTop("GameHUD");
        })
        let color_3 = this.add.sprite(0, 0, `playerbig_${option.gameMode}`, 2).setInteractive();
        color_3.on("pointerdown", ()=>{
           option.yourPlayerFrame = 2;
           this.bgSound.destroy();
            this.scene.start("GameScene");
            this.scene.start("GameHUD");
            this.scene.bringToTop("GameHUD");
        })
        let color_4 = this.add.sprite(100, 0, `playerbig_${option.gameMode}`, 3).setInteractive();
        color_4.on("pointerdown", ()=>{
           option.yourPlayerFrame = 3;
            this.bgSound.destroy();
            this.scene.start("GameScene");
            this.scene.start("GameHUD");
            this.scene.bringToTop("GameHUD");
        })
        let color_5 = this.add.sprite(200, 0, `playerbig_${option.gameMode}`, 4).setInteractive();
        color_5.on("pointerdown", ()=>{
            option.yourPlayerFrame = 4;
            this.bgSound.destroy();
            this.scene.start("GameScene");
            this.scene.start("GameHUD");
            this.scene.bringToTop("GameHUD");
        })

        this.playerColorPanel.add([playerColorPanelBG, playerColorText, color_1, color_2, color_3, color_4, color_5]);

       
    }
} 