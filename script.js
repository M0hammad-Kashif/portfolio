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


    // Independent slideshow for each publication
    document.querySelectorAll('.slideshow-container').forEach(function(container) {
        const slides = container.querySelectorAll('.mySlides');
        let slideIndex = 0;
        if (!slides.length) return;
        function showSlides() {
            slides.forEach(slide => slide.style.display = 'none');
            slideIndex = (slideIndex + 1) % slides.length;
            slides[slideIndex].style.display = 'block';
            setTimeout(showSlides, 2000);
        }
        // Show the first slide immediately
        slides[0].style.display = 'block';
        setTimeout(showSlides, 2000);
    });


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


    // Sticky name on scroll
    const stickyName = document.getElementById('sticky-name');
    const aboutSection = document.getElementById('about');
    function handleStickyName() {
        const aboutRect = aboutSection.getBoundingClientRect();
        if (aboutRect.bottom <= 64) {
            stickyName.classList.add('visible');
        } else {
            stickyName.classList.remove('visible');
        }
    }
    window.addEventListener('scroll', handleStickyName);
    handleStickyName();
});
