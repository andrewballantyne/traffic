/**
 * Naming convention:
 *   [SLOPE_DETAILS][TOP_TYPE][DIRECTION][MEDIUM_DETAILS]
 *     - SLOPE_DETAILS : detail how a slope is described
 *         eg: [SLOPE][CORNER_(N|E|S|W)]
 *         - Sloped tile going up (base is on the lower level) -- see direction
 *         - Corner (slopped related) followed by a single character location of the corner
 *     - TOP_TYPE : center type followed by a border type
 *         eg: [ROAD][GRASS][WATER]
 *         - Road typically has a city (aka sidewalk) bordering the tile
 *         - If a road does not have more than one direction, it's a dead-end road
 *         - The outer of the tile is the second value (if one is needed)
 *     - DIRECTION : compass directions N,E,S,W (in this order)
 *         eg: [NW][NE][SE][SW] (TOP_TYPE of WATER will have [N][W][S][E])
 *         - Every available direction a road can go, will be noted
 *         - Water tiles use absolute N W S E types
 *           - Water with land will denote what type of land it is before direction
 *           - Water with a single corner of land will denote a single direction after the land type
 *           - Water with land will denote all sides it touches following standard N W S E order
 *     - MEDIUM_DETAILS : in the middle of the road, a medium can exist
 *         eg: [MEDIUM_(GRASS|CITY)]
 *         - If a medium exists, a type will directly follow it
 *
 * General notes:
 *   - Each section concatenates with an underscore (_)
 *   - If no directions are noted, it's a full coloured square
 *   - Naming maps to a key in the spritesheet (or as phaser calls it, atlas file)
 */
enum TileType {
  DIRT,
  GRASS,
  ROAD_GRASS_NW,
  ROAD_GRASS_NW_NE,
  ROAD_GRASS_NW_NE_SE_SW,
  ROAD_GRASS_NW_SE,
  ROAD_GRASS_NW_SE_MEDIUM_GRASS,
  ROAD_GRASS_NW_SW,
  ROAD_GRASS_NE,
  ROAD_GRASS_NE_SE_SW,
  ROAD_GRASS_NE_SW,
  ROAD_GRASS_SE,
  ROAD_GRASS_SE_SW,
  ROAD_GRASS_SW,
  SLOPE_GRASS_NE_SW,
  SLOPE_GRASS_NW_SE,
  SLOPE_ROAD_GRASS_NE_SW,
  SLOPE_CORNER_N,
  WATER,
  WATER_GRASS_N,
  WATER_GRASS_N_E,
  WATER_GRASS_N_W,
  WATER_GRASS_E,
  WATER_GRASS_E_S,
  WATER_GRASS_S,
  WATER_GRASS_S_W,
  WATER_GRASS_W,
}

export default TileType;
