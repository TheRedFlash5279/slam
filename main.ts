namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. f f . f f . f f . f f . f f . 
f . . f . . f . . f . . f . . f 
f . . f . . f . . f . . f . . f 
f . . f . . f . . f . . f . . f 
f . . f . . f . . f . . f . . f 
f . . f . . f . . f . . f . . f 
f . . f . . f . . f . . f . . f 
f . . f . . f . . f . . f . . f 
f . . f . . f . . f . . f . . f 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
c c c c c c f c c c c c c c c c 
c c c c c c f c c c c c c c c c 
c c c c c c f c c c c c c c c c 
c c c c c c f c c c c d c c c c 
c c d c c c f c c c c c c c c c 
c c c c c c f c c c c c c c c c 
c c c c c c f c c c c c c c c c 
c c c c c c f c c c c c c c c c 
c c c d c c f c c c c c c c c c 
c c c c c c f c c c c c c d c c 
c c c c c c f c c c c c c c c c 
c c c c c c f c c c c c c c c c 
c c d c c c f c d c c c c c c c 
c d c c c c f c c c c c c c c c 
c c c c c c f c c c c c c c c c 
c c c c c c f c c c c c d c c c 
`
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    MC.setVelocity(-50, 0)
    pause(200)
    MC.setVelocity(0, 20)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    projectile.destroy(effects.fire, 200)
    info.changeScoreBy(-5)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, MC, 50, 0)
    pause(250)
    projectile.destroy()
    animation.runImageAnimation(
    MC,
    [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    500,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    MC.setVelocity(50, 0)
    pause(200)
    MC.setVelocity(0, 20)
})
let projectile2: Sprite = null
let projectile: Sprite = null
let MC: Sprite = null
MC = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f 1 1 1 1 1 1 1 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f 1 1 1 1 1 1 1 1 1 f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f 1 1 1 1 1 f 1 1 1 f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f 1 1 1 1 1 1 f 1 1 f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f 1 1 1 1 1 1 1 1 1 f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f 1 1 1 1 1 1 1 1 2 f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f 1 2 1 1 2 2 1 2 2 f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f 2 1 2 2 1 2 2 2 2 f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f 2 2 2 2 2 2 1 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . f d d d f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f 1 f f f 1 f d f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f 1 1 1 1 1 f f f d f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 f 2 1 1 f d f d f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 f 1 2 2 f d f d f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f 1 2 f d d f f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f d d d f f d d f f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f d d d d f 1 f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . f f f f 1 1 f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . f 1 1 1 1 1 f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . f 6 6 f 6 6 f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . f 6 6 f 6 6 f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . f 6 6 f 6 6 f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . f 6 6 f 6 6 f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . f 6 6 f 6 6 f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . f e e f e e f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
let Boss = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f d d d d d d d f . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f d d d d d d d d d f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f d d d d d d d d d f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f d d f f f d d d d f . 2 f f . . . . . . . . . . . . . 
. . . . . . . . . f f f f d d f 6 f d d d d f f f f . . . . . . . . . . . . . . 
. . . . . . . . . . 2 f f 1 d d d d d d d 1 f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . f f f f d d d d d f f f 1 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f 2 f f 1 f f f f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 1 f f f f f f f f f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f d f f 1 f f f 2 d f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f d d d d d d d f . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f d d f f f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f 2 f 2 f d d d d d f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 d f d 2 d d d d d d f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f d f 2 f d d d f d d f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f 2 f d d f d d f d d f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f 2 d f f d d f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f d d 2 2 d d d f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f d d d f f f f . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f d d d d d d f . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f d d d d d d f f f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f f f f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . f f f . f f . . f f f . f f f . . . . . . . . . . . . . . 
. . . . . . . . . . f f f . f f f . . . f f f . f f f . . . . . . . . . . . . . 
. . . . . . . . . . f f . f f f . . . . . f f . . f f . . . . . . . . . . . . . 
. . . . . . . . . . f f . 2 f . . . . . . f f . . f f . . . . . . . . . . . . . 
. . . . . . . . . . f 2 . f f . . . . . . f f . . f f . . . . . . . . . . . . . 
. . . . . . . . . . 2 f . f 2 . . . . . . f f . . 2 f . . . . . . . . . . . . . 
. . . . . . . . . . f f . 2 f . . . . . . f 2 . . f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . 2 f . . f 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
scene.cameraFollowSprite(MC)
tiles.setTilemap(tiles.createTilemap(
            hex`100008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000202020202020202020202020202020203030303030303030303030303030303`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tilePath5,myTiles.tile2,myTiles.tile3],
            TileScale.Sixteen
        ))
scene.setBackgroundColor(8)
scene.setBackgroundImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c c c c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c c c c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f . . . . . . . . . . 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 . 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . . . . . . . . . . . . . . . . d . . . . f b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . 
f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . 1 1 1 1 1 1 1 . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . . . . . . . . . . . . . . . 1 1 . . . . f b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c f . . . . . . . . . . 1 1 1 1 1 1 . . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . . . . . . . . . . . . . . 1 1 d . . . . f b b f f f f f f f f f b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c f . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . . . . . . . . . . . . . . d 1 . . . . . f b b f 9 9 9 9 9 9 9 f b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c f . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . . . . . . . . . . . . . . f f . . . . . f b b f 9 9 9 9 9 9 9 f b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
c f f f f f f f f f f f f f f f c c c f . . . . . . . . . . . 1 1 1 . . . . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . . . . . . . . . . . . . . f f . . . . . f b b f 9 9 9 9 9 9 9 f b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . . . . . . . . . . . . . . f f . . . . . f b b f 9 9 9 9 9 9 9 f b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . . . . . . . . . . . . . . f f . . . . . f b b f f f f f f f f f b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . f f f f f f f f f f f f f f f f f . . . f b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . 
c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . f c c c c c c c c c c c c c c c f . . . f b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . 
c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . f c c c c c c c c c c c c c c c f . . . f b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . 
c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c c f 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . f c c c c c c c c c c c c c c c f . . . f b b f f f f f f f f f b b f . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . 
c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c c f 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . f c c f f f f f f f f f f f c c f . . . f b b f 9 9 9 9 9 9 9 f b b f . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . 
c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c c f 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . f c c f 9 9 9 9 9 9 9 9 9 f c c f . . . f b b f 9 9 9 9 9 9 9 f b b f . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . 
c f f f f f f f f f f f f f f f c c c f 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . f c c f 9 9 9 9 9 9 9 9 9 f c c f . . . f b b f 9 9 9 9 9 9 9 f b b f 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c f 1 1 1 1 1 1 1 . . . . . . . d . . . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . f c c f 9 9 9 9 9 9 9 9 9 f c c f . . . f b b f 9 9 9 9 9 9 9 f b b f 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c f 1 1 1 1 . . . . . . . . . . 1 1 d . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . f c c f 9 9 9 9 9 9 9 9 9 f c c f . . . f b b f 9 9 9 9 9 9 9 f b b f 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c f . . . . . . . . . . . . . . . 1 1 1 . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . f c c f 9 9 9 9 9 9 9 9 9 f c c f . . . f b b f f f f f f f f f b b f 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c f . . . . . . . . . . . . . . . 1 1 1 . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . f c c f 9 9 9 9 9 9 9 9 9 f c c f . . . f b b b b b b b b b b b b b f 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
c f f f f f f f f f f f f f f f c c c f . . . . . . . . . . . . . . 1 d 1 1 . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . f c c f 9 9 9 9 9 9 9 9 9 f c c f . . . f b b b b b b b b b b b b b f 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c c f . . . . . . . . . . . . . . 1 1 1 . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . f c c f 9 9 9 9 9 9 9 9 9 f c c f . . . f b b b b b b b b b b b b b f 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c c f . . . . . . . . . . . . . . f f f . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . f c c f 9 9 9 9 9 9 9 9 9 f c c f . . . f b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c c f . . . . . . . . . . . . . . f f f . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . f c c f 9 9 9 9 9 9 9 9 9 f c c f . . . f b b f f f f f f f f f b b f . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . 
c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c c f . . . . . . . . . . . . . . f f f . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . f c c f 9 9 9 9 9 9 9 9 9 f c c f . . . f b b f 9 9 9 9 9 9 9 f b b f . . . . . . . . . . . . . . f c c c c c c c c c c c c c c c c c c c f . . . . . . . . . . . . . . . . 
c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c c f . . . . . . . . . . . . . . f f f . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . f c c f 9 9 9 9 9 9 9 9 9 f c c f . . . f b b f 9 9 9 9 9 9 9 f b b f . . . . . . . . . . . . . . f c c c c c c c c c c c c c c c c c c c f . . . . . . . . . . . . . . . . 
c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c c f . . . . . . . . . . . . . . f f f . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . f c c f f f f f f f f f f f c c f . . . f b b f 9 9 9 9 9 9 9 f b b f . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . 
c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c c f . . . . . . . . . . . . . . f f f . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f 1 1 1 1 . . f c c c c c c c c c c c c c c c f . . . f b b f 9 9 9 9 9 9 9 f b b f . . . . . . . . . . . . . . f c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f . . . . . . . . . . . . . . . . 
c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c c f . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f 9 9 f b b f 9 9 f b b f 1 1 1 1 1 . f c c c c c c c c c c c c c c c f . . . f b b f 9 9 9 9 9 9 9 f b b f . . . . . . . . . . . . . . f c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f . . . . . . . . . . . . . . . . 
c f f f f f f f f f f f f f f f c c c f . . . . . . . . . . . . . f b b b b b b b b b b b b b b b b b b b b f f 9 9 f b b f 9 9 f b b f 1 1 1 1 1 1 f c c c c c c c c c c c c c c c f . . . f b b f f f f f f f f f b b f . . . . . . . . . . . . . . f c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c f . . . . . . . . . . . . . f b b b b b b b b b b b b b b b b b b b b f f 9 9 f b b f 9 9 f b b f 1 1 1 1 1 1 f c c c c c c c c c c c c c c c f . . . f b b b b b b b b b b b b b f . . . . . . . . . . . . . . f c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c f . . . . . . . . . . . . . f b b b b b b b b b b b b b b b b b b b b f f 9 9 f b b f 9 9 f b b f 1 . 1 1 1 1 f c c c c c c c c c c c c c c c f . . . f b b b b b b b b b b b b b f . . . . . . . . . . . . . . f c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c f . . . . . . . 1 . . . . . f b b b f f f f f f f f f f f f f f b b b f f 9 9 f b b f 9 9 f b b f . . . . . . f c c f f f f f f f f f f f c c f . . . f b b b b b b b b b b b b b f . . . . . 1 . . . . . . . . f c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c f . . . . . . . 1 . . . . . f b b b f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f f 9 9 f b b f 9 9 f b b f . . . . . . f c c f 9 9 9 9 9 9 9 9 9 f c c f . . . f b b b b b b b b b b b b b f . . . . . 1 1 . . . . . . . f c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c f . . . . . 1 d 1 1 . . . . f b b b f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f f 9 9 f b b f 9 9 f b b f f f f f f f f f f f f f f f f f 9 9 9 f c c f . . . f b b f f f f f f f f f b b f . . . . . 1 1 1 d . . . . . f c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c f . . . . . 1 1 d . . . . . f b b b f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f f 9 9 f b b f 9 9 f b b f b b b b b b b b b b b b b b b f 9 9 9 f c c f . . . f b b f 9 9 9 9 9 9 9 f b b f . . . . . . 1 1 1 1 . . . . f c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c f . . . . . . 1 1 . . . . . f b b b f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f f 9 9 f b b f 9 9 f b b f b b b b b b b b b b b b b b b f 9 9 9 f c c f . . . f b b f 9 9 9 9 9 9 9 f b b f . . . . . . . . 1 1 . . . . f c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c f . . . . . . f f . . . . . f b b b f f f f f f f f f f f f f f b b b f f 9 9 f b b f 9 9 f b b f b b b b b b b b b b b b b b b f 9 9 9 f c c f . . . f b b f 9 9 9 9 9 9 9 f b b f . . . . . . . . d 1 . . . . f c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c f . . . . . . f f . . . . . f b b b b b b b b b b b b b b b b b b b b f f 9 9 f b b f 9 9 f b b f b b b b b b b b b b b b b b b f 9 9 9 f c c f . . . f b b f 9 9 9 9 9 9 9 f b b f . . . . . . . 1 1 1 . . . . f c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c f . . . . . . f f . . . . . f b b b b b b b b b b b b b b b b b b b b f f 9 9 f b b f 9 9 f b b f b b b f f f f f f f f f f b b f 9 9 9 f c c f . . . f b b f 9 9 9 9 9 9 9 f b b f . . . . . . . . 1 1 . . . . f c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c f . . . . . . f f . . . . . f b b b f f f f f f f f f f f f f f b b b f f 9 9 f b b f 9 9 f b b f b b b f 9 9 9 9 9 9 9 9 f b b f 9 9 9 f c c f . . . f b b f f f f f f f f f b b f . . . . . . . f f f . . . . f c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f f 9 9 f b b f 9 9 f b b f b b b f 9 9 9 9 9 9 9 9 f b b f 9 9 9 f c c f . . . f b b b b b b b b b b b b b f . . . . . . . f f f . . . . f c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c f c c c c c c c c c c c c c c c c c c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f f 9 9 f b b f 9 9 f b b f b b b f f f f f f f f f f b b f 9 9 9 f c c f . . . f b b b b b b b b b b b b b f . . . . . . . f f f . . . . f c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c f c c c c c c c c c c c c c c c c c c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f f 9 9 f b b f 9 9 f b b f b b b b b b b b b b b b b b b f 9 9 9 f c c f . . . f b b b b b b b b b b b b b f . . . . . . . f f f . . . . f c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c f c c c c c c c c c c c c c c c c c c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f f 9 9 f b b f 9 9 f b b f b b b f f f f f f f f f f b b f 9 9 9 f c c f . . . f b b b b b b b b b b b b b f . . . . . . . f f f . . . . f c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c f c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f b b b f f 9 9 f b b f 9 9 f b b f b b b f 9 9 9 9 9 9 9 9 f b b f f f f f c c f . . . f b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c f c c c c c c c c c c c c c c c c c c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f f 9 9 f b b f 9 9 f b b f b b b f 9 9 9 9 9 9 9 9 f b b f c c c c c c f . . . f b b f 9 9 9 9 9 f c c c c c c c c c c c c c c c c c c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c f c c c f f f f f f f f f f f f f f c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f f 9 9 f b b f 9 9 f b b f b b b f f f f f f f f f f b b f c c c c c c f . . . f b b f 9 9 9 9 9 f c c c c c c c c c c c c c c c c c c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c f c c c f 9 9 9 9 9 9 9 9 9 9 9 9 f c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f f f f f f f f f f f f f f f f f f f f f f f f f f b b b f c c c c c c f . . . f b b f 9 9 9 9 9 f c c c c c c c c c c c c c c c c c c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c f c c c f 9 9 9 9 9 9 9 9 9 9 9 9 f c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f c c c c c c f . . . f b b f 9 9 9 9 9 f c c c c c c c c c c c c c c c c c c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c f c c c f 9 9 9 9 9 9 9 9 9 9 9 9 f c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f c c c c c c f . . . f b b f 9 9 9 9 9 f c c c c c f f f f f f f f f f f f f c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c f c c c f 9 9 9 9 9 9 9 9 9 9 9 9 f c c c c f f f f f f f f f f f f f f f b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f c c c c c c f . . . f b b f f f f f f f c c c c c f 9 9 9 9 9 9 9 9 9 9 9 f c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c f c c c f f f f f f f f f f f f f f c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f c c c c c c f . . . f b b b b b b b b f c c c c c f 9 9 9 9 9 9 9 9 9 9 9 f c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f 1 1 1 1 1 1 1 1 . . . . . . . . 
c c c c c c c c c c c c c c f c c c c c c c c c c c c c c c c c c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f c c c c c c f . . . f b b b b b b b b f c c c c c f 9 9 9 9 9 9 9 9 9 9 9 f c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f 1 1 1 1 1 1 1 1 1 . . . . . . . 
c c c c c c c c c c c c c c f c c c c c c c c c c c c c c c c c c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f c c c c f f f f f f f f f f f f f f f c c c c c f b b b f c c c c c c f . . . f b b b b b b b b f c c c c c f 9 9 9 9 9 9 9 9 9 9 9 f c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f 1 1 1 1 1 1 1 1 1 . . . . . . . 
c c c c c c c c c c c c c c f c c c c c c c c c c c c c c c c c c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f c c c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c c c c f b b b f c c c c c c f . . . f b b b b b b b b f c c c c c f 9 9 9 9 9 9 9 9 9 9 9 f c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f 1 1 1 1 1 1 1 1 1 1 1 1 . . . . 
c c c c c c c c c c c c c c f c c c f f f f f f f f f f f f f f c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f c c c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c c c c f b b b f c c c c c c f . . . f b b b b b b b b f c c c c c f f f f f f f f f f f f f c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f 1 1 1 1 1 1 1 1 1 1 1 1 . . . . 
c c c c c c c c c c c c c c f c c c f 9 9 9 9 9 9 9 9 9 9 9 9 f c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f c c c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c c c c f b b b f c c c c c c f . . . f b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f c c f 1 1 1 1 1 1 1 1 1 1 1 1 . . . . 
c c c c c c c c c c c c c c f c c c f 9 9 9 9 9 9 9 9 9 9 9 9 f c c c c f f f f f f f f f f f f f f f b b b f c c c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c c c c f b b b f c c c c c c f . . . f b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c f c c c c c c c c c c c c c c c c c f 1 1 1 1 1 . . . 1 1 1 1 . . . . 
c c c c c c c c c c c c c c f c c c f 9 9 9 9 9 9 9 9 9 9 9 9 f c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f c c c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c c c c f b b b f c c c c c c f . . . f b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c f c c c c c c c c c c c c c c c c c f . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c f c c c f 9 9 9 9 9 9 9 9 9 9 9 9 f c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f c c c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c c c c f b b b f c c c c c c f . . . f b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c f c c c c c c c c c c c c c c c c c f . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c f c c c f f f f f f f f f f f f f f c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f c c c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c c c c f b b b f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c f c c c c c c c c c c c f f f f f f f f f f f f f f f f f . . . . . . 
f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f c c c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c c c c f b b b f b b b b b b f f f f f f f f f b b b b b b b f c c c c c c c c c c c c c c c c c c f c c c c c c c c c c c f b b b b b b b b b b b b b b b f . . . . . . 
b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f c c c c f f f f f f f f f f f f f f f c c c c c f b b b f b b b b b f 1 1 1 f f 1 1 1 1 f b b b b b b f c c c c c c c c c c c c c c c c c c f c c c c c c c c c c c f b b b b b b b b b b b b b b b f . . . . . . 
b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b b b f 1 1 1 1 1 f 1 1 1 1 1 f b b b b b f c c c c c c c c c c c c c c c c c c f c c c c c c c c c c c f b b b b b b b b b b b b b b b f . . . . . . 
b b b b b b b b b b b b b b f c c c f f f f f f f f f f f f f f c c c c f f f f f f f f f f f f f f f b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b b f 1 f f 1 1 f f f 1 1 f 1 1 f b b b b f c c f f f f f f f f f f f f f c c c f c c c c c c c c c c c f b b f f f f f f f f f f f f b f . . . . . . 
b b b b b b b b b b b b b b f c c c f 9 9 9 9 9 9 9 9 9 9 9 9 f c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b f 1 1 f f 1 1 1 5 1 1 1 1 f 1 1 f b b b f c c f 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f c c f b b f 9 9 9 9 9 9 9 9 9 9 f b f . . . . . . 
b b b b b b b b b b b b b b f c c c f 9 9 9 9 9 9 9 9 9 9 9 9 f c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b f 1 1 1 f 1 1 1 5 1 1 1 f 1 1 1 f b b b f c c f 9 9 9 9 9 9 9 f b b b b b b b f b b b b b b b b f c c f b b f 9 9 9 9 9 9 9 9 9 9 f b f . . . . . . 
b f f f f f f f f f f b b b f c c c f 9 9 9 9 9 9 9 9 9 9 9 9 f c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b f 1 1 1 1 1 1 1 5 1 1 1 1 1 1 1 f b b b f c c f 9 9 9 9 9 9 9 f b b b b b b f 9 f b b b b b b b f c c f b b f 9 9 9 9 9 9 9 9 9 9 f b f . . . . . . 
b f 9 9 9 9 9 9 9 9 f b b b f c c c f 9 9 9 9 9 9 9 9 9 9 9 9 f c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f c c c c f f f f f f f f f f f f f f f c c c c c f b b b f b b f 1 1 1 1 1 1 f f f 1 1 1 1 f 1 f b b b f c c f 9 9 9 9 9 9 9 f b b b b b b f 9 f f b b b b b b f c c f b b f 9 9 9 9 9 9 9 9 9 9 f b f . . . . . . 
b f 9 9 9 9 9 9 9 9 f b b b f c c c f f f f f f f f f f f f f f c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f c c c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c c c c f b b b f b b f 1 f f 1 1 1 f f f 1 1 1 f 1 1 f b b b f c c f 9 9 9 9 9 9 9 f b b b b b b f 9 9 f b b b b b b f c c f b b f 9 9 9 9 9 9 9 9 9 9 f b f . . . . . . 
b f 9 9 9 9 9 9 9 9 f b b b f c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f b b b f c c c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c c c c f b b b f b b f 1 f f 1 1 1 f f f 1 1 1 1 f 1 f b b b f c c f 9 9 9 9 9 9 9 f b b b b b f 9 9 9 9 f b b b b b f c c f b b f 9 9 9 9 9 9 9 9 9 9 f b f . . . . . . 
b f f f f f f f f f f b b b f c c c c c c c c c c c c c c c c c c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f c c c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c c c c f b b b f b b f 1 f f 1 1 1 1 1 1 5 1 1 1 1 1 f b b b f c c f f f f f f f f f b b b b b f 9 9 9 9 f b b b b b f c c f b b f 9 9 9 9 9 9 9 9 9 9 f b f . . . . . . 
b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f c c c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c c c c f b b b f b b f 1 1 1 1 1 1 1 1 1 1 5 1 1 1 1 f b b b f c c c c c c c c c c f b b b b f 9 9 9 9 9 9 f b b b b f c c f b b f 9 9 9 9 9 9 9 9 9 9 f b f . . . . . . 
b b b b b b b b b b b b b b f c c c f f f f f f f f f f f f f f c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f c c c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c c c c f b b b f b b f 1 1 f f 1 1 1 1 1 1 1 5 1 1 1 f b b b f c c c c c c c c c c f b b b b f 9 9 9 9 9 9 f b b b b f c c f b b f f f f f f f f f f f f b f . . . . . . 
b b b b b b b b b b b b b b f c c c f 9 9 9 9 9 9 9 9 9 9 9 9 f c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f c c c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c c c c f b b b f b b b f 1 1 f 1 1 1 f 1 1 1 f 1 1 f b b b b f c c c c c c c c c c f b b b b f 9 9 9 9 9 9 f b b b b f c c f b b b b b b b b b b b b b b b f . . . . . . 
b b b b b b b b b b b b b b f c c c f 9 9 9 9 9 9 9 9 9 9 9 9 f c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f c c c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c c c c f b b b f b b b b f f 1 1 1 f 1 1 1 1 f f f b b b b b f c c c c c c c c c c f b b b f 9 9 9 9 9 9 9 9 f b b b f c c f b b b b b b b b b b b b b b b f . . . . . . 
b b b b b b b b b b b b b b f c c c f 9 9 9 9 9 9 9 9 9 9 9 9 f c c c c f f f f f f f f f f f f f f f b b b f c c c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c c c c f b b b f b b b b b f 1 1 1 1 f f 1 1 1 f b b b b b b f c c c c c c c c c c f b b b f 9 9 9 9 9 9 9 9 f b b b f c c f b b b b b b f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b f c c c f 9 9 9 9 9 9 9 9 9 9 9 9 f c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f c c c c f f f f f f f f f f f f f f f c c c c c f b b b f b b b b b b f f f f f f f f f b b b b b b b f c c c c c c c c c c f b b f 9 9 9 9 9 9 9 9 9 9 f b b f c c f b b b b b b f c c c c c c c c c c c c c c c 
b f f f f f f f f f f b b b f c c c f f f f f f f f f f f f f f c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b b b b b b b b b b b b b b b b b b b b b f c c c c c c c c c c f b b f 9 9 9 9 9 9 9 9 9 9 f b b f c c f b b b b b b f c c c c c c c c c c c c c c c 
b f 9 9 9 9 9 9 9 9 f b b b f c c c c c c c c c c c c c c c c c c c c c f f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b b b b b b b b b b b b b b b b b b b b b f c c c c c c c c c c f b b f f f f f f f f f f f f b b f c c f b b b b b b f c c c c c c c c c c c c c c c 
b f 9 9 9 9 9 9 9 9 f b b b f c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b b b b b b b b b b b b b b b b b b b b b f c c c c c c c c c c f b b b b b b b b b b b b b b b b f c c f b b b b b b f c c f f f f f f f f f f f f f 
b f 9 9 9 9 9 9 9 9 f b b b f c c c c c c c c c c c c c c c c c c c c c f b b b b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b b b b b b b b b b b b b b b b b b b b b f c c c c c c c c c c f b b b b b b b b b b b b b b b b f c c f b b b b b b f c c f 9 9 9 9 9 9 9 9 9 9 9 9 
b f f f f f f f f f f b b b f c c c c c c c c c c c c c c c c c c c c c f b b b b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b b b b b b b b b b b b b b b b b b b b b f c c c c c c c c c c f b b b b b b b b b b b b b b b b f c c f b b b b b b f c c f 9 9 9 9 9 9 9 9 9 9 9 9 
b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c f b b b b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b b b b b b b b b b b b b b b b b b b b b f c c c c c c c c c c f b b b b b b b b b b b b b b b b f f f f f f f f f f f c c f 9 9 9 9 9 9 9 9 9 9 9 9 
b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c f b b b b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b b b b b b b b b b b b b b b b b b b b b f c c c c c c c c c c f b b b f f f f f f f f f f b b b f b b b b b b b b b f c c f 9 9 9 9 9 9 9 9 9 9 9 9 
b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c f b b b b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b b b b b b b b b b b b b b b b b b b b b f c c c c c c c c c c f b b b f 9 9 9 9 9 9 9 9 f b b b f b b b b b b b b b f c c f 9 9 9 9 9 9 9 9 9 9 9 9 
b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c f b b b b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b b b b b b b b b b b b b b b b b b b b b f c c c c c c c c c c f b b b f 9 9 9 9 9 9 9 9 f b b b f b b b b b b b b b f c c f 9 9 9 9 9 9 9 9 9 9 9 9 
b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c f b b b b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b b b b b b b b b b b b b b b b b b b b b f c c c c c c c c c c f b b b f 9 9 9 9 9 9 9 9 f b b b f b b b b b b b b b f c c f 9 9 9 9 9 9 9 9 9 9 9 9 
b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c f b b b b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b b b b b b b b b b b b b b b b b b b b b f c c c c c c c c c c f b b b f f f f f f f f f f b b b f b f f f f f f f f f c c f 9 9 9 9 9 9 9 9 9 9 9 9 
b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c f b b b b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b b b b b b b b b b b b b b b b b b b b b f c c c c c c c c c c f b b b b b b b b b b b b b b b b f b f 9 9 9 9 9 9 9 f c c f 9 9 9 9 9 9 9 9 9 9 9 9 
b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c f b b b b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b b b b b b b b b b b b b b b b b b b b b f c c c c c c c c c c f b b b b b b b b b b b b b b b b f b f 9 9 9 9 9 9 9 f c c f 9 9 9 9 9 9 9 9 9 9 9 9 
b f f f f f f f f f f b b b f c c c c c c c c c c c c c c c c c c c c c f b b b b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b b b b b b b b b b b b b b b b b b b b b f c c c c c c c c c c f b b b b b b b b b b b b b b b b f b f 9 9 9 9 9 9 9 f c c f 9 9 9 9 9 9 9 9 9 9 9 9 
b f 9 9 9 9 9 9 9 9 f b b b f c c c c c c c c c c c c c c c c c c c c c f b b b b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b b b b b b b b b b b b b b b b b b b b b f c c c c c c c c c c f b b b f f f f f f f f f f b b b f b f 9 9 9 9 9 9 9 f c c f 9 9 9 9 9 9 9 9 9 9 9 9 
b f 9 9 9 9 9 9 9 9 f b b b f c c c c c c c c c c c c c c c c c c c c c f b b b b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b b b b b b b b b b b b b b b b b b b b b f c c c c c c c c c c f b b b f 9 9 9 9 9 9 9 9 f b b b f b f f f f f f f f f c c f 9 9 9 9 9 9 9 9 9 9 9 9 
b f 9 9 9 9 9 9 9 9 f b b b f c c c c c c c c c c c c c c c c c c c c c f b b b b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b b b b b b b b b b b b b b b b b b b b b f c c c c c c c c c c f b b b f 9 9 9 9 9 9 9 9 f b b b f b b b b b b b b b f c c f f f f f f f f f f f f f 
b f f f f f f f f f f b b b f c c c c c c c c c c c c c c c c c c c c c f b b b b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b b b b b b b b b b b b b b b b b b b b b f c c c c c c c c c c f b b b f 9 9 9 9 9 9 9 9 f b b b f b b b b b b b b b f c c c c c c c c c c c c c c c 
b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c f b b b b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b b b b b b b b b b b b b b b b b b b b b f c c c c c c c c c c f b b b f f f f f f f f f f b b b f b b b b b b b b b f c c c c c c c c c c c c c c c 
b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c f b b b b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b b b b b b b b b b b b b b b b b b b b b f c c c c c c c c c c f b b b b b b b b b b b b b b b b f b b b b b b b b b f c c c c c c c c c c c c c c c 
b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c f b b b b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b b b b b b b b b b b b b b b b b b b b b f c c c c c c c c c c f b b b b b b b b b b b b b b b b f b b b b b b b b b f c c c c c c c c c c c c c c c 
b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c f b b b b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b b b b b b b b b b b b b b b b b b b b b f c c c c c c c c c c f b b b b b b b b b b b b b b b b f b b b b b b b b b f c c f f f f f f f f f f f f f 
b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c f b b b b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b b b b b b b b b b b b b b b b b b b b b f c c c c c c c c c c f b b b b b b b b b b b b b b b b f b f f f f f f f f f c c f 9 9 9 9 9 9 9 9 9 9 9 9 
b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c f b b b b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b b b b b b b b b b b b b b b b b b b b b f c c c c c c c c c c f b b b b b b b b b b b b b b b b f b f 9 9 9 9 9 9 9 f c c f 9 9 9 9 9 9 9 9 9 9 9 9 
b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c f b b b b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b b b b b b b b b b b b b b b b b b b b b f c c c c c c c c c c f b b b b b b b b b b b b b b b b f b f 9 9 9 9 9 9 9 f c c f 9 9 9 9 9 9 9 9 9 9 9 9 
b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c f b b b b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b b b b b b b b b b b b b b b b b b b b b f c c c c c c c c c c f b b b b b b b b b b b b b b b b f b f 9 9 9 9 9 9 9 f c c f 9 9 9 9 9 9 9 9 9 9 9 9 
b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c f b b b b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b b b b b b b b b b b b b b b b b b b b b f c c c c c c c c c c f b b b b b b b b b b b b b b b b f b f f f f f f f f f c c f 9 9 9 9 9 9 9 9 9 9 9 9 
b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c f b b b b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b b b b b b b b b b b b b b b b b b b b b f c c c c c c c c c c f b b b b b b b b b b b b b b b b f b b b b b b b b b f c c f 9 9 9 9 9 9 9 9 9 9 9 9 
b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c f b b b b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b b b b b b b b b b b b b b b b b b b b b f c c c c c c c c c c f b b b b b b b b b b b b b b b b f b b b b b b b b b f c c f 9 9 9 9 9 9 9 9 9 9 9 9 
b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c f b b b b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b b b b b b b b b b b b b b b b b b b b b f c c c c c c c c c c f b b b b b b b b b b b b b b b b f b b b b b b b b b f c c f 9 9 9 9 9 9 9 9 9 9 9 9 
b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c f b b b b b b b b b b b b b b b b b f c c c c c c c c c c c c c c c c c c c c c c c c f b b b f b b b b b b b b b b b b b b b b b b b b b b f c c c c c c c c c c f b b b b b b b b b b b b b b b b f b b b b b b b b b f c c f 9 9 9 9 9 9 9 9 9 9 9 9 
`)
MC.setPosition(29, 112)
Boss.setPosition(149, 111)
MC.setVelocity(0, 20)
Boss.setVelocity(0, 20)
info.setScore(50)
game.onUpdateInterval(500, function () {
    if (Math.randomRange(0, 15) == 6) {
        projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 3 3 3 . . . . . . . 
. . . . . . 3 3 3 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Boss, -50, 0)
    }
    if (Math.randomRange(0, 15) == 3) {
        projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 3 3 3 . . . . . . . 
. . . . . . 3 3 3 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Boss, -50, 0)
    }
})
game.onUpdateInterval(500, function () {
    if (info.score() < 0) {
        game.over(true)
    }
})
