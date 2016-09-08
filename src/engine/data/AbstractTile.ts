import { GridCell } from '../../types/core/GridTypes';
import { Point } from '../../types/core/MathDataTypes';
import AbstractGridItem from './AbstractGridItem';

abstract class AbstractTile extends AbstractGridItem {
  protected tileType:GridCell;

  constructor(gridOffset:Point, tileType:GridCell) {
    super(gridOffset);

    this.tileType = tileType;
  }

  public getTileType():GridCell {
    return this.tileType;
  }
}

export default AbstractTile;
