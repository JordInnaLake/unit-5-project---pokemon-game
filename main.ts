namespace SpriteKind {
    export const plate = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    while (false) {
    	
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.plate, function (sprite, otherSprite) {
    animation.runImageAnimation(
    plate1,
    [img`
        b b b b b b b b b b b b b b b b 
        b c b b b b b b b b b b b b c b 
        b b b e 4 4 4 4 4 4 4 4 e b b b 
        b b e 4 4 4 4 4 4 4 4 4 4 e b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b d 4 4 4 4 4 4 4 4 4 4 d b b 
        b b d 4 4 4 4 4 4 4 4 4 4 d b b 
        b b 4 d 4 4 4 4 4 4 4 4 d 4 b b 
        b b c 4 d d d d d d d d 4 c b b 
        b b b c c c c c c c c c c b b b 
        b c b b b b b b b b b b b b c b 
        b b b b b b b b b b b b b b b b 
        `,img`
        b b b b b b b b b b b b b b b b 
        b c b e 4 4 4 4 4 4 4 4 e b c b 
        b b e 4 4 4 4 4 4 4 4 4 4 e b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b d 4 4 4 4 4 4 4 4 4 4 d b b 
        b b d 4 4 4 4 4 4 4 4 4 4 d b b 
        b b 4 d 4 4 4 4 4 4 4 4 d 4 b b 
        b b 4 4 d d d d d d d d 4 4 b b 
        b b c 4 4 4 4 4 4 4 4 4 4 c b b 
        b b b c c c c c c c c c c b b b 
        b c b b b b b b b b b b b b c b 
        b b b b b b b b b b b b b b b b 
        `],
    300,
    false
    )
})
let plate1: Sprite = null
tiles.setTilemap(tilemap`level1`)
plate1 = sprites.create(img`
    b b b b b b b b b b b b b b b b 
    b c b e 4 4 4 4 4 4 4 4 e b c b 
    b b e 4 4 4 4 4 4 4 4 4 4 e b b 
    b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
    b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
    b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
    b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
    b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
    b b d 4 4 4 4 4 4 4 4 4 4 d b b 
    b b d 4 4 4 4 4 4 4 4 4 4 d b b 
    b b 4 d 4 4 4 4 4 4 4 4 d 4 b b 
    b b 4 4 d d d d d d d d 4 4 b b 
    b b c 4 4 4 4 4 4 4 4 4 4 c b b 
    b b b c c c c c c c c c c b b b 
    b c b b b b b b b b b b b b c b 
    b b b b b b b b b b b b b b b b 
    `, SpriteKind.plate)
let player1 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
plate1.setPosition(16, 19)
controller.player1.moveSprite(player1)
