import {
  GridCell, GridColDefinition, GridStructure, GridStructureDefinition,
} from '../../types/core/GridTypes';
import { Point } from '../../types/core/MathDataTypes';
import Tile from './AbstractTile';

abstract class AbstractGrid {
  protected gridDefinition:GridStructureDefinition;
  protected gridTiles:GridStructure<Tile>;

  constructor(gridStructure:GridStructureDefinition) {
    this.gridDefinition = gridStructure;
    this.gridTiles = [];
  }

  public create():void {
    const cols:GridStructureDefinition = this.gridDefinition;
    for (let c:number = 0; c < cols.length; c++) {
      const rows:GridColDefinition = cols[c];
      for (let r:number = 0; r < rows.length; r++) {
        const type:GridCell = rows[r];

        let tile:Tile = this.getTile({ x: c, y: r }, type);

        if (!this.gridTiles[r]) {
          this.gridTiles[r] = [];
        }
        this.gridTiles[r][c] = tile;
      }
    }
  }

  public getLayout():GridStructure<Tile> {
    return this.gridTiles;
  }

  protected abstract getTile(gridOffset:Point, cellType:GridCell):Tile;
}

export default AbstractGrid;
