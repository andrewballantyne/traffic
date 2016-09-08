import { RenderListeners, RenderTarget } from '../../types/core/RenderData';

abstract class AbstractRenderer {
  protected listeners:RenderListeners;
  protected target:RenderTarget;

  constructor(listeners:RenderListeners = {}, target:RenderTarget = '') {
    this.listeners = listeners;
    this.target = target;
  }

  public create():void {
    this.setup();
  }

  public abstract addDataElement(dataElement:any):void;

  protected ready():void {
    if (typeof this.listeners.onReady === 'function') {
      this.listeners.onReady();
    }
  }

  protected abstract setup():void;
}

export default AbstractRenderer;
