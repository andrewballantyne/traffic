// tslint:disable-next-line
/// <reference path="../typings/include.d.ts" />

import GridEngine from './engine/GridEngine';
import TileType from './enums/TileType';
import { GridColDefinition, GridStructureDefinition } from './types/core/GridTypes';

class Main {
  public start():void {
    const BASE_LEVEL:number = 0;

    const col0:GridColDefinition = [
      { topType: TileType.WATER_GRASS_S, zHeight: BASE_LEVEL },
      { topType: TileType.WATER_GRASS_E_S, zHeight: BASE_LEVEL },
      { topType: TileType.WATER_GRASS_E_S, zHeight: BASE_LEVEL },
      { topType: TileType.WATER_GRASS_E_S, zHeight: BASE_LEVEL },
      { topType: TileType.WATER_GRASS_E_S, zHeight: BASE_LEVEL },
      { topType: TileType.WATER_GRASS_E_S, zHeight: BASE_LEVEL },
      { topType: TileType.WATER_GRASS_E_S, zHeight: BASE_LEVEL },
      { topType: TileType.WATER_GRASS_E, zHeight: BASE_LEVEL },
    ];
    const col1:GridColDefinition = [
      { topType: TileType.WATER_GRASS_S_W, zHeight: BASE_LEVEL },
      { topType: TileType.GRASS, zHeight: BASE_LEVEL },
      { topType: TileType.GRASS, zHeight: BASE_LEVEL },
      { topType: TileType.GRASS, zHeight: BASE_LEVEL },
      { topType: TileType.GRASS, zHeight: BASE_LEVEL },
      { topType: TileType.ROAD_GRASS_SE, zHeight: BASE_LEVEL },
      { topType: TileType.GRASS, zHeight: BASE_LEVEL },
      { topType: TileType.WATER_GRASS_N_E, zHeight: BASE_LEVEL },
    ];
    const col2:GridColDefinition = [
      { topType: TileType.WATER_GRASS_S_W, zHeight: BASE_LEVEL },
      { topType: TileType.GRASS, zHeight: BASE_LEVEL },
      { topType: TileType.ROAD_GRASS_SE_SW, zHeight: BASE_LEVEL },
      { topType: TileType.ROAD_GRASS_NE_SW, zHeight: BASE_LEVEL },
      { topType: TileType.ROAD_GRASS_NE_SW, zHeight: BASE_LEVEL },
      { topType: TileType.ROAD_GRASS_NW_NE_SE_SW, zHeight: BASE_LEVEL },
      { topType: TileType.ROAD_GRASS_NE, zHeight: BASE_LEVEL },
      { topType: TileType.WATER_GRASS_N_E, zHeight: BASE_LEVEL },
    ];
    const col3:GridColDefinition = [
      { topType: TileType.WATER_GRASS_S_W, zHeight: BASE_LEVEL },
      { topType: TileType.GRASS, zHeight: BASE_LEVEL },
      { topType: TileType.ROAD_GRASS_NW_SE, zHeight: BASE_LEVEL },
      { topType: TileType.GRASS, zHeight: BASE_LEVEL },
      { topType: TileType.GRASS, zHeight: BASE_LEVEL },
      { topType: TileType.ROAD_GRASS_NW_SE, zHeight: BASE_LEVEL },
      { topType: TileType.GRASS, zHeight: BASE_LEVEL },
      { topType: TileType.WATER_GRASS_N_E, zHeight: BASE_LEVEL },
    ];
    const col4:GridColDefinition = [
      { topType: TileType.WATER_GRASS_S_W, zHeight: BASE_LEVEL },
      { topType: TileType.GRASS, zHeight: BASE_LEVEL },
      { topType: TileType.ROAD_GRASS_NW_SE, zHeight: BASE_LEVEL },
      { topType: TileType.GRASS, zHeight: BASE_LEVEL },
      { topType: TileType.GRASS, zHeight: BASE_LEVEL },
      { topType: TileType.ROAD_GRASS_NW_SE, zHeight: BASE_LEVEL },
      { topType: TileType.GRASS, zHeight: BASE_LEVEL },
      { topType: TileType.WATER_GRASS_N_E, zHeight: BASE_LEVEL },
    ];
    const col5:GridColDefinition = [
      { topType: TileType.WATER_GRASS_S_W, zHeight: BASE_LEVEL },
      { topType: TileType.GRASS, zHeight: BASE_LEVEL },
      { topType: TileType.ROAD_GRASS_NW_SW, zHeight: BASE_LEVEL },
      { topType: TileType.ROAD_GRASS_NE_SW, zHeight: BASE_LEVEL },
      { topType: TileType.ROAD_GRASS_NE_SW, zHeight: BASE_LEVEL },
      { topType: TileType.ROAD_GRASS_NW_NE, zHeight: BASE_LEVEL },
      { topType: TileType.GRASS, zHeight: BASE_LEVEL },
      { topType: TileType.WATER_GRASS_N_E, zHeight: BASE_LEVEL },
    ];
    const col6:GridColDefinition = [
      { topType: TileType.WATER_GRASS_S_W, zHeight: BASE_LEVEL },
      { topType: TileType.GRASS, zHeight: BASE_LEVEL },
      { topType: TileType.GRASS, zHeight: BASE_LEVEL },
      { topType: TileType.GRASS, zHeight: BASE_LEVEL },
      { topType: TileType.GRASS, zHeight: BASE_LEVEL },
      { topType: TileType.GRASS, zHeight: BASE_LEVEL },
      { topType: TileType.GRASS, zHeight: BASE_LEVEL },
      { topType: TileType.WATER_GRASS_N_E, zHeight: BASE_LEVEL },
    ];
    const col7:GridColDefinition = [
      { topType: TileType.WATER_GRASS_W, zHeight: BASE_LEVEL },
      { topType: TileType.WATER_GRASS_N_W, zHeight: BASE_LEVEL },
      { topType: TileType.WATER_GRASS_N_W, zHeight: BASE_LEVEL },
      { topType: TileType.WATER_GRASS_N_W, zHeight: BASE_LEVEL },
      { topType: TileType.WATER_GRASS_N_W, zHeight: BASE_LEVEL },
      { topType: TileType.WATER_GRASS_N_W, zHeight: BASE_LEVEL },
      { topType: TileType.WATER_GRASS_N_W, zHeight: BASE_LEVEL },
      { topType: TileType.WATER_GRASS_N, zHeight: BASE_LEVEL },
    ];

    const gridLayout:GridStructureDefinition = [
      col0, col1, col2, col3, col4, col5, col6, col7,
    ];

    (new GridEngine(gridLayout)).start();
  }
}

(new Main()).start();
