// ==================== ace-Smith001 - Cool Portfolio Script ====================

// Background Image Shuffle
const bgImages = [
    'Ace.png',
    // Add more images here (e.g. 'cyber-bg2.jpg', 'anime-bg.jpg') for better effect
];

let currentBg = 0;
function changeBackground() {
    const bg = document.getElementById('bg-shuffle');
    if (bg && bgImages.length > 0) {
        bg.style.backgroundImage = `url('${bgImages[currentBg]}')`;
        currentBg = (currentBg + 1) % bgImages.length;
    }
}

// Advanced Cool Typewriter with Glitch
function coolTypewriter(elementId, text, speed = 65) {
    const el = document.getElementById(elementId);
    if (!el) return;

    let i = 0;
    el.textContent = '';

    function type() {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;

            // Random glitch effect
            if (Math.random() > 0.82) {
                el.classList.add('glitch-text');
                setTimeout(() => el.classList.remove('glitch-text'), 120);
            }
            setTimeout(type, speed + Math.random() * 40);
        }
    }
    type();
}

// Main Init
document.addEventListener("DOMContentLoaded", () => {

    // Start Background Shuffle
    changeBackground();
    setInterval(changeBackground, 7500);

    // Cool Typewriter Effect
    coolTypewriter('typewriter', "Cybersecurity Portfolio — ace-Smith001", 70);

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Fade-in Animation Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.fade-in').forEach(section => {
        observer.observe(section);
    });

    // Scroll to Top Button
    const toTop = document.getElementById('toTop');
    if (toTop) {
        window.addEventListener("scroll", () => {
            toTop.style.display = window.scrollY > 400 ? "block" : "none";
        });

        toTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Auto Year
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});
// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}
