
document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu toggle
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const menuNav = document.getElementById("menu-nav");

    hamburgerBtn.addEventListener("click", function () {
        menuNav.classList.toggle("show");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!event.target.closest("#hamburger-btn") && !event.target.closest("#menu-nav") && menuNav.classList.contains("show")) {
            menuNav.classList.remove("show");
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active class to CTA buttons on hover
    const ctaButtons = document.querySelectorAll('.CTA_L');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.classList.add('active');
        });

        button.addEventListener('mouseleave', function() {
            this.classList.remove('active');
        });
    });

    // Testimonial rotation (if multiple testimonials are added later)
    const testimonials = document.querySelectorAll('.paddingtest');
    let currentTestimonial = 0;

    if (testimonials.length > 1) {
        setInterval(() => {
            testimonials[currentTestimonial].style.display = 'none';
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            testimonials[currentTestimonial].style.display = 'block';
        }, 5000);
    }
});
