/* ========================================
   Portfolio JavaScript
   4 Extras: Dark Mode, Typing Animation,
   Animated Skill Bars, Project Filter
   ======================================== */

(function () {
    'use strict';

    // ==========================================
    // EXTRA 1: Dark / Light Mode Toggle
    // ==========================================
    var themeToggle = document.getElementById('theme-toggle');
    var toggleIcon = themeToggle.querySelector('.toggle-icon');
    var savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleIcon.textContent = '\u2600'; // Sun
    }

    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            toggleIcon.textContent = '\u2600'; // Sun
            localStorage.setItem('theme', 'dark');
        } else {
            toggleIcon.textContent = '\u263E'; // Moon
            localStorage.setItem('theme', 'light');
        }
    });

    // ==========================================
    // EXTRA 2: Typing Animation
    // ==========================================
    var typedElement = document.getElementById('typed-text');
    var phrases = [
        'Data Analyst',
        'Python Enthusiast',
        'SQL Developer',
        'Dashboard Builder',
        'Insight Storyteller'
    ];
    var phraseIndex = 0;
    var charIndex = 0;
    var isDeleting = false;
    var typeSpeed = 80;

    function typeEffect() {
        var currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typedElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 40;
        } else {
            typedElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 80;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 400; // Pause before typing next
        }

        setTimeout(typeEffect, typeSpeed);
    }

    typeEffect();

    // ==========================================
    // EXTRA 3: Animated Skill Bars on Scroll
    // ==========================================
    var skillFills = document.querySelectorAll('.skill-fill');
    var skillsAnimated = false;

    function animateSkills() {
        if (skillsAnimated) return;

        var skillsSection = document.getElementById('skills');
        var rect = skillsSection.getBoundingClientRect();
        var windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.75) {
            skillsAnimated = true;
            skillFills.forEach(function (bar) {
                var width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
            });
        }
    }

    // ==========================================
    // EXTRA 4: Project Filter
    // ==========================================
    var filterBtns = document.querySelectorAll('.filter-btn');
    var projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            // Update active button
            filterBtns.forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');

            var filter = btn.getAttribute('data-filter');

            projectCards.forEach(function (card) {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // ==========================================
    // Counter Animation (About section)
    // ==========================================
    var counters = document.querySelectorAll('.stat-number');
    var countersAnimated = false;

    function animateCounters() {
        if (countersAnimated) return;

        var aboutSection = document.getElementById('about');
        var rect = aboutSection.getBoundingClientRect();
        var windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.75) {
            countersAnimated = true;
            counters.forEach(function (counter) {
                var target = parseInt(counter.getAttribute('data-target'), 10);
                var current = 0;
                var increment = Math.ceil(target / 40);
                var timer = setInterval(function () {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    counter.textContent = current;
                }, 50);
            });
        }
    }

    // ==========================================
    // Fade-in on Scroll
    // ==========================================
    var fadeElements = document.querySelectorAll('.section');
    fadeElements.forEach(function (el) { el.classList.add('fade-in'); });

    function handleFadeIn() {
        var windowHeight = window.innerHeight;
        fadeElements.forEach(function (el) {
            var rect = el.getBoundingClientRect();
            if (rect.top < windowHeight * 0.85) {
                el.classList.add('visible');
            }
        });
    }

    // ==========================================
    // Navbar Scroll Effect
    // ==========================================
    var navbar = document.getElementById('navbar');

    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // ==========================================
    // Mobile Hamburger Menu
    // ==========================================
    var hamburger = document.getElementById('nav-hamburger');
    var navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('open');
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.classList.remove('open');
        });
    });

    // ==========================================
    // Back to Top Button
    // ==========================================
    var backToTop = document.getElementById('back-to-top');

    function handleBackToTop() {
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }

    backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ==========================================
    // Contact Form (prevent default)
    // ==========================================
    var contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var btn = contactForm.querySelector('button[type="submit"]');
        btn.textContent = 'Message Sent!';
        btn.style.background = '#2d8f5e';
        btn.style.borderColor = '#2d8f5e';
        setTimeout(function () {
            btn.textContent = 'Send Message';
            btn.style.background = '';
            btn.style.borderColor = '';
            contactForm.reset();
        }, 2500);
    });

    // ==========================================
    // Scroll Event Listener
    // ==========================================
    window.addEventListener('scroll', function () {
        handleNavbarScroll();
        handleFadeIn();
        animateSkills();
        animateCounters();
        handleBackToTop();
    });

    // Initial calls
    handleFadeIn();
    handleNavbarScroll();

})();
