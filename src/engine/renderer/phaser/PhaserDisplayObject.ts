abstract class PhaserDisplayObject {
  protected game:Phaser.Game;
  protected phaserObj:PIXI.DisplayObject;

  constructor(game:Phaser.Game) {
    this.game = game;

    this.phaserObj = null;
  }

  public addToGroup(group:Phaser.Group):void {
    if (this.phaserObj === null) {
      console.error('Phaser Object was not created and cannot thus be added to a group: ', this);
      throw new Error('Class setup error.');
    }
    group.add(this.phaserObj);
  }

  public abstract create():void;
}

export default PhaserDisplayObject;
