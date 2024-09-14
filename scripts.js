document.addEventListener('DOMContentLoaded', () => {
    // Membuat efek bintang di latar belakang
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

    // Membuat planet
    const planets = [
        { className: 'planet one' },
        { className: 'planet two' },
        { className: 'planet three' },
    ];

    planets.forEach(planet => {
        const planetDiv = document.createElement('div');
        planetDiv.className = planet.className;
        document.body.appendChild(planetDiv);
    });

    // Menampilkan waktu ketika tombol ditekan
    document.getElementById('showTimeButton').addEventListener('click', () => {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        document.getElementById('time').innerText = `Waktu saat ini: ${timeString}`;
    });
});
