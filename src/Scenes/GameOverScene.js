export class GameOverScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameOverScene' });
    }
    init(data) {
        this.finalScore = data.score;
    }
    create() {
        this.sound.play('gameover');
        this.add.text(300, 250, 'Game Over', { fontSize: '32px', fill: '#fff' });
        this.add.text(280, 300, `Score: ${this.finalScore}`, { fontSize: '24px', fill: '#fff' });
        this.add.text(280, 350, 'Press SPACE to Restart', { fontSize: '24px', fill: '#fff' });
        this.add.text(280, 400, 'Press C for Credits', { fontSize: '24px', fill: '#fff' });
        this.input.keyboard.once('keydown-SPACE', () => this.scene.start('GameScene'));
        this.input.keyboard.once('keydown-C', () => this.scene.start('CreditsScene'));
    }
}