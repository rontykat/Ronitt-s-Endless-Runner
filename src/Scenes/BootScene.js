export class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BootScene' });
    }
    preload() {
        this.load.image('background', 'assets/background.png');
        this.load.image('ground', 'assets/ground.png');
        this.load.image('pickup', 'assets/pickup.png');
        this.load.image('obstacle1', 'assets/obstacle1.png');
        this.load.image('obstacle2', 'assets/obstacle2.png');
        this.load.audio('bgMusic', 'assets/bgMusic.mp3');
        this.load.audio('collision', 'assets/collision.wav');
        this.load.audio('jump', 'assets/jump.wav');
        this.load.audio('pickup', 'assets/pickup.wav');
        this.load.audio('gameover', 'assets/gameover.wav');
        this.load.spritesheet('player', 'assets/player.png', { frameWidth: 64, frameHeight: 64 });
    }
    create() {
        this.scene.start('MenuScene');
    }
}