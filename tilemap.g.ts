// Code généré automatiquement. Ne pas modifier.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "niveau1":
            case "niveau1":return tiles.createTilemap(hex`0f000f0000000000000000000000000000000000020001000300040005000600070000000000000000000000000000000000080009000a0018000b000c000d0000000000000000000000000000000000130014001200110010000f000e00000000000000000000000000000000001600150017001900070000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.chestClosed,sprites.dungeon.doorLockedNorth,sprites.dungeon.floorDarkDiamond,sprites.builtin.forestTiles0,sprites.swamp.swampTile13,sprites.builtin.brick,sprites.vehicle.roadHorizontal,sprites.dungeon.hazardLava0,sprites.dungeon.hazardWater,sprites.dungeon.hazardHole,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorLight0,sprites.dungeon.doorOpenNorth,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenSwitchUp,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.stairLadder,sprites.dungeon.stairNorth,sprites.dungeon.stairLarge,sprites.castle.tileDarkGrass2,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Code généré automatiquement. Ne pas modifier.
