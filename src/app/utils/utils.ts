import { Player } from "../object/player";

export function getCenterX(scene: Phaser.Scene): number{
    return scene.sys.canvas.width / 2;
}

export function getCenterY(scene: Phaser.Scene): number{
    return scene.sys.canvas.height / 2;
}

export function getWidth(scene: Phaser.Scene): number{
    return scene.sys.canvas.width;
}

export function getHeight(scene: Phaser.Scene): number{
    return scene.sys.canvas.height;
}

let wowText = ["Great", "Wow", "Nice", "Nice Dice"];
let noText = ["Bad Luck", "No!", "Bad dice"];

export function showBubbleText(scene: Phaser.Scene, text: Phaser.GameObjects.Text, isWow){
    text.text = isWow? wowText[Phaser.Math.Between(0, wowText.length-1)] : noText[Phaser.Math.Between(0, noText.length-1)];
    text.visible = true;
    scene.tweens.add({
        targets: text,
        duration: 500,
        y:scene.sys.canvas.height / 2,
        onComplete: ()=>{
            scene.time.addEvent({
                delay: 500,
                callback: ()=>{
                    text.visible = false;
                    text.y = -200;
                }
            })
        }
      })

}


export let option = {
    gameMode: 0,
    aiMode: true, // false = man mode, true = ai panel mode
    numberOfPlayer: 0,
    yourPlayerFrame: 0,
    gameover: false,
    isSoundOff: false
}

export let playersPosList = {
    position: [
        {
            x: 117, 
            y: 575
        },
        {
            x: 162, 
            y: 575
        },
        {
            x: 200, 
            y: 575
        },
        {
            x: 117, 
            y: 512
        },
        {
            x: 162, 
            y: 512
        },
        {
            x: 200, 
            y: 512
        },        
      

    ]
}

