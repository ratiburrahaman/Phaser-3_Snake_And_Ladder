export let playerAnim = (anims: Phaser.Animations.AnimationManager) =>{
    anims.create({
        key: "idle_player_0",
        frames: anims.generateFrameNumbers("player_1_0", {start: 0, end: 26}),
        repeat: -1,
        frameRate: 35
    });

    anims.create({
        key: "idle_player_1",
        frames: anims.generateFrameNumbers("player_1_1", {start: 0, end: 26}),
        repeat: -1,
        frameRate: 35
    });

    anims.create({
        key: "idle_player_2",
        frames: anims.generateFrameNumbers("player_1_2", {start: 0, end: 26}),
        repeat: -1,
        frameRate: 35
    });

    anims.create({
        key: "idle_player_3",
        frames: anims.generateFrameNumbers("player_1_3", {start: 0, end: 26}),
        repeat: -1,
        frameRate: 35
    });

    anims.create({
        key: "idle_player_4",
        frames: anims.generateFrameNumbers("player_1_4", {start: 0, end: 26}),
        repeat: -1,
        frameRate: 35
    });
    anims.create({
        key: "idle_player_5",
        frames: anims.generateFrameNumbers("player_1_5", {start: 0, end: 26}),
        repeat: -1,
        frameRate: 35
    });


    // run anim
    anims.create({
        key: "run_player_0",
        frames: anims.generateFrameNumbers("player_1_0", {start: 27, end: 40}),
        repeat: -1,
        frameRate: 35
    });
    
    anims.create({
        key: "run_player_1",
        frames: anims.generateFrameNumbers("player_1_1", {start: 27, end: 40}),
        repeat: -1,
        frameRate: 35
    });
    
    anims.create({
        key: "run_player_2",
        frames: anims.generateFrameNumbers("player_1_2", {start: 27, end: 40}),
        repeat: -1,
        frameRate: 35
    });
    
    anims.create({
        key: "run_player_3",
        frames: anims.generateFrameNumbers("player_1_3", {start: 27, end: 40}),
        repeat: -1,
        frameRate: 35
    });
    
    anims.create({
        key: "run_player_4",
        frames: anims.generateFrameNumbers("player_1_4", {start: 27, end: 40}),
        repeat: -1,
        frameRate: 35
    });
    anims.create({
        key: "run_player_5",
        frames: anims.generateFrameNumbers("player_1_5", {start: 27, end: 40}),
        repeat: -1,
        frameRate: 35
    });
}