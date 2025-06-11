import { showScreen } from '../screenManager.js';
import { gameView } from './gameView.js';
import { images } from '../services/assets.js';

export function showMainMenu() {
    console.log("Main menu is loading...");

    const mainMenu = document.getElementById('mainMenu');
    const howToPlay = document.getElementById('howToPlay');
    const credits = document.getElementById('credits');
    const gameOver = document.getElementById('gameOver');
    const score = document.getElementById('score');
    const speedIndicator = document.getElementById('speedIndicator');
    const instructions = document.getElementById('instructions');
    const introText = document.getElementById('introText');

    // Hide other screens
    [howToPlay, credits, gameOver, score, speedIndicator, instructions, introText].forEach(el => el.style.display = 'none');

    // Build menu content
    mainMenu.innerHTML = `
        <div class="menu-title-container">
            <img src="./resources/Sprites/Lando.png" id="landoImg" class="driver-image lando">
            <img src="./resources/Art/Title.png" alt="Gap The Bulls Title" class="menu-title-image">
            <img src="./resources/Sprites/Max.png"  id="maxImg" class="driver-image max">
        </div>
        <div class="menu-center">
            <button class="menu-button" id="startBtn">Play</button>
            <button class="menu-button" id="howToPlayBtn">How to Play</button>
            <button class="menu-button" id="creditsBtn">Credits</button>
        </div>
    `;

    mainMenu.style.display = 'flex';

    document.getElementById('startBtn').onclick = () => showScreen(gameView);
    document.getElementById('howToPlayBtn').onclick = showHowToPlay;
    document.getElementById('creditsBtn').onclick = showCredits;
}

function showHowToPlay() {
    document.getElementById('mainMenu').style.display = 'none';
    const howToPlay = document.getElementById('howToPlay');
    howToPlay.innerHTML = `
    <h1 class="menu-title">How to Play</h1>
    <div class="menu-content">
      <h3>Objective:</h3>
      <p>Help McLaren gap the Red Bull second drivers, but you'll never quite catch Max Verstappen!</p>
      <h3>Controls:</h3>
      <p>• Hold Click/Tap for higher jumps</p>
      <p>• Quick tap for small hops</p>
      <p>• Watch the charge bar above your car!</p>
      <h3>Mobile Tips:</h3>
      <p>• Look for red warning indicators showing incoming obstacles</p>
      <p>• Yellow zones indicate perfect jump timing</p>
      <p>• Speed indicator helps you anticipate difficulty</p>
      <h3>Gameplay:</h3>
      <p>• Jump over Red Bull cars to earn championship points</p>
      <p>• The game gets faster and more challenging as you progress</p>
      <p>• Watch out for obstacle clusters!</p>
      <p>• Don't crash into the Red Bull cars!</p>
    </div>
    <button class="menu-button back-button" onclick="showMainMenu()">Back</button>
  `;
    howToPlay.style.display = 'flex';
}

function showCredits() {
    document.getElementById('mainMenu').style.display = 'none';
    const credits = document.getElementById('credits');
    credits.innerHTML = `
    <h1 class="menu-title">Credits</h1>
    <div class="menu-content">
      <h3>Game Development:</h3>
      <p>Jordan Carter-Wightwick</p>
      <h3>Inspired by:</h3>
      <p>Charlotte's poor choice in F1 teams.</p>
      <h3>Special Thanks:</h3>
      <p>Charlotte for being pretty dang cool! ;)</p>
      <h3>Remember:</h3>
      <p>"It's lights out and away we go!" 🏁</p>
    </div>
    <button class="menu-button back-button" onclick="showMainMenu()">Back</button>
  `;
    credits.style.display = 'flex';
}

window.showMainMenu = showMainMenu; // Ensure it's accessible to inline onclick calls
