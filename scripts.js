document.addEventListener('DOMContentLoaded', () => {
    const numStars = 100;
    const starField = document.createElement('div');
    starField.style.position = 'absolute';
    starField.style.top = '0';
    starField.style.left = '0';
    starField.style.width = '100%';
    starField.style.height = '100%';
    starField.style.pointerEvents = 'none';
    document.body.appendChild(starField);

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        starField.appendChild(star);
    }

    document.getElementById('showTimeButton').addEventListener('click', () => {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        document.getElementById('time').innerText = `Waktu saat ini: ${timeString}`;
    });
});
