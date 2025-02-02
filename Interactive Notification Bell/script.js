let notificationCount = 0;
const colors = ['#ff4757', '#ff6b81', '#ffa502', '#2ed573'];

function handleBellClick(event) {
    // Update badge
    notificationCount++;
    const badge = document.getElementById('badge');
    badge.textContent = notificationCount;
    badge.classList.add('badge-pop');

    // Show status message
    const message = document.getElementById('message');
    message.classList.add('show-message');

    // Create particles
    createParticles(event.clientX, event.clientY);

    // Confetti effect
    confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0.5, y: 0.8 },
        colors: colors
    });

    // Reset animations
    setTimeout(() => {
        badge.classList.remove('badge-pop');
        message.classList.remove('show-message');
    }, 2000);
}

function createParticles(x, y) {
    const particles = document.getElementById('particles');
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.width = `${Math.random() * 5 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particles.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
}