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
let MC = sprites.create(img`
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
controller.moveSprite(MC)
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
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . 
f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . 1 1 1 1 1 1 1 . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c f . . . . . . . . . . 1 1 1 1 1 1 . . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . . . . . . . . . . . . . . . . . . . . . f b b f f f f f f f f f b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c f . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . . . . . . . . . . . . . . . . . . . . . f b b f 9 9 9 9 9 9 9 f b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
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
c c c c c c c c c c c c c c c c c c c f 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . f c c f 9 9 9 9 9 9 9 9 9 f c c f . . . f b b f 9 9 9 9 9 9 9 f b b f 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c f 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . f c c f 9 9 9 9 9 9 9 9 9 f c c f . . . f b b f 9 9 9 9 9 9 9 f b b f 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . f c c f 9 9 9 9 9 9 9 9 9 f c c f . . . f b b f f f f f f f f f b b f 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . f c c f 9 9 9 9 9 9 9 9 9 f c c f . . . f b b b b b b b b b b b b b f 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
c f f f f f f f f f f f f f f f c c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . f c c f 9 9 9 9 9 9 9 9 9 f c c f . . . f b b b b b b b b b b b b b f 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f 9 9 f b b f 9 9 f b b f 9 9 f b b f . . . . . . f c c f 9 9 9 9 9 9 9 9 9 f c c f . . . f b b b b b b b b b b b b b f 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
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
c c c c c c c c c c c c c c c c c c c f . . . . . . . . . . . . . f b b b f f f f f f f f f f f f f f b b b f f 9 9 f b b f 9 9 f b b f . . . . . . f c c f f f f f f f f f f f c c f . . . f b b b b b b b b b b b b b f . . . . . . . . . . . . . . f c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c f . . . . . . . . . . . . . f b b b f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f f 9 9 f b b f 9 9 f b b f . . . . . . f c c f 9 9 9 9 9 9 9 9 9 f c c f . . . f b b b b b b b b b b b b b f . . . . . . . . . . . . . . f c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c f . . . . . . . . . . . . . f b b b f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f f 9 9 f b b f 9 9 f b b f f f f f f f f f f f f f f f f f 9 9 9 f c c f . . . f b b f f f f f f f f f b b f . . . . . . . . . . . . . . f c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c f . . . . . . . . . . . . . f b b b f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f f 9 9 f b b f 9 9 f b b f b b b b b b b b b b b b b b b f 9 9 9 f c c f . . . f b b f 9 9 9 9 9 9 9 f b b f . . . . . . . . . . . . . . f c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c f . . . . . . . . . . . . . f b b b f 9 9 9 9 9 9 9 9 9 9 9 9 f b b b f f 9 9 f b b f 9 9 f b b f b b b b b b b b b b b b b b b f 9 9 9 f c c f . . . f b b f 9 9 9 9 9 9 9 f b b f . . . . . . . . . . . . . . f c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c f . . . . . . f f . . . . . f b b b f f f f f f f f f f f f f f b b b f f 9 9 f b b f 9 9 f b b f b b b b b b b b b b b b b b b f 9 9 9 f c c f . . . f b b f 9 9 9 9 9 9 9 f b b f . . . . . . . . . . . . . . f c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c f . . . . . . f f . . . . . f b b b b b b b b b b b b b b b b b b b b f f 9 9 f b b f 9 9 f b b f b b b b b b b b b b b b b b b f 9 9 9 f c c f . . . f b b f 9 9 9 9 9 9 9 f b b f . . . . . . . . . . . . . . f c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c c c c c c c c f . . . . . . f f . . . . . f b b b b b b b b b b b b b b b b b b b b f f 9 9 f b b f 9 9 f b b f b b b f f f f f f f f f f b b f 9 9 9 f c c f . . . f b b f 9 9 9 9 9 9 9 f b b f . . . . . . . . . . . . . . f c c f 9 9 9 9 9 9 9 9 9 9 9 9 9 f c c f . . . . . . . . . . . . . . . . 
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
