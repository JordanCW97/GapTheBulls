import { showMainMenu } from './screens/mainMenu.js';
import { initAudioElements } from './services/audio.js';

window.addEventListener('load', () => {
    initAudioElements();
    showMainMenu(); 
});
