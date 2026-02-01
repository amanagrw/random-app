document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');

    noBtn.addEventListener('mouseover', () => {
        const maxX = window.innerWidth - noBtn.offsetWidth - 20;
        const maxY = window.innerHeight - noBtn.offsetHeight - 20;
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;
        noBtn.style.position = 'fixed';
        noBtn.style.left = newX + 'px';
        noBtn.style.top = newY + 'px';
    });

    yesBtn.addEventListener('click', () => {
        window.location.href = 'thankyou.html';
    });
});
