import { AtlasOfImageJSON, ImageData } from '../../../types/core/ImageTypes';
import { PhaserSpriteSheetData } from '../../../types/phaser/ImageTypes';
import AbstractGrid from '../../data/AbstractGrid';
import EngineHelp from '../../EngineHelp';
import Renderer from '../AbstractRenderer';
import PhaserDisplayObject from './PhaserDisplayObject';
import PhaserGrid from './PhaserGrid';

type PhaserConfig = {
  preload?:() => void;
  create?:() => void;
  render?:() => void;
  update?:() => void;
};

class PhaserRenderer extends Renderer {
  private game:Phaser.Game;
  private boardGroup:Phaser.Group;

  public addDataElement(dataElement:any):void {
    let object:PhaserDisplayObject;
    if (dataElement instanceof AbstractGrid) {
      object = new PhaserGrid(this.game, dataElement);
    } else {
      console.error('Unhandled dataElement type.');
      return;
    }
    object.create();
    object.addToGroup(this.boardGroup);
  }

  protected setup():void {
    this.boardGroup = null;

    const config:PhaserConfig = {
      create: this.onCreate.bind(this),
      preload: this.onPreload.bind(this),
    };
    this.game = new Phaser.Game(1150, 600, Phaser.AUTO, this.target, config, true);
  }

  private onPreload():void {
    if (!EngineHelp.hasImages()) {
      return;
    }

    const ssList:PhaserSpriteSheetData[] =
      <PhaserSpriteSheetData[]> EngineHelp.imageData.spriteSheetData;
    if (ssList) {
      ssList.forEach((ss:PhaserSpriteSheetData) => {
        this.game.load.spritesheet(
          ss.id,
          ss.url,
          ss.cellWidth,
          ss.cellHeight,
          ss.cellMax,
          ss.cellMargin,
          ss.cellSpacing
        );
      });
    }

    const imageList:ImageData[] = EngineHelp.imageData.staticImageData;
    if (imageList) {
      imageList.forEach((ss:ImageData) => {
        this.game.load.image(ss.id, ss.url);
      });
    }

    const atlasList:AtlasOfImageJSON[] = EngineHelp.imageData.atlasData;
    if (atlasList) {
      atlasList.forEach((data:AtlasOfImageJSON) => {
        this.game.load.atlas(data.id, data.image, data.json);
      });
    }
  }

  private onCreate():void {
    this.boardGroup = this.game.add.group();
    this.boardGroup.x = EngineHelp.gridPosition.x;
    this.boardGroup.y = EngineHelp.gridPosition.y;

    this.ready();
  }
}

export default PhaserRenderer;