export let court = {
    court_desc : [
        {   
            courtNumber: 1,
            isHasLadder: true,
            ladderEndCourt: 38,
            ladderPos: {
                x: 320,
                y: 463
            },
            isHasSnake: false,
            pos: {
                x: 262,
                y: 555
            }
        },
        {
            courtNumber: 2,
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 318,
                y: 555
            }
        },
        {
            courtNumber: 3,
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 374,
                y: 555
            }
        },
        {
            // 4
            courtNumber: 4,
            isHasLadder: true,
            ladderEndCourt: 14,
            ladderPos: {
                x: 512,
                y: 519
            },
            isHasSnake: false,
            pos: {
                x: 427,
                y: 555
            }
        },
        {
            // 5
            courtNumber: 5,
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 480,
                y: 555
            }
        },
        {
            // 6
            courtNumber: 6,
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 538,
                y: 555
            }
        },
        {
            // 7
            courtNumber: 7,
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 593,
                y: 555
            }
        },
        {
            // 8
            courtNumber: 8,
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 649,
                y: 555
            }
        },
        {
            // 9
            courtNumber: 9,
            isHasLadder: true,
            ladderEndCourt: 31,
            ladderPos: {
                x: 732,
                y: 465
            },
            isHasSnake: false,
            pos: {
                x: 704,
                y: 555
            }
        },        
        {
            // 10
            courtNumber: 10,
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 756,
                y: 555
            }
        },
        {
            // 11
            courtNumber: 11,
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 758,
                y: 500
            }
        },        
        {
            // 12
            courtNumber: 12,
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 705,
                y: 500
            }
        },        
        {
            // 13
            courtNumber: 13,
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 648,
                y: 500
            }
        },       
        {
            // 14
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 592,
                y: 500
            }
        },        
        {
            // 15
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 540,
                y: 500
            }
        },        
        {
            // 16
            isHasLadder: false,
            isHasSnake: true,
            snakePos: {
                x: 486,
                y: 525
            },
            snakeEndCourt: 6,
            pos: {
                x: 480,
                y: 500
            }
        },
        {
            // 17
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 426,
                y: 500
            }
        },
        {
            // 18
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 372,
                y: 500
            }
        },
        {
            // 19
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 315,
                y: 500
            }
        },
        {
            // 20
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 260,
                y: 500
            }
        }, 
        {
            // 21
            isHasLadder: true,
            ladderEndCourt: 42,
            ladderPos: {
                x: 296,
                y: 380
            },
            isHasSnake: false,
            pos: {
                x: 262,
                y: 450
            }
        },
        {
            // 22
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 318,
                y: 450
            }
        },
        {
            // 23
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 374,
                y: 450
            }
        },
        {
            // 24
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 427,
                y: 450
            }
        },
        {
            // 25
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 480,
                y: 450
            }
        },
        {
            // 26
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 538,
                y: 450
            }
        },
        {
            // 27
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 593,
                y: 450
            }
        },
        {
            // 28
            isHasLadder: true,
            ladderEndCourt: 84,
            ladderPos: {
                x: 542,
                y: 274
            },
            isHasSnake: false,
            pos: {
                x: 649,
                y: 450
            }
        },
        {
            // 29
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 704,
                y: 450
            }
        },        
        {
            // 30
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 756,
                y: 450
            }
        },
        {
            // 31
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 758,
                y: 390
            }
        },        
        {
            // 32
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 705,
                y: 390
            }
        },        
        {
            // 33
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 648,
                y: 390
            }
        },       
        {
            // 34
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 592,
                y: 390
            }
        },        
        {
            // 35
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 540,
                y: 390
            }
        },        
        {
            // 36
            isHasLadder: true,
            ladderEndCourt: 44,
            ladderPos: {
                x: 458,
                y: 356.4705882352941
            },
            isHasSnake: false,
            pos: {
                x: 480,
                y: 390
            }
        },
        {
            // 37
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 426,
                y: 390
            }
        },
        {
            // 38
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 372,
                y: 390
            }
        },
        {
            // 39
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 315,
                y: 390
            }
        },
        {
            // 40
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 260,
                y: 390
            }
        },
        {
            // 41
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 262,
                y: 333
            }
        },        
        {
            // 42
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 318,
                y: 333
            }
        },        
        {
            // 43
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 374,
                y: 333
            }
        },       
        {
            // 44
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 427,
                y: 333
            }
        },        
        {
            // 45
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 480,
                y: 333
            }
        },        
        {
            // 46
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 538,
                y: 333
            }
        },
        {
            // 47
            isHasLadder: false,
            isHasSnake: true,
            snakeEndCourt: 26,
            snakePos: {
                x: 600,
                y: 388
            },
            
            pos: {
                x: 593,
                y: 333
            }
        },
        {
            // 48
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 649,
                y: 333
            }
        },
        {
            // 49
            isHasLadder: false,
            isHasSnake: true,
            snakeEndCourt: 11,
            snakePos: {
                x: 740,
                y: 412
            },
            pos: {
                x: 709,
                y: 333
            }
        },
        {
            // 50
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 756,
                y: 333
            }
        },
        {
            // 51
            isHasLadder: true,
            ladderEndCourt: 67,
            ladderPos: {
                x: 678,
                y: 244
            },
            isHasSnake: false,
            pos: {
                x: 758,
                y: 282
            }
        },        
        {
            // 52
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 705,
                y: 282
            }
        },        
        {
            // 53
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 648,
                y: 282
            }
        },       
        {
            // 54
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 592,
                y: 282
            }
        },        
        {
            // 55
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 540,
                y: 282
            }
        },        
        {
            // 56
            isHasLadder: false,
            isHasSnake: true,
            snakeEndCourt: 53,
            snakePos: {
                x: 560,
                y: 270
            },
            pos: {
                x: 480,
                y: 282
            }
        },
        {
            // 57
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 426,
                y: 282
            }
        },
        {
            // 58
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 372,
                y: 282
            }
        },
        {
            // 59
            isHasLadder: false,
            pos: {
                x: 315,
                y: 282
            }
        },
        {
            // 60
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 260,
                y: 282
            }
        }, 
        {
            // 61
            isHasSnake: false,
            pos: {
                x: 262,
                y: 225
            }
        },
        {
            // 62
            isHasLadder: false,
            isHasSnake: true,
            snakePos: {
                x: 350,
                y: 364
            },
            snakeEndCourt: 19,
            pos: {
                x: 318,
                y: 225
            }
        },
        {
            // 63
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 374,
                y: 225
            }
        },
        {
            // 64
            isHasLadder: false,
            isHasSnake: true,
            snakePos: {
                x: 348,
                y: 250
            },
            snakeEndCourt: 60,
            pos: {
                x: 427,
                y: 225
            }
        },
        {
            // 65
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 480,
                y: 225
            }
        },
        {
            // 66
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 538,
                y: 225
            }
        },
        {
            // 67
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 593,
                y: 225
            }
        },
        {
            // 68
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 649,
                y: 225
            }
        },
        {
            // 69
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 704,
                y: 225
            }
        },        
        {
            // 70
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 756,
                y: 225
            }
        },
        {
            // 71
            isHasLadder: true,
            ladderEndCourt: 91,
            ladderPos: {
                x: 758,
                y: 105
            },
            isHasSnake: false,
            pos: {
                x: 758,
                y: 172
            }
        },        
        {
            // 72
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 705,
                y: 172
            }
        },        
        {
            // 73
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 648,
                y: 172
            }
        },       
        {
            // 74
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 592,
                y: 172
            }
        },        
        {
            // 75
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 540,
                y: 172
            }
        },        
        {
            // 76
            isHasLadder: false,
            isHasSnake: false,
            snakeEndCourt: 6,
            pos: {
                x: 480,
                y: 172
            }
        },
        {
            // 77
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 426,
                y: 172
            }
        },
        {
            // 78
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 372,
                y: 172
            }
        },
        {
            // 79
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 315,
                y: 172
            }
        },
        {
            // 80
            isHasLadder: true,
            ladderEndCourt: 100,
            ladderPos: {
                x: 265,
                y: 105
            },
            isHasSnake: false,
            pos: {
                x: 260,
                y: 172
            }
        }, 
        {
            // 81
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 262,
                y: 115
            }
        },
        {
            // 82
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 318,
                y: 115
            }
        },
        {
            // 83
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 374,
                y: 115
            }
        },
        {
            // 84
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 427,
                y: 115
            }
        },
        {
            // 85
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 480,
                y: 115
            }
        },
        {
            // 86
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 538,
                y: 115
            }
        },
        {
            // 87
            isHasLadder: false,
            isHasSnake: true,
            snakePos: {
                x: 510,
                y: 280
            },
            snakeEndCourt: 24,
            pos: {
                x: 593,
                y: 115
            }
        },
        {
            // 88
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 649,
                y: 115
            }
        },
        {
            // 89
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 704,
                y: 115
            }
        },        
        {
            // 90
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 756,
                y: 115
            }
        },
        {
            // 91
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 758,
                y: 60
            }
        },        
        {
            // 92
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 705,
                y: 60
            }
        },        
        {
            // 93
            isHasLadder: false,
            isHasSnake: true,
            snakePos: {
                x: 680,
                y: 105
            },
            snakeEndCourt: 73,
            pos: {
                x: 648,
                y: 60
            }
        },       
        {
            // 94
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 592,
                y: 60
            }
        },        
        {
            // 95
            isHasLadder: false,
            isHasSnake: true,
            snakePos: {
                x: 515,
                y: 97
            },
            snakeEndCourt: 75,
            pos: {
                x: 540,
                y: 60
            }
        },        
        {
            // 96
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 480,
                y: 60
            }
        },
        {
            // 97
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 426,
                y: 60
            }
        },
        {
            // 98
            isHasLadder: false,
            isHasSnake: true,
            snakePos: {
                x: 350,
                y: 100
            },
            snakeEndCourt: 78,
            pos: {
                x: 372,
                y: 60
            }
        },
        {
            // 99
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 315,
                y: 60
            }
        },
        {
            // 100
            isHasLadder: false,
            isHasSnake: false,
            pos: {
                x: 260,
                y: 60
            }
        }
        
    ]
}
