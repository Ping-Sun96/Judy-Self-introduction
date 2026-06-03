/* ============================================================
   Judy Sun — Professional Portfolio
   JavaScript: Navigation, Lightbox, Scroll Animations
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

    // --- DOM Elements ---
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const allNavLinks = document.querySelectorAll('.nav-link');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');
    const caseImages = document.querySelectorAll('.case-image');
    const revealElements = document.querySelectorAll('.reveal');
    const sections = document.querySelectorAll('section[id]');

    // ============================================================
    // NAVBAR SCROLL EFFECT
    // ============================================================
    function updateNavbar() {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', updateNavbar, { passive: true });
    updateNavbar(); // initial state

    // ============================================================
    // MOBILE NAV TOGGLE
    // ============================================================
    navToggle.addEventListener('click', function () {
        const isOpen = navLinks.classList.contains('active');
        if (isOpen) {
            closeMobileNav();
        } else {
            openMobileNav();
        }
    });

    function openMobileNav() {
        navLinks.classList.add('active');
        navToggle.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileNav() {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Close mobile nav when clicking a link
    allNavLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (navLinks.classList.contains('active')) {
                closeMobileNav();
            }
        });
    });

    // ============================================================
    // ACTIVE NAV LINK HIGHLIGHT (Intersection Observer)
    // ============================================================
    const observerOptions = {
        root: null,
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                allNavLinks.forEach(function (link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(function (section) {
        observer.observe(section);
    });

    // ============================================================
    // LIGHTBOX
    // ============================================================
    caseImages.forEach(function (imgContainer) {
        imgContainer.addEventListener('click', function () {
            const src = imgContainer.getAttribute('data-src');
            if (src) {
                openLightbox(src);
            }
        });
    });

    function openLightbox(src) {
        lightboxImage.src = src;
        lightboxImage.alt = 'Preview';
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        // Delay clearing src so fade-out animation is visible
        setTimeout(function () {
            lightboxImage.src = '';
        }, 300);
    }

    lightboxClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    // ============================================================
    // SCROLL REVEAL ANIMATION
    // ============================================================
    const revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1
    });

    // Observe elements with reveal class
    revealElements.forEach(function (el) {
        revealObserver.observe(el);
    });

    // Also observe timeline items, case cards, about cards, and skill categories
    var animatableSelectors = [
        '.timeline-item',
        '.case-card',
        '.about-card',
        '.skills-category'
    ];

    animatableSelectors.forEach(function (selector) {
        document.querySelectorAll(selector).forEach(function (el) {
            el.classList.add('reveal');
            revealObserver.observe(el);
        });
    });

    // ============================================================
    // SMOOTH SCROLL FOR ALL ANCHOR LINKS (fallback for older browsers)
    // ============================================================
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var navHeight = navbar.offsetHeight;
                var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

});
