import { GridStructureDefinition } from '../types/core/GridTypes';
import { RenderListeners, RenderTarget } from '../types/core/RenderData';
import EngineHelp from './EngineHelp';
import AbstractRenderer from './renderer/AbstractRenderer';

abstract class AbstractEngine {
  protected gridLayout:GridStructureDefinition;
  protected renderer:AbstractRenderer;

  private target:RenderTarget;

  constructor(gridLayout:GridStructureDefinition, target:RenderTarget) {
    this.gridLayout = gridLayout;
    this.target = target;

    this.renderer = null;

    EngineHelp.init(this.gridLayout);
  }

  public start():void {
    this.setup();

    const renderListeners:RenderListeners = {
      onReady: this.ready.bind(this),
    };
    this.renderer = this.getRenderer(renderListeners, this.target);
    this.renderer.create();
  }

  protected abstract getRenderer(listeners:RenderListeners, target:RenderTarget):AbstractRenderer;

  protected abstract setup():void;

  protected abstract ready():void;
}

export default AbstractEngine;
