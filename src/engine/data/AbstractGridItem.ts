import { Point } from '../../types/core/MathDataTypes';

abstract class AbstractGridItem {
  protected offset:Point;

  constructor(gridOffset:Point) {
    this.offset = gridOffset;
  }

  public getOffset():Point {
    return this.offset;
  }
}

export default AbstractGridItem;
