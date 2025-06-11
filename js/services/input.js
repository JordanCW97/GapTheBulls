// js/services/input.js

let onKeyDown, onKeyUp, onTouchStart, onTouchEnd, onMouseDown, onMouseUp;

export function setupInputHandlers(startCallback, endCallback) {
    onKeyDown = (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            startCallback();
        }
    };

    onKeyUp = (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            endCallback();
        }
    };

    onMouseDown = (e) => {
        e.preventDefault();
        startCallback();
    };

    onMouseUp = (e) => {
        e.preventDefault();
        endCallback();
    };

    onTouchStart = (e) => {
        e.preventDefault();
        startCallback();
    };

    onTouchEnd = (e) => {
        e.preventDefault();
        endCallback();
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('touchstart', onTouchStart, { passive: false });
    document.addEventListener('touchend', onTouchEnd, { passive: false });
}

export function removeInputHandlers() {
    document.removeEventListener('keydown', onKeyDown);
    document.removeEventListener('keyup', onKeyUp);
    document.removeEventListener('mousedown', onMouseDown);
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('touchstart', onTouchStart);
    document.removeEventListener('touchend', onTouchEnd);
}
