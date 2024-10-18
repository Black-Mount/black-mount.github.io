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

    // Function to reset all progress bars to 0%
    function resetProgressBars(skillSet) {
        const progressBars = skillSet.querySelectorAll('.progress');
        progressBars.forEach(bar => {
            bar.style.width = '0%'; // Reset to 0% before animation
        });
    }

    // Function to animate the progress bars for the active skill set
    function animateProgressBars(skillSet) {
        const progressBars = skillSet.querySelectorAll('.progress');
        progressBars.forEach(bar => {
            const classes = bar.classList; // e.g., "progress python"
            const skillClass = classes[1]; // "python", "sql", etc.
            const widthMapping = {
                'python': '90%',
                'sql': '80%',
                'c': '70%',
                'cpp': '85%',
                'java': '80%',
                'matlab': '65%',
                'esp32': '85%',
                'stm32': '80%',
                'raspberry': '75%',
                'solidworks': '70%',
                'ansys': '65%',
                'communication': '90%',
                'leadership': '85%',
                'problemsolving': '90%'
            };
            setTimeout(() => {
                bar.style.width = widthMapping[skillClass]; // Apply target width
            }, 100);  // Slight delay to start the animation
        });
    }

    // Function to show a skill set with a smooth transition
    function showSkillSet(index) {
        skillSets.forEach((skillSet, i) => {
            skillSet.classList.remove('active');
            resetProgressBars(skillSet); // Reset progress bars to 0%
            if (i === index) {
                skillSet.classList.add('active');
                animateProgressBars(skillSet); // Animate progress bars for the active skill set
            }
        });
    }

    // Handle next button click
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % skillSets.length; // Cycle forward
        showSkillSet(currentIndex);
    });

    // Handle previous button click
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + skillSets.length) % skillSets.length; // Cycle backward
        showSkillSet(currentIndex);
    });

    showSkillSet(currentIndex); // Initialize first skill set
});
