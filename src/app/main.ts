import 'phaser';
import { BootScene } from './scene/boot-scene';
import { GameScene } from './scene/game-scene';
import { HomeScene } from './scene/home-scene';
import { GameHUD } from './scene/HUD/gameHUD';
import { SelectionScene } from './scene/selection-scene';


const config = {
    type: Phaser.AUTO,
    backgroundColor: '#000',
    width: 1024,
    height: 600,
    parent: "game",
    scale: {
        mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [BootScene, HomeScene, SelectionScene, GameScene, GameHUD]
};


const game = new Phaser.Game(config);
