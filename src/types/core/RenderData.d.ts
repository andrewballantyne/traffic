import { AtlasOfImageJSON, ImageData, SpriteSheetData } from './ImageTypes';

export type RenderImageData = {
  atlasData?:AtlasOfImageJSON[];
  spriteSheetData?:SpriteSheetData[];
  staticImageData?:ImageData[];
};

export type RenderListeners = {
  onReady?:() => void;
};

export type RenderTarget = string|HTMLElement;
