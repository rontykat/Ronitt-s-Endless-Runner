// Title: SpaceShifters
// Name: Ronitt Katkoria
// Time: 26 hours
// Creative Tilt: I am particularly proud of how I incorporated the credits scene from the game over scene, to then also give the option to return to the main menu, where the initial sound effect plays again. I just used trial and error to figure out how to incorporate this, but I am proud of it since I think most people would have just kept it with their game over scene. 
// Creative Tilt: I think I had a really good visual style overall, but in particular, I am proud of the jump sound effect, which I made using VCV Rack 2. The original sound effect is supposed to be a waterdrop, but I think it matches the jump very well. I used my VCV Rack 2 experience from CMPM 150: Digital Uadio, so I am really proud and happy that I was able to apply something from a different class.

import { BootScene } from './Scenes/BootScene.js';
import { MenuScene } from './Scenes/MenuScene.js';
import { GameScene } from './Scenes/GameScene.js';
import { GameOverScene } from './Scenes/GameOverScene.js';
import { CreditsScene } from './Scenes/CreditsScene.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [BootScene, MenuScene, GameScene, GameOverScene, CreditsScene],
    physics: {
        default: 'arcade',
        arcade: { gravity: { y: 500 }, debug: false }
    }
};

window.onload = () => {
    const game = new Phaser.Game(config);
};
