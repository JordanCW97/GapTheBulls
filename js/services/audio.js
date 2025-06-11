let backgroundMusic;
let audioToggle;
let isAudioMuted = false;
let audioInitialized = false;

export function initAudioElements() {
    backgroundMusic = document.getElementById('backgroundMusic');
    audioToggle = document.getElementById('audioToggle');

    backgroundMusic.volume = 0.3;

    if (audioToggle) {
        audioToggle.onclick = toggleAudio;
        updateAudioIcon();
    }

    backgroundMusic.addEventListener('canplaythrough', () => {
        console.log('Audio is ready to play');
    });

    backgroundMusic.addEventListener('error', (e) => {
        console.log('Audio loading error:', e);
    });
}

export function toggleAudio() {
    if (!audioInitialized) {
        initializeAudio();
    }

    isAudioMuted = !isAudioMuted;

    if (isAudioMuted) {
        backgroundMusic.pause();
    } else {
        backgroundMusic.play().catch(error => console.log('Failed to play audio:', error));
    }

    updateAudioIcon();
}

export function startAudio() {
    if (!isAudioMuted) {
        if (!audioInitialized) {
            initializeAudio();
        } else {
            backgroundMusic.play().catch(error => console.log('Failed to play audio:', error));
        }
    }
}

function initializeAudio() {
    if (!audioInitialized && !isAudioMuted) {
        backgroundMusic.play().then(() => {
            audioInitialized = true;
            console.log('Audio initialized and playing successfully');
        }).catch(error => {
            console.log('Audio initialization failed:', error);
        });
    }
}

function updateAudioIcon() {
    if (!audioToggle) return;

    if (isAudioMuted) {
        audioToggle.textContent = '🔇';
        audioToggle.classList.add('muted');
        audioToggle.title = 'Unmute Audio';
    } else {
        audioToggle.textContent = '🔊';
        audioToggle.classList.remove('muted');
        audioToggle.title = 'Mute Audio';
    }
}
