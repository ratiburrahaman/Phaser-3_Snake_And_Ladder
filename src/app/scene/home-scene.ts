import { getCenterX, getCenterY, option } from "../utils/utils";

export class HomeScene extends Phaser.Scene {
    constructor(){
        super("HomeScene");

    }

    create(){

        let bgSound = this.sound.add("bgSound");
        if(!option.isSoundOff){
           bgSound.play();
        }

        this.add.image(getCenterX(this), getCenterY(this), `bg_menu`);
        let logo = this.add.image(getCenterX(this), 200, "logo");
        this.tweens.add({
            targets: logo,
            scale: .9,
            duration: 1000,
            yoyo: true,
            repeat: -1
        })

        let playBtn = this.add.image(getCenterX(this), 480, "playBtn");
        this.tweens.add({
            targets: playBtn,
            scale: .9,
            duration: 1000,
            yoyo: true,
            repeat: -1
        })

        playBtn.setInteractive();
        playBtn.on("pointerup", ()=>{
            bgSound.destroy();
            this.scene.start("SelectionScene");
        })

    }
}