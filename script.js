// Function to animate the skill bars when they come into view
window.addEventListener('scroll', () => {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(skill => {
        const skillPosition = skill.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (skillPosition < screenPosition) {
            skill.style.width = skill.dataset.skill;
        }
    });
});

// Project carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.project');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    nextSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    prevSlide();
});

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
}

function prevSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
}

// Adding the 'active' class to the first slide to show it initially
slides[currentSlide].classList.add('active');
