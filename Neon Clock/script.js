const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const clockEl = document.getElementById('clock');

function updateClock() {
    const now = new Date();

    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hours / 12) * 360 + (minutes / 60) * 30;
    const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
    const secondDeg = (seconds / 60) * 360;

    hourEl.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    minuteEl.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    secondEl.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();

// Make the clock draggable
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

clockEl.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - clockEl.offsetLeft;
    offsetY = e.clientY - clockEl.offsetTop;
    document.body.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        clockEl.style.left = `${e.clientX - offsetX}px`;
        clockEl.style.top = `${e.clientY - offsetY}px`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.cursor = 'grab';
});
