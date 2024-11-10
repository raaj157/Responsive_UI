const sliderTrack = document.querySelector('.slider-track');

let isPaused = false;
document.querySelector('.slider-container').addEventListener('mouseenter', () => {
    isPaused = true;
    sliderTrack.style.animationPlayState = 'paused';
});

document.querySelector('.slider-container').addEventListener('mouseleave', () => {
    isPaused = false;
    sliderTrack.style.animationPlayState = 'running';
});
