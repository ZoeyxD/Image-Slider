document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 1;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        if (slides.length === 0) return; // Exit if there are no slides
        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;

        Array.from(slides).forEach(slide => slide.style.display = "none");
        Array.from(dots).forEach(dot => dot.classList.remove("active"));

        if (slides[slideIndex - 1]) {
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].classList.add("active");
        } else {
            console.error("No slide found for index:", slideIndex - 1);
        }
    }

    // Check if the elements exist before adding event listeners
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    if (prevButton) {
        prevButton.addEventListener('click', () => plusSlides(-1));
    } else {
        console.warn("Previous button not found.");
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => plusSlides(1));
    } else {
        console.warn("Next button not found.");
    }

    // Add event listeners to dots if they exist
    Array.from(dots).forEach((dot, index) => {
        dot.addEventListener('click', () => currentSlide(index + 1));
    });

    // Only add keyboard navigation if the elements are available
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') plusSlides(-1);
        else if (event.key === 'ArrowRight') plusSlides(1);
    });
});



