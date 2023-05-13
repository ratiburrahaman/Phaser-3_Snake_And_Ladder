
import { Dice } from "../object/dice";
import { diceAnim } from "../object/diceAnim";
import { Player } from "../object/player";
import { playerAnim } from "../object/playerAnim";
import { snakeAnim } from "../object/snakeAnim";
import { court, getCenterX, getCenterY, getHeight, getWidth, option, playersPosList } from "../utils/utils";

export class GameScene extends Phaser.Scene {
  

  private diceButton: Phaser.GameObjects.Sprite;
  private dice: Dice;
  private snakelist: Phaser.GameObjects.Sprite[];
  private playerList: Player[];
  private numberOfPlayer: number;
  private currentPlayerIndex: number;
  private yourPlayerIndex: number;
  private isAIActive: boolean;
  private dice_btn_frame: number;
  private diceSound;
  private turnList: Phaser.GameObjects.Sprite[];
  private arrow: Phaser.GameObjects.Image;
  private bubbleText: Phaser.GameObjects.Text;


  constructor() {
    super({ key: "GameScene" });
  }

  init() {



    this.currentPlayerIndex = 0;
    this.numberOfPlayer = option.numberOfPlayer;
    this.snakelist = [];
    this.playerList = [];
    this.yourPlayerIndex = 0;
    this.isAIActive = option.aiMode;
    this.dice_btn_frame = 0;
    this.turnList = [];
    this.bubbleText = this.add.text(getCenterX(this), -200, "Nice",{
      fontFamily: "mario",
      fontSize: "38px",
      stroke: '#107AFF',
      strokeThickness: 5,
      shadow: { fill: true, blur: 0, stroke: false, offsetX: 1, offsetY: 1, color: '#000'}
    }).setOrigin(0.5).setDepth(6);
    this.bubbleText.visible = false;



  }


  create() {


    // dice anim
    diceAnim(this.anims);
    // snake anim
    snakeAnim(this.anims);
    // player anim
    playerAnim(this.anims);



    this.add.image(getCenterX(this), getCenterY(this), `board_${option.gameMode}`);


  
    this.dice = new Dice(this);

    this.diceSound = this.sound.add("dice_sound");
    let buttonClickSound = this.sound.add("buttonClick");

    //this.player = new Player(this, 160, 530, 0);
    this.AddPlayer();

    this.addTurnPanel();

    



 

    this.diceButton = this.add.sprite(getWidth(this) - 50, getHeight(this) - 50, "button_dice", 0);
    this.diceButton.setInteractive();
    this.diceButton.on("pointerdown", ()=>{
      if(this.dice_btn_frame == 0){
        if(!option.isSoundOff){
          buttonClickSound.play();
        }
        this.dice_btn_frame = 1;
        this.RollTheDice();
      }
    });


    const gameScene = this.scene.get("GameScene");
    gameScene.events.on(
      "changePlayer",
      () => {
        this.dice.visible = false;
        if(!option.gameover){
          if(this.currentPlayerIndex < this.numberOfPlayer - 1){
            this.currentPlayerIndex++;
          }else{
            this.currentPlayerIndex = 0;
          }
          if (this.isAIActive) {
            if(this.currentPlayerIndex != this.yourPlayerIndex){
              this.AIPlayer();
            }else{
              this.dice_btn_frame = 0;
            } 
          }else{
            this.dice_btn_frame = 0;
          }
          if(option.aiMode){
            if(this.currentPlayerIndex == 0){
             this.arrowShow();
            }
          }else{
             this.arrowShow();
          }
          this.setTurnIndicator();
        }else{
          
        }
    });

    // arrow
    this.arrow = this.add.image(0, 0, "arrow").setDepth(6);

    this.tweens.add({
      targets: this.arrow,
      scale: 1.2,
      duration: 500,
      repeat: -1,
      yoyo: true
    })


    this.addLaddersAndSnakes();
    this.setTurnIndicator();


    // this.input.on("pointerdown", (event)=>{
    //   console.log(`x: ${event.x} y: ${event.y}`);
    // })
   
  }

  private addLaddersAndSnakes(): void {

    let snakeKey = option.gameMode == 0 ? "snake":"chute";

    for(let i = 0; i < court.court_desc.length; i++){
      if(court.court_desc[i].isHasLadder){
        let ladder = this.add.image(court.court_desc[i].ladderPos.x, court.court_desc[i].ladderPos.y, `ladder_${i + 1}`);
        ladder.setDepth(3);
      }

      if(court.court_desc[i].isHasSnake){
        let snake = this.add.sprite(court.court_desc[i].snakePos.x, court.court_desc[i].snakePos.y, `${snakeKey}_${i + 1}`);
        snake.setDepth(2);
        this.snakelist.push(snake);
      }

    }

    
   
  }

  update(time: number, delta: number): void {
    
    this.diceButton.setFrame(this.dice_btn_frame);

  }



  private AddPlayer(): void {
    let key;
    if(option.gameMode == 0){
      key = "player_0";
    }else{
      key = "player_1";
    }

    for(let i = 0; i < this.numberOfPlayer; i++){
      let frameIndex = i;
      if(i == 0){
        frameIndex = option.yourPlayerFrame;
      }

      if(i == option.yourPlayerFrame){
        frameIndex = 0;
      }
     
      let newPlayer = new Player(this, playersPosList.position[i].x, playersPosList.position[i].y, frameIndex, key, i, this.snakelist, this.bubbleText);
      this.playerList.push(newPlayer);
    }
  }



  private AIPlayer(): void {
    this.RollTheDice();
  }

  private RollTheDice(): void {
    let randomDiceValue = Phaser.Math.Between(1,6);
    if(!option.isSoundOff){
      this.diceSound.play();
    }
    
    this.playerList[this.currentPlayerIndex].DiceComplete(randomDiceValue);

    this.dice.anims.play(`dice_anim_${randomDiceValue}`);

    this.dice.visible = true;

    this.time.addEvent({
      delay: 500,
      callback: ()=>{
        this.arrow.visible = false;
      }
    })

  }

  private addTurnPanel(): void{
    this.add.image(50, 220, "turn_panel").setDepth(2).setScale(.8);

    for(let i = 0; i < this.playerList.length; i++){
      let turnIcon = this.add.sprite(50, (i * 40) + 120, `turns${option.gameMode}`, this.playerList[i].getFrameIndex()).setDepth(2);
      this.turnList.push(turnIcon);
    }

    this.arrow = this.add.image(this.playerList[this.currentPlayerIndex].x, this.playerList[this.currentPlayerIndex].y - (this.playerList[this.currentPlayerIndex].height + option.gameMode == 0 ? 70 : 90), "arrow").setDepth(6);
    this.arrow.visible = false; 

    this.tweens.add({
      targets: this.arrow,
      scale: 1.2,
      duration: 500,
      repeat: -1,
      yoyo: true
    })
  }

  private setTurnIndicator(): void {
    // turns icon
    this.turnList[this.currentPlayerIndex].setFrame(this.playerList[this.currentPlayerIndex].getFrameIndex() + 6);
    for(let i = 0; i < this.turnList.length; i++){
      if(this.currentPlayerIndex != i){
        this.turnList[i].setFrame(this.playerList[i].getFrameIndex());
      }
    }


  }

  private arrowShow(): void {
    // set arrow
    this.arrow.setPosition(this.playerList[this.currentPlayerIndex].x, this.playerList[this.currentPlayerIndex].y - (this.playerList[this.currentPlayerIndex].height + option.gameMode == 0 ? 70 : 90));
    this.arrow.visible = true;
  }

 
}
