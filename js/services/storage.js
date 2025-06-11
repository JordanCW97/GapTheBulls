const API_URL = 'https://gap-the-bulls-api.onrender.com/api/scores';

export async function submitHighScore(username, score) {
    if (score <= 0) return;

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, score })
        });

        const data = await response.json();
        console.log('Score submitted:', data);
        return data;
    } catch (error) {
        console.error('Failed to submit score:', error);
        throw error;
    }
}

export async function fetchHighScores(limit = 5) {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const scores = data.data || [];
        return scores
            .sort((a, b) => b.score - a.score)
            .slice(0, limit);
    } catch (error) {
        console.error('Failed to load high scores:', error);
        return [];
    }
}

export function renderHighScores(tableElementId, scores) {
    const tbody = document.querySelector(`#${tableElementId} tbody`);
    if (!tbody) return;

    tbody.innerHTML = '';
    scores.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `<td style="padding: 4px;">${entry.username}</td><td style="text-align: right; padding: 4px;">${entry.score}</td>`;
        tbody.appendChild(row);
    });
}
