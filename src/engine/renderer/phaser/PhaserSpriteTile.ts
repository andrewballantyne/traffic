import TileType from '../../../enums/TileType';
import { GridCell } from '../../../types/core/GridTypes';
import { Point } from '../../../types/core/MathDataTypes';
import AbstractTile from '../../data/AbstractTile';
import EngineHelp from '../../EngineHelp';
import PhaserDisplayObject from './PhaserDisplayObject';

class PhaserSpriteTile extends PhaserDisplayObject {
  protected phaserObj:Phaser.Group;

  private tile:AbstractTile;

  constructor(game:Phaser.Game, tile:AbstractTile) {
    super(game);

    this.tile = tile;
  }

  public create():void {
    this.phaserObj = this.game.add.group();

    const offset:Point = this.tile.getOffset();
    const tileData:GridCell = this.tile.getTileType();

    const position:Point = EngineHelp.getCanvasPoint(offset);

    // Graphical tile
    let type:string = TileType[tileData.topType];
    this.game.add.sprite(
      position.x,
      position.y,
      EngineHelp.ATLAS_TILES,
      type,
      this.phaserObj
    )
      .anchor.setTo(0, 1);
  }
}

export default PhaserSpriteTile;
