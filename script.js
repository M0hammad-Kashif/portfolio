// You can add JavaScript code here to handle button clicks and other interactive features
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        alert('Button clicked!');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('change', function() {
        if(this.checked) {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    });

    // Check for saved user preference, if any, on load
    if (localStorage.getItem('theme') === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        checkbox.checked = true;
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
