// Scroll reveal for sections
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;

        if (sectionTop < screenPosition) {
            section.classList.add('active');
        }
    });
});

// Smooth scroll to sections when clicking on nav links (optional if using CSS smooth scroll)
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust scroll position slightly
                behavior: 'smooth'
            });
        }
    });
});

// Example for a hover animation effect (for repository images)
const repositoryImages = document.querySelectorAll('.repository img');

repositoryImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.2)';
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});
