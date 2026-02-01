document.addEventListener('DOMContentLoaded', () => {
    // Floating Hearts
    const heartsContainer = document.querySelector('.hearts');
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animation = `float ${2 + Math.random() * 3}s infinite`;
        heart.style.fontSize = '2rem';
        heartsContainer.appendChild(heart);
    }

    // Simple Confetti Canvas
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = -1;

    const confetti = [];
    for (let i = 0; i < 100; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            vx: (Math.random() - 0.5) * 4,
            vy: Math.random() * 3 + 2,
            color: `hsl(${Math.random()*360}, 70%, 60%)`,
            size: Math.random() * 5 + 5
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach(c => {
            c.x += c.vx;
            c.y += c.vy;
            c.vy += 0.1;
            if (c.y > canvas.height) c.y = -c.size;
            ctx.fillStyle = c.color;
            ctx.fillRect(c.x, c.y, c.size, c.size);
        });
        requestAnimationFrame(animate);
    }
    animate();

    // Add CSS for hearts (inject dynamically)
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
        }
        .hearts { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 10; }
        .hearts > div { top: 100%; }
    `;
    document.head.appendChild(style);
});
