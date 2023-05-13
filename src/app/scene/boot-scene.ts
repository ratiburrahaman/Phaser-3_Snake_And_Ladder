export class BootScene extends Phaser.Scene {
  private loadingBar: Phaser.GameObjects.Graphics;
  private progressBar: Phaser.GameObjects.Graphics;
  private loadingText: Phaser.GameObjects.BitmapText;

  constructor() {
    super({
      key: "BootScene",
    });
  }

  preload(): void {

    this.load.spritesheet("dice_1", "./assets/sprites/dice_1.png", {frameWidth: 150, frameHeight: 410});
    this.load.spritesheet("dice_2", "./assets/sprites/dice_2.png", {frameWidth: 150, frameHeight: 410});
    this.load.spritesheet("dice_3", "./assets/sprites/dice_3.png", {frameWidth: 150, frameHeight: 410});
    this.load.spritesheet("dice_4", "./assets/sprites/dice_4.png", {frameWidth: 150, frameHeight: 410});
    this.load.spritesheet("dice_5", "./assets/sprites/dice_5.png", {frameWidth: 150, frameHeight: 410});
    this.load.spritesheet("dice_6", "./assets/sprites/dice_6.png", {frameWidth: 150, frameHeight: 410});

    // snake
    this.load.spritesheet("snake_16", "./assets/sprites/snakes/snake_16.png", {frameWidth: 150, frameHeight: 100});
    this.load.spritesheet("snake_47", "./assets/sprites/snakes/snake_47.png", {frameWidth: 150, frameHeight: 150});
    this.load.spritesheet("snake_49", "./assets/sprites/snakes/snake_49.png", {frameWidth: 120, frameHeight: 200});
    this.load.spritesheet("snake_56", "./assets/sprites/snakes/snake_56.png", {frameWidth: 190, frameHeight: 72});
    this.load.spritesheet("snake_62", "./assets/sprites/snakes/snake_62.png", {frameWidth: 96, frameHeight: 310});
    this.load.spritesheet("snake_64", "./assets/sprites/snakes/snake_64.png", {frameWidth: 170, frameHeight: 90});
    this.load.spritesheet("snake_87", "./assets/sprites/snakes/snake_87.png", {frameWidth: 230, frameHeight: 380});
    this.load.spritesheet("snake_93", "./assets/sprites/snakes/snake_93.png", {frameWidth: 100, frameHeight: 130});
    this.load.spritesheet("snake_95", "./assets/sprites/snakes/snake_95.png", {frameWidth: 100, frameHeight: 130});
    this.load.spritesheet("snake_98", "./assets/sprites/snakes/snake_98.png", {frameWidth: 100, frameHeight: 130});


    
    // player
    this.load.spritesheet("player_0", "./assets/sprites/players_0.png", {frameWidth: 22, frameHeight: 62});
    this.load.spritesheet("playerbig_1", "./assets/sprites/playerbig_1.png", {frameWidth: 101, frameHeight: 112});
    this.load.spritesheet("playerbig_0", "./assets/sprites/playerbig_0.png", {frameWidth: 52, frameHeight: 155});

    // turn
    this.load.spritesheet("turns0", "./assets/sprites/turns0.png", {frameWidth: 34, frameHeight: 34});
    this.load.spritesheet("turns1", "./assets/sprites/turns1.png", {frameWidth: 44, frameHeight: 44});


    

    // animation sheet  
    this.load.spritesheet("player_1_0", "./assets/sprites/players1/player_0.png", {frameWidth: 58, frameHeight: 70});
    this.load.spritesheet("player_1_1", "./assets/sprites/players1/player_1.png", {frameWidth: 50, frameHeight: 72});
    this.load.spritesheet("player_1_2", "./assets/sprites/players1/player_2.png", {frameWidth: 60, frameHeight: 70});
    this.load.spritesheet("player_1_3", "./assets/sprites/players1/player_3.png", {frameWidth: 60, frameHeight: 86});
    this.load.spritesheet("player_1_4", "./assets/sprites/players1/player_4.png", {frameWidth: 60, frameHeight: 70});
    this.load.spritesheet("player_1_5", "./assets/sprites/players1/player_5.png", {frameWidth: 52, frameHeight: 70});



    this.load.spritesheet("fullScreen", "./assets/sprites/but_fullscreen.png", {frameWidth: 60, frameHeight: 62});

    this.load.spritesheet("audio_icon", "./assets/sprites/audio_icon.png", {frameWidth: 60, frameHeight: 62});


    this.load.spritesheet("button_dice", "./assets/sprites/but_dice.png", {frameWidth: 84, frameHeight: 87});

    this.load.spritesheet("playerButton_0", "./assets/sprites/but_play0.png", {frameWidth: 120, frameHeight: 128});

    this.load.spritesheet("playerButton_1", "./assets/sprites/but_play1.png", {frameWidth: 120, frameHeight: 128});

    

    
    
    this.createLoadingbar();

    // pass value to change the loading bar fill
    this.load.on(
      "progress",
      function (value) {
        this.progressBar.clear();
        this.progressBar.fillStyle(0xfff6d3, 1);
        this.progressBar.fillRect(
          this.cameras.main.width / 4,
          this.cameras.main.height / 1.2 - 16,
          (this.cameras.main.width / 2) * value,
          16
        );
      },
      this
    );

    // delete bar graphics, when loading complete
    this.load.on(
      "complete",
      function () {
        this.progressBar.destroy();
        this.loadingBar.destroy();
      },
      this
    );

    // load out package
    this.load.pack("preload", "assets/pack.json", "preload");
  }

  create() {}

  update(): void {
    this.scene.start("HomeScene");
  }

  private createLoadingbar(): void {
    this.loadingBar = this.add.graphics();
    this.loadingBar.fillStyle(0x5dae47, 1);
    this.loadingBar.fillRect(
      this.cameras.main.width / 4 - 2,
      this.cameras.main.height / 1.2 - 18,
      this.cameras.main.width / 2 + 4,
      20
    );
    this.progressBar = this.add.graphics();
  }
}
