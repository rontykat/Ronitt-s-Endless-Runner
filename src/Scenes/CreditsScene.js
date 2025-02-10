export class CreditsScene extends Phaser.Scene {
    constructor() {
        super({ key: 'CreditsScene' });
    }
    create() {
        // Title
        this.add.text(100, 100, 'Game Credits', { fontSize: '28px', fill: '#fff', fontStyle: 'bold' });

        // Credits Text
        this.add.text(100, 150, 'Game Design and Development - Ronitt Katkoria', { fontSize: '20px', fill: '#fff' });
        this.add.text(100, 190, 'Audio/Music and Sound Effects - freesound.org, https://www.deviantart.com/', { fontSize: '14px', fill: '#fff' });
        this.add.text(100, 230, 'Sprites and Images - pngtree.com', { fontSize: '20px', fill: '#fff' });
        this.add.text(100, 270, 'Tutorials for Certain Implementations - phaser.io/learn', { fontSize: '20px', fill: '#fff' });

        // Link to Detailed Credits
        this.add.text(100, 310, 'Detailed Description and Credits:', { fontSize: '20px', fill: '#fff' });
        this.add.text(100, 340, 'docs.google.com/document/d/1zc4VH2bEDklkPBpOp9DoCWgZq3wbycGwnO7WygJgDvQ/', 
            { fontSize: '10px', fill: '#ff0' });

        // Return to Menu Instruction
        this.add.text(100, 390, 'Press SPACE to return to Menu', { fontSize: '20px', fill: '#fff' });

        // Go Back to Menu on SPACE Press
        this.input.keyboard.once('keydown-SPACE', () => this.scene.start('MenuScene'));
    }
}