// Add scroll event listener to shrink header and show/hide scroll-to-top button
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const scrollPos = window.scrollY;

    // Shrink header on scroll
    if (scrollPos > 100) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }

    // Show/hide scroll-to-top button
    if (scrollPos > 500) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Scroll-to-top button functionality
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('.scroll-to-top').style.display = "block";
    } else {
        document.querySelector('.scroll-to-top').style.display = "none";
    }
}

document.querySelector('.scroll-to-top').addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
