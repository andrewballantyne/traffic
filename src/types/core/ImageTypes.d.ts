export type ImageData = {
  id:string;
  url:string;
};

export type SpriteSheetData = ImageData & {
  cellWidth:number;
  cellHeight:number;
};

export type AtlasOfImageJSON = {
  id:string;
  image?:string; // maps to <id>.png if omitted
  json?:string; // maps to <id>.json if omitted
};
