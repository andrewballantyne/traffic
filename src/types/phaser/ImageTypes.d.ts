import { SpriteSheetData } from '../core/ImageTypes';

export type PhaserSpriteSheetData = SpriteSheetData & {
  cellMax:number;
  cellMargin?:number;
  cellSpacing?:number;
};
