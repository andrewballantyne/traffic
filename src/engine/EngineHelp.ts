import { GridCell, GridStructure } from '../types/core/GridTypes';
import { Point, Size } from '../types/core/MathDataTypes';
import { RenderImageData } from '../types/core/RenderData';

export default class EngineHelp {
  public static BASE_LEVEL:number = 0;
  public static CHARACTER_IMAGE_ID:string = 'character';
  public static TILE_GRASS_IMAGE_ID:string = 'grass';
  public static TILE_DIRT_IMAGE_ID:string = 'dirt';
  public static FACE_CLIFF_IMAGE_ID:string = 'cliff';

  public static tileDimensions:Size = { height: 64, width: 64 };
  public static zHeightOffset:number = 20;
  public static gridPosition:Point = { x: -1 /* updated when init is called */, y: 100 };
  public static gridSize:Size = { height: 5, width: 5 };
  public static imageData:RenderImageData = null;

  public static init(gridLayout:GridStructure<GridCell>):void {
    EngineHelp.gridLayout = gridLayout;
    EngineHelp.gridPosition.x = EngineHelp.tileDimensions.width * gridLayout.length;

    EngineHelp.imageData = {
      atlasData: [
        {
          id: 'sampleSet',
          image: '../assets/sampleSet.png',
          json: '../assets/sampleSet.json',
        },
      ],
    };
  }

  public static hasImages():boolean {
    return (
      EngineHelp.imageData !== null && (
        EngineHelp.imageData.spriteSheetData && EngineHelp.imageData.spriteSheetData.length > 0 ||
        EngineHelp.imageData.staticImageData && EngineHelp.imageData.staticImageData.length > 0 ||
        EngineHelp.imageData.atlasData && EngineHelp.imageData.atlasData.length > 0
      )
    );
  }

  public static getCanvasPoint(gridOffset:Point):Point {
    const col:number = gridOffset.x * EngineHelp.tileDimensions.width;
    const row:number = gridOffset.y * EngineHelp.tileDimensions.height;
    const zOffset:number = EngineHelp.getHeightOffset(gridOffset);
    let x:number = col - row;
    let y:number = (col + row) / 2 - zOffset;
    return { x, y };
  }

  private static gridLayout:GridStructure<GridCell> = [];

  private static getHeightOffset(gridOffset:Point):number {
    if (EngineHelp.gridLayout.length === 0 ||
        EngineHelp.gridLayout[gridOffset.x].length === 0 ||
        EngineHelp.gridLayout[gridOffset.x][gridOffset.y] === undefined) {
      return EngineHelp.BASE_LEVEL;
    }

    return EngineHelp.zHeightOffset * EngineHelp.gridLayout[gridOffset.x][gridOffset.y].zHeight;
  }
}
