import { GridStructure } from '../../../types/core/GridTypes';
import AbstractGrid from '../../data/AbstractGrid';
import AbstractTile from '../../data/AbstractTile';
import PhaserDisplayObject from './PhaserDisplayObject';
import PhaserSpriteTile from './PhaserSpriteTile';

export default class PhaserGrid extends PhaserDisplayObject {
  protected phaserObj:Phaser.Group;

  private grid:AbstractGrid;

  constructor(game:Phaser.Game, grid:AbstractGrid) {
    super(game);

    this.grid = grid;
  }

  public create():void {
    const gridGroup:Phaser.Group = this.game.add.group();
    this.phaserObj = gridGroup;

    const gridTiles:GridStructure<AbstractTile> = this.grid.getLayout();
    for (let r:number = 0; r < gridTiles.length; r++) {
      const cols:AbstractTile[] = gridTiles[r];
      for (let c:number = 0; c < cols.length; c++) {
        const tile:AbstractTile = cols[c];
        const phaserTile:PhaserSpriteTile = new PhaserSpriteTile(this.game, tile);
        phaserTile.create();
        phaserTile.addToGroup(gridGroup);
      }
    }
  }
}
