export let state = {
    gameState: 'menu',
    gameRunning: false,
    score: 0,
    gameTime: 0,
    lastFrameTime: 0,
    deltaTimeAccumulator: 0,
    introStartTime: 0,
    introDuration: 3000,
    isInputDown: false,
    wantsToCharge: false,
    groundY: 0,

    player: {
        x: 0,
        y: 0,
        width: 50,
        height: 26,
        velocityY: 0,
        grounded: false,
        minJumpPower: -300,
        maxJumpPower: -700,
        gravity: 1600,
        isCharging: false,
        chargeTime: 0,
        maxChargeTime: 300
    },

    maxCar: {
        x: 0,
        y: 0,
        width: 50,
        height: 26,
        speed: 0,
        visible: false
    },

    backgroundOffset: 0,
    obstacleSpawnRate: 1800,
    obstacleSpeed: 800,
    minObstacleGap: 0,
    lastObstacleTime: 0,
    difficultyLevel: 0,
    obstacleClusterChance: 0.3,

    grandstandTimer: 0,
    grandstandVisible: true,
    grandstandX: 0,
    grandstandSpeed: 0,
    nextGrandstandInterval: 15000 + Math.random() * 5000,

    warningZone: 0,
    perfectJumpZone: 0,

    obstacles: [],
    activeQuotes: [],

    overtakeQuotes: [
        "They race me so hard...",
        "Du du du du!",
        "No papaya rules here!",
        "Look at me now Zak!",
        "Oh look it's Liam Slowson!",
        "Box this lap? Nah, I’m boxing rivals instead.",
        "That's how it's done, baby!",
        "Maximum attack, let's go!",
        "Is that a Red Bull or a traffic cone?",
        "Smooth operator coming through!",
        "Send it like it's Silverstone!",
        "Clear air and clear conscience.",
        "Lando mode: engaged.",
        "This one's for Team Papaya!",
        "Tell Oscar I said hi.",
        "I need party mode!.",
        "It's friday nightttt! Saturday sunday what?."
    ]
};

export function resetState() {
    state.score = 0;
    state.gameTime = 0;
    state.lastFrameTime = 0;
    state.deltaTimeAccumulator = 0;
    state.introStartTime = 0;
    state.isInputDown = false;
    state.wantsToCharge = false;
    state.gameState = 'intro';
    state.gameRunning = true;

    state.obstacles.length = 0;
    state.activeQuotes.length = 0;
    state.difficultyLevel = 0;
    state.obstacleSpawnRate = 1800;
    state.obstacleSpeed = 800;
    state.backgroundOffset = 0;
    state.grandstandTimer = 0;
    state.grandstandVisible = true;
    state.grandstandX = 0;
    state.grandstandSpeed = 0;
    state.nextGrandstandInterval = 15000 + Math.random() * 5000;

    state.player.y = state.groundY - state.player.height;
    state.player.velocityY = 0;
    state.player.grounded = true;
    state.player.isCharging = false;
    state.player.chargeTime = 0;
    state.maxCar.x = 0;
    state.maxCar.speed = 0;
    state.maxCar.visible = true;
}
