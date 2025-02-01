const canvas = document.getElementById('vortexCanvas');
const ctx = canvas.getContext('2d');
let particles = [];
const mouse = { x: null, y: null };

// Set canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Mouse movement handler
document.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

// Touch movement handler
document.addEventListener('touchmove', (e) => {
    e.preventDefault();
    mouse.x = e.touches[0].clientX;
    mouse.y = e.touches[0].clientY;
});

// Particle class
class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 1;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.life = 1;
        this.decay = 0.001 + Math.random() * 0.02;
    }

    update() {
        // Mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
            const force = (100 - distance) * 0.1;
            this.vx -= (dx / distance) * force;
            this.vy -= (dy / distance) * force;
        }

        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.decay;

        if (this.x < 0 || this.x > canvas.width ||
            this.y < 0 || this.y > canvas.height ||
            this.life <= 0) {
            this.reset();
        }
    }

    draw() {
        const gradient = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, this.radius
        );
        gradient.addColorStop(0, `hsla(${Math.random() * 360}, 100%, 50%, 1)`);
        gradient.addColorStop(1, `hsla(${Math.random() * 360}, 100%, 50%, 0)`);

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
    }
}

// Create particles
for (let i = 0; i < 50; i++) {
    particles.push(new Particle());
}

// Animation loop
function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    requestAnimationFrame(animate);
}

animate();