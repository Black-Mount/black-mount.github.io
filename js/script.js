document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for nav links
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scroll({
            top: targetSection.offsetTop - 50,  // Adjust for fixed header height
            behavior: 'smooth'
        });
    }

    // Sticky header when scrolling
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Section reveal on scroll
    const sections = document.querySelectorAll('section');
    const revealSection = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', revealSection);
    revealSection();  // Initial check when the page loads

    // Carousel for Skills Section
    const prevButton = document.querySelector('.carousel-nav.prev');
    const nextButton = document.querySelector('.carousel-nav.next');
    const skillSets = document.querySelectorAll('.skill-set');
    let currentIndex = 0;

    function showSkillSet(index) {
        skillSets.forEach((skillSet, i) => {
            skillSet.classList.remove('active');
            if (i === index) {
                skillSet.classList.add('active');
            }
        });
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % skillSets.length;
        showSkillSet(currentIndex);
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + skillSets.length) % skillSets.length;
        showSkillSet(currentIndex);
    });

    showSkillSet(currentIndex); // Initialize first skill set
});
