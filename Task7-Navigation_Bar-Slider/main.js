let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = slides.length - 1; 
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    
    showSlide(currentIndex);
}

showSlide(currentIndex);
