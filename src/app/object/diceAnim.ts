export let diceAnim = (anims: Phaser.Animations.AnimationManager) =>{
    anims.create({
        key: "dice_anim_1",
        frames: anims.generateFrameNumbers("dice_1", {start: 0, end: 11}),
        repeat: 0,
        frameRate: 15
    })
  
    anims.create({
      key: "dice_anim_2",
      frames: anims.generateFrameNumbers("dice_2", {start: 0, end: 11}),
      repeat: 0,
      frameRate: 15
    })
  
    anims.create({
      key: "dice_anim_3",
      frames: anims.generateFrameNumbers("dice_3", {start: 0, end: 11}),
      repeat: 0,
      frameRate: 15
    })
  
    anims.create({
      key: "dice_anim_4",
      frames: anims.generateFrameNumbers("dice_4", {start: 0, end: 11}),
      repeat: 0,
      frameRate: 15
    })
  
    anims.create({
      key: "dice_anim_5",
      frames: anims.generateFrameNumbers("dice_5", {start: 0, end: 11}),
      repeat: 0,
      frameRate: 15
    })
  
    anims.create({
      key: "dice_anim_6",
      frames: anims.generateFrameNumbers("dice_6", {start: 0, end: 11}),
      repeat: 0,
      frameRate: 15
    })
}