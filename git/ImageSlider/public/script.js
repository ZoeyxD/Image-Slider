document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 1;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    // Display the first slide if slides are available
    if (slides.length > 0) {
        showSlides(slideIndex);
    }

    // Function to increment slide index
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Function to set the current slide index
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    // Function to display the slide at the given index
    function showSlides(n) {
        if (slides.length === 0) return; // Exit if no slides
        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;

        // Hide all slides and remove active class from dots
        Array.from(slides).forEach(slide => slide.style.display = "none");
        Array.from(dots).forEach(dot => dot.classList.remove("active"));

        // Show the current slide and set the corresponding dot as active
        if (slides[slideIndex - 1]) {
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].classList.add("active");
        } else {
            console.error(`No slide found for index: ${slideIndex - 1}`);
        }
    }

    // Utility function to add event listeners if elements exist
    function addListener(selector, event, handler) {
        const element = document.querySelector(selector);
        if (element) {
            element.addEventListener(event, handler);
        } else {
            console.warn(`${selector} not found.`);
        }
    }

    // Add event listeners for navigation buttons
    addListener('.prev', 'click', () => plusSlides(-1));
    addListener('.next', 'click', () => plusSlides(1));

    // Add event listeners for dots
    Array.from(dots).forEach((dot, index) => {
        dot.addEventListener('click', () => currentSlide(index + 1));
    });

    // Add keyboard navigation if slides are available
    if (slides.length > 0) {
        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowLeft') plusSlides(-1);
            else if (event.key === 'ArrowRight') plusSlides(1);
        });
    }
});




