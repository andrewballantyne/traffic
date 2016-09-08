import { GridCell } from '../../types/core/GridTypes';
import { Point } from '../../types/core/MathDataTypes';
import AbstractGrid from './AbstractGrid';
import Tile from './AbstractTile';
import SquareIsoSpriteTile from './SquareIsoSpriteTile';

class SquareIsoGrid extends AbstractGrid {
  protected getTile(gridOffset:Point, cellType:GridCell):Tile {
    return new SquareIsoSpriteTile(gridOffset, cellType);
  }
}

export default SquareIsoGrid;
