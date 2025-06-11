let currentScreen = null;

export function showScreen(screenFunc) {
    if (currentScreen && typeof currentScreen.teardown === 'function') {
        currentScreen.teardown();
    }
    currentScreen = screenFunc();
}
