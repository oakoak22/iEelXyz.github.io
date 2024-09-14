document.getElementById('showTimeButton').addEventListener('click', () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('time').innerText = `Waktu saat ini: ${timeString}`;
});
