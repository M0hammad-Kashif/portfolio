document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle button with icon
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    function setThemeIcon(isDark) {
        themeIcon.src = isDark ? 'assets/icons/dark-192.png' : 'assets/icons/sun-192.png';
        themeIcon.alt = isDark ? 'Switch to light mode' : 'Switch to dark mode';
    }
    // Initial icon
    setThemeIcon(document.body.getAttribute('data-theme') === 'dark');
    themeToggle.addEventListener('click', function() {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        setThemeIcon(!isDark);
    });
    // On load, set icon if theme is dark
    if (localStorage.getItem('theme') === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        setThemeIcon(true);
    }


    // Slideshow functionality
    let slideIndex = 0;
    const slides = document.querySelectorAll('.mySlides');

    function showSlides() {
        // Hide all slides
        slides.forEach(slide => {
            slide.style.display = 'none';
        });

        // Increment slide index
        slideIndex++;

        // Reset to first slide if at the end
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        // Show the current slide
        slides[slideIndex - 1].style.display = 'block';

        // Change slide every 2 seconds
        setTimeout(showSlides, 2000);
    }

    // Initialize slideshow
    showSlides();   


    // Project slideshows
    const projectSlideshows = document.querySelectorAll('.project-slideshow');
    projectSlideshows.forEach((slideshow, idx) => {
        let slideIndex = 0;
        const slides = slideshow.querySelectorAll('.mySlides-project' + idx);
        function showSlides() {
            slides.forEach(slide => slide.style.display = 'none');
            slideIndex++;
            if (slideIndex > slides.length) slideIndex = 1;
            slides[slideIndex - 1].style.display = 'block';
            setTimeout(showSlides, 2000);
        }
        if (slides.length > 0) showSlides();
    });
});
