document.addEventListener("DOMContentLoaded", function () {
      /* =========================
       TESTIMONIAL SLIDER
    ========================= */

    const testimonialCards =
        document.querySelectorAll(".testimonial-card");

    const testimonialDots =
        document.querySelectorAll(".testimonial-dot");

    const testimonialPrev =
        document.getElementById("testimonialPrev");

    const testimonialNext =
        document.getElementById("testimonialNext");

    let testimonialIndex = 0;

    function showTestimonial(index) {

        testimonialCards.forEach(function (card) {
            card.classList.remove("active");
        });

        testimonialDots.forEach(function (dot) {
            dot.classList.remove("active");
        });

        testimonialCards[index].classList.add("active");
        testimonialDots[index].classList.add("active");

    }

    if (testimonialCards.length > 0) {
        /* AUTO SLIDE */

        setInterval(function () {

            testimonialIndex++;

            if (testimonialIndex >= testimonialCards.length) {
                testimonialIndex = 0;
            }

            showTestimonial(testimonialIndex);

        }, 5000);
        testimonialNext.addEventListener("click", function () {

            testimonialIndex++;

            if (testimonialIndex >= testimonialCards.length) {
                testimonialIndex = 0;
            }

            showTestimonial(testimonialIndex);

        });

        testimonialPrev.addEventListener("click", function () {

            testimonialIndex--;

            if (testimonialIndex < 0) {
                testimonialIndex =
                    testimonialCards.length - 1;
            }
