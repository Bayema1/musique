scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    if (controller.A.isPressed()) {
        music.stopAllSounds()
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
        controller.moveSprite(mySprite)
    }
})
let mySprite: Sprite = null
scene.setBackgroundColor(1)
tiles.setCurrentTilemap(tilemap`niveau1`)
mySprite = sprites.create(img`
    f f f . . . . . . . . . . . . . 
    f 1 1 f f f . . . . . . . . . . 
    f 1 1 1 1 1 f f . . . . . . . . 
    . f 1 1 1 1 1 1 f f f . . . . . 
    . f 1 1 1 1 1 1 1 1 1 f f f . . 
    . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    . . f 1 1 1 1 1 1 1 1 1 1 f . . 
    . . f 1 1 1 1 1 1 1 1 1 f . . . 
    . . . f 1 1 1 1 1 1 1 f . . . . 
    . . . f 1 1 1 1 1 1 1 1 f . . . 
    . . . f 1 1 1 1 1 1 1 1 1 f . . 
    . . . . f 1 1 1 f 1 1 1 1 1 f . 
    . . . . f 1 1 f . f 1 1 1 1 1 f 
    . . . . f 1 f . . . f 1 1 1 f . 
    . . . . . f . . . . . f 1 f . . 
    . . . . . . . . . . . . f . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
