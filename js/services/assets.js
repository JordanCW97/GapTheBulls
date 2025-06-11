const images = {};
const sounds = {};

export async function loadAssets() {
    const imagePaths = {
        mclaren: './resources/Sprites/MCL.png',
        redBull: './resources/Sprites/RB.png',
        grandstand: './resources/Sprites/grandstand.png',
        tree: './resources/Sprites/tree_cartoon_med.png',
        lando: './resources/Sprites/Lando.png',
        max: './resources/Sprites/Max.png',
    };

    for (const [key, src] of Object.entries(imagePaths)) {
        images[key] = await loadImage(src);
    }

    const theme = new Audio('./resources/Audio/theme.mp3');
    theme.loop = true;
    theme.volume = 0.3;
    sounds.theme = theme;
}

function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
        img.src = src;
    });
}

export { images, sounds };
