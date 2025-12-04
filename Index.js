// Set current year in footer
        document.getElementById('current-year').textContent = new Date().getFullYear();

        $(document).ready(function () {
            // 1. Initialize Typed.js for Hero Text
            if ($('#typed-text').length) {
                var typed = new Typed('#typed-text', {
                    strings: [
                        "A Budding Web Developer ready for launch!", 
                        "I build Engaging Experiences.", 
                        "I love Clean, Responsive Code."
                    ],
                    typeSpeed: 50, // Type speed
                    backSpeed: 30, // Backspace speed
                    loop: true, // Loop animation
                    showCursor: true, // Show typing cursor
                    cursorChar: '|',
                });
            }

            // 2. Smooth scrolling for nav links (JQuery)
            $(".smooth-scroll").on('click', function (event) {
                if (this.hash !== "") {
                    event.preventDefault();
                    var hash = this.hash;

                    $('html, body').animate({
                        scrollTop: $(hash).offset().top - 70 
                    }, 800);
                }
            });

            // 3. Intersection Observer for fade-in animations
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        
                        entry.target.classList.remove('visible');
                    }
                });
            }, {
                threshold: 0.1 // Trigger when 10% is visible
            });

            // Apply to all sections
            document.querySelectorAll('#about, #skills, #projects, #contact').forEach(section => {
                section.classList.add('fade-in');
                observer.observe(section);
            });

            // 4. Highlight active link on scroll
            const sections = $('section');
            const navLinks = $('.nav-link.smooth-scroll');

            $(window).on('scroll', function() {
                let current = '';

                sections.each(function() {
                    const sectionTop = $(this).offset().top - 80; 
                    if ($(window).scrollTop() >= sectionTop) {
                        current = '#' + $(this).attr('id');
                    }
                });

                navLinks.removeClass('active-nav');
                if (current) {
                    $(`.nav-link[href="${current}"]`).addClass('active-nav');
                }
            }).trigger('scroll'); 
        });