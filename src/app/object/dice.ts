import { getHeight, getWidth } from "../utils/utils";

export class Dice extends Phaser.GameObjects.Sprite {
    constructor(scene){
        super(scene, getWidth(scene) - 200, getHeight(scene) - 130, "dice_1");
        this.visible = false;
        this.scene.add.existing(this);
    }
}