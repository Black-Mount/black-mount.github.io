// Scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Back to top button functionality
window.onscroll = function() {
    let button = document.getElementById("back-to-top");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

// Simple fade-in effect on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.fade-in');
    const triggerBottom = window.innerHeight / 5 * 4;
    
    sections.forEach(section => {
        const boxTop = section.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
});
