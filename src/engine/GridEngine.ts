import { GridStructureDefinition } from '../types/core/GridTypes';
import { RenderListeners, RenderTarget } from '../types/core/RenderData';
import AbstractEngine from './AbstractEngine';
import AbstractGrid from './data/AbstractGrid';
import SquareIsoGrid from './data/SquareIsoGrid';
import AbstractRenderer from './renderer/AbstractRenderer';
import PhaserRenderer from './renderer/phaser/PhaserRenderer';

class GridEngine extends AbstractEngine {
  private grid:AbstractGrid;

  constructor(gridLayout:GridStructureDefinition, target:RenderTarget = null) {
    super(gridLayout, target);

    this.grid = null;
  }

  protected setup():void {
    this.grid = new SquareIsoGrid(this.gridLayout);
    this.grid.create();
  }

  protected ready():void {
    this.renderer.addDataElement(this.grid);
  }

  protected getRenderer(listeners:RenderListeners, target:RenderTarget):AbstractRenderer {
    return new PhaserRenderer(listeners, target);
  }
}

export default GridEngine;
