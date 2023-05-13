import { court, option, showBubbleText } from "../../utils/utils";

export class Player extends Phaser.GameObjects.Sprite {

    private snakeList: Phaser.GameObjects.Sprite[];
    private currentCourtNumber;
    private frameIndex: number;
    private step_land_sound;
    private arrow: Phaser.GameObjects.Image;
    private playerIndex: number;
    private bubbleText: Phaser.GameObjects.Text;

    public getFrameIndex(): number{
      return this.frameIndex;
    }

    constructor(scene, x, y, frameIndex, key, playerIndex, snakeList: Phaser.GameObjects.Sprite[], text: Phaser.GameObjects.Text){
        super(scene, x, y, key, frameIndex);
        this.frameIndex = frameIndex;
        this.bubbleText = text;
        this.playerIndex = playerIndex;
        this.arrow = this.scene.add.image(this.x, this.y - (this.height + option.gameMode == 0 ? 70 : 90), "arrow").setDepth(6);
        this.arrow.visible = false; 

        this.scene.tweens.add({
          targets: this.arrow,
          scale: 1.2,
          duration: 500,
          repeat: -1,
          yoyo: true
        })
        
        this.step_land_sound = this.scene.sound.add("step_land_sound");
        if(option.gameMode == 1){
          //this.setScale(0.6);
          this.anims.play(`idle_player_${this.frameIndex}`);
        }
        this.snakeList = snakeList;
        this.currentCourtNumber = 0;
        this.setOrigin(0.5, 1);
        this.setDepth(5);
        this.scene.add.existing(this);
    }

    public DiceComplete(randomDiceValue: number):void {
        this.MovePlayer(randomDiceValue);
        this.currentCourtNumber += randomDiceValue;

      
    }


    public MovePlayer(randomDiceValue: number): void {
        const timeLine = this.scene.tweens.timeline();
        if(this.currentCourtNumber + randomDiceValue <= 100){
          for(let i = this.currentCourtNumber; i < this.currentCourtNumber + randomDiceValue; i++){
            timeLine.add({
              targets: this,
              ease: 'Power1',
              duration: 500,
              x: court.court_desc[i].pos.x,
              y: court.court_desc[i].pos.y,
              onComplete: ()=>[
                this.checkTimeLineIsComplete(i, this.currentCourtNumber, randomDiceValue)
              ]
            })
          }
        this.scene.time.addEvent({
          delay: 1000,
          callback:()=>{
            // this.arrow.visible = false;
            this.HideArrow();
            timeLine.play();
            if(option.gameMode == 1){
              this.anims.play(`run_player_${this.frameIndex}`);
            }   
          }
        })
      }else{
        console.log('need currect amount of dice: '+(this.currentCourtNumber + randomDiceValue));
        this.scene.time.addEvent({
          delay: 1000,
          callback: ()=>{
            this.scene.events.emit("changePlayer");
          }
        })
        
      }

        // time line complete check ladder and snake
      
    }

    private checkTimeLineIsComplete(i, currentCourtNumber, randomDiceValue){
      // play stepland sound
      this.step_land_sound.play();
      this.facedToPath();

      if(i + 1 == (currentCourtNumber)){   
        if(option.gameMode == 1){
          this.anims.play(`idle_player_${this.frameIndex}`);
        }
        this.CheckLadderAndSnake(currentCourtNumber);
      
      }
    }

    private CheckLadderAndSnake(currentCourtNumber: number): void {
      if(court.court_desc[currentCourtNumber - 1].isHasLadder){
        this.currentCourtNumber = court.court_desc[currentCourtNumber - 1].ladderEndCourt;
        showBubbleText(this.scene, this.bubbleText, true);
        this.MoveWithLadder(this.currentCourtNumber)
      }else if(court.court_desc[currentCourtNumber - 1].isHasSnake){
       // this.PlaySnakeAnim();
        this.PlaySnakeAnim(currentCourtNumber);
        this.currentCourtNumber = court.court_desc[currentCourtNumber - 1].snakeEndCourt;
        showBubbleText(this.scene, this.bubbleText, false);
        this.MoveWithSnake(this.currentCourtNumber)
      }else{
        this.facedToPath();
        this.CheckGameOver();
        this.scene.events.emit("changePlayer");
      }
    }


    public MoveWithSnake(currentCourtNumber): void{
      this.visible = false;
      this.scene.tweens.add({
          targets: this,
          x: court.court_desc[currentCourtNumber - 1].pos.x,
          y: court.court_desc[currentCourtNumber - 1].pos.y,
          duration: 500,
          onComplete:()=>{
              this.visible = true;
              this.scene.events.emit("changePlayer", currentCourtNumber);
              this.facedToPath();
          }
      })
   }

    public MoveWithLadder(currentCourtNumber): void{
        this.scene.tweens.add({
            targets: this,
            x: court.court_desc[currentCourtNumber - 1].pos.x,
            y: court.court_desc[currentCourtNumber - 1].pos.y,
            duration: 500,
            onComplete:()=>{
                this.CheckGameOver();
                this.facedToPath();
                this.scene.events.emit("changePlayer");
            }
        })
    }

    private PlaySnakeAnim(snakeEndCourt): void{
      this.snakeList.forEach(snake => {
        if(snake.texture.key == `snake_${snakeEndCourt}`){
          snake.anims.play(`snake_${snakeEndCourt}`);          
        }
      });
    }


    private facedToPath(){
      if(court.court_desc.length > this.currentCourtNumber + 1){
        if(this.x > court.court_desc[this.currentCourtNumber + 1].pos.x){
          this.scaleX = -1;
        }else{
         this.scaleX = 1;
        }
       // console.log('faced to path'+ this.currentCourtNumber)
      }

    }

    private CheckGameOver(): void {
      if(this.currentCourtNumber == 100){
        option.gameover = true;
        this.scene.events.emit("GameOver", this.playerIndex);
      //  console.log("game win"+this.frameIndex); 
      }
    }

    public ShowArrow(): void {
      this.arrow.setPosition(this.x, this.y - (this.height + option.gameMode == 0 ? 70 : 90));
      this.arrow.visible = true;
    }

    private HideArrow(): void{
      this.arrow.visible = false;
    }
  
}