export class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    create() {
        // Music
        if (!this.sound.get('bgMusic')) {
            this.bgMusic = this.sound.add('bgMusic', { loop: true, volume: 0.5 }); // Adjust volume if needed
            this.bgMusic.play();
        }

        // Background Layers (Add Multiple for Parallax)
        this.bg1 = this.add.tileSprite(400, 300, 800, 600, 'background').setScrollFactor(0);
        this.bg2 = this.add.tileSprite(400, 300, 800, 600, 'background').setScrollFactor(0);

        // Ground
        this.ground = this.physics.add.staticGroup();
        this.ground.create(400, 580, 'ground').setScale(2).refreshBody();

        // Player
        this.player = this.physics.add.sprite(100, 500, 'player');
        this.player.setScale(2); // Scale for visibility
        this.player.setCollideWorldBounds(true);
        this.player.setBounce(0);
        this.player.body.setGravityY(800);

        // Collision
        this.physics.add.collider(this.player, this.ground);

        // Obstacles
        this.obstacles = this.physics.add.group();
        this.physics.add.collider(this.player, this.obstacles, this.hitObstacle, null, this);

        // Score
        this.score = 0;
        this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '24px', fill: '#fff' });

        // Spawn obstacles
        this.time.addEvent({ delay: 2000, callback: this.addObstacle, callbackScope: this, loop: true });

        // Jump input
        this.input.on('pointerdown', () => this.jump());
        this.input.keyboard.on('keydown-SPACE', () => this.jump());

        // Create Animations
        this.anims.create({
            key: 'stand',
            frames: [{ key: 'player', frame: 10 }], // Row 3, Column 3 (0-based index: (2,2) → 10th frame)
            frameRate: 10
        });

        this.anims.create({
            key: 'jump',
            frames: [{ key: 'player', frame: 9 }], // Row 3, Column 2 (0-based index: (2,1) → 9th frame)
            frameRate: 10
        });

        // Set default stance
        this.player.anims.play('stand');
    }

    jump() {
        if (this.player.body.blocked.down) {
            this.player.setVelocityY(-850);
            this.sound.play('jump');
            this.player.anims.play('jump'); // Switch to jump animation
        }
    }

    update() {
        // Parallax Effect
        this.bg1.tilePositionX += 1; // Slowest layer (Furthest back)
        this.bg2.tilePositionX += 2; // Faster layer

        // If touching ground, return to standing animation
        if (this.player.body.blocked.down) {
            this.player.anims.play('stand', true);
        }
    }

    addObstacle() {
        const obstacle = this.obstacles.create(800, 550, Phaser.Math.RND.pick(['obstacle1', 'obstacle2']));
        obstacle.setScale(0.01);
        obstacle.setVelocityX(-200);
        obstacle.body.allowGravity = false;
        obstacle.setImmovable(true);

        this.score += 10;
        this.scoreText.setText('Score: ' + this.score);
    }

    hitObstacle() {
        this.sound.play('collision');
        this.scene.start('GameOverScene', { score: this.score });
    }
}