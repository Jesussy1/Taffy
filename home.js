function checkSlide() {
    const slideElements = document.querySelectorAll('.slide-in-right, .slide-in-left');
    const fadeElements = document.querySelectorAll('.fade-in');
    
    slideElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.75) && (rect.bottom >= 0);
        
        if (isVisible) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });

    fadeElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.9) && (rect.bottom >= 0);
        
        if (isVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', checkSlide);
window.addEventListener('load', checkSlide);

document.querySelector('.btn1').addEventListener('click', function() {
    document.querySelector('.prj').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('.btn2').addEventListener('click', function() {
    document.querySelector('.footer').scrollIntoView({ behavior: 'smooth' });
});