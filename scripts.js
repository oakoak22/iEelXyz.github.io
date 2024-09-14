document.addEventListener('DOMContentLoaded', () => {
    // Membuat efek bintang di latar belakang
    const numStars = 100;
    const starField = document.createElement('div');
    starField.className = 'star-field';
    document.body.appendChild(starField);

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        starField.appendChild(star);
    }
});
