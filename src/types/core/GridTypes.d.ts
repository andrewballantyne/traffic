/* Types related to the grid and aspects of it */

import TileType from '../../enums/TileType';

/**
 * A standard col.
 * Isometrically, that would be NW being N.
 */
export type GridCol<T> = Array<T>;
export type GridColDefinition = GridCol<GridCell>; // practical definition

/**
 * A standard grid structure.
 * GridStructure[x][y]
 */
export type GridStructure<T> = Array<GridCol<T>>;
export type GridStructureDefinition = GridStructure<GridCell>; // practical definition

/**
 * A single tile cell, usually within a column or grid.
 */
export type GridCell = {
  topType:TileType;
  zHeight:number;
};
