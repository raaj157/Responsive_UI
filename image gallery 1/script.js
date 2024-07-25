
let currentIndex = 0;
let items = document.querySelectorAll('.carousel-item');
let dots = document.querySelectorAll('.dot');
let timer;

function moveSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    } else if (currentIndex >= items.length) {
        currentIndex = 0;
    }

    updateCarousel();
}

function currentSlide(index) {
    currentIndex = index;
    updateCarousel();
}

function updateCarousel() {
    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
    resetTimer();
}

function startTimer() {
    timer = setInterval(() => moveSlide(1), 3000);
}

function resetTimer() {
    clearInterval(timer);
    startTimer();
}

document.querySelector('.carousel').addEventListener('mouseenter', () => clearInterval(timer));
document.querySelector('.carousel').addEventListener('mouseleave', startTimer);

startTimer();
updateCarousel();