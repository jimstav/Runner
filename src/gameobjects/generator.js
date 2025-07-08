import Cloud from './cloud';
import Obstacle from './obstacle';
import Coin from './coin';

export default class Generator {
  constructor(scene) {
    this.scene = scene;
    this.scene.time.delayedCall(2000, () => this.init(), null, this);
    this.pinos = 0;
  }

  init() {
    this.generateCloud();
    this.generateObstacle();
    this.generateCoin();
  }

  generateCloud() {
    new Cloud(this.scene);
    this.scene.time.delayedCall(
      Phaser.Math.Between(2000, 3000),
      () => this.generateCloud(),
      null,
      this
    );
  }

  generateObstacle() {
    this.scene.obstacles.add(
      new Obstacle(
        this.scene,
        800,
        this.scene.height - Phaser.Math.Between(32, 128)
      )
    );
    this.scene.time.delayedCall(
      Phaser.Math.Between(1500, 2500),
      () => this.generateObstacle(),
      null,
      this
    );
  }

  generateCoin() {
    this.scene.coins.add(
      new Coin(
        this.scene,
        800,
        this.scene.height - Phaser.Math.Between(32, 128)
      )
    );
  }
}
