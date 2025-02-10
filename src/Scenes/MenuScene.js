export class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MenuScene' });
    }
    create() {
        this.sound.play('pickup');
        this.add.text(300, 250, 'Endless Runner', { fontSize: '32px', fill: '#fff' });
        this.add.text(250, 300, 'Press SPACE or Click to Start', { fontSize: '24px', fill: '#fff' });
        this.input.keyboard.once('keydown-SPACE', () => this.scene.start('GameScene'));
        this.input.once('pointerdown', () => this.scene.start('GameScene'));
    }
}