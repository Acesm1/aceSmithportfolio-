// ==================== COOL TYPEWRITER + EFFECTS ====================

// Background Image Shuffle
const bgImages = [
    'Ace.png',
    // Add more images here later for better shuffle
];

let currentBg = 0;
function changeBackground() {
    const bg = document.getElementById('bg-shuffle');
    if (bg) {
        bg.style.backgroundImage = `url('${bgImages[currentBg]}')`;
        currentBg = (currentBg + 1) % bgImages.length;
    }
}

// Advanced Typewriter Effect
function coolTypewriter(elementId, text, speed = 60, callback) {
    const el = document.getElementById(elementId);
    if (!el) return;

    let i = 0;
    el.textContent = '';

    function type() {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;

            // Random glitch effect on some characters
            if (Math.random() > 0.85) {
                el.classList.add('glitch-text');
                setTimeout(() => el.classList.remove('glitch-text'), 80);
            }

            setTimeout(type, speed + Math.random() * 30); // Natural variation
        } else if (callback) {
            callback();
        }
    }
    type();
}

// Main initialization
document.addEventListener("DOMContentLoaded", () => {

    // Background shuffle
    if (bgImages.length > 0) {
        changeBackground();
        setInterval(changeBackground, 8000);
    }

    // Cool Typewriter for Hero Title
    const heroTitle = document.getElementById('typewriter');
    if (heroTitle) {
        coolTypewriter('typewriter', "Cybersecurity Portfolio — ace-Smith001", 70);
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Intersection Observer for Fade-in
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
    window.addEventListener("scroll", () => {
        if (toTop) {
            toTop.style.display = window.scrollY > 400 ? "block" : "none";
        }
    });

    if (toTop) {
        toTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Auto Year
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});// script.js

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Typewriter effect
function typeWriter(text, elementId, delay = 75) {
  const el = document.getElementById(elementId);
  let i = 0;
  function type() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, delay);
    }
  }
  el.innerHTML = "";
  type();
}
document.addEventListener("DOMContentLoaded", () => {
  typeWriter("Cybersecurity Portfolio — ace-Smith001", "typewriter");


function typewriter(element, text, speed) {
  let i = 0;
  element.textContent = ''; // Clear existing text

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Example usage:
const h2Element = document.getElementById('myH2'); // Get the h2 element by its ID
const textToType = "Featured Project: Information Disclosure Scanner";
const typingSpeed = 80; // milliseconds per character

typewriter(h2Element, textToType, typingSpeed);



  
  // Auto-year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Scroll animation for sections
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade-in").forEach(section => {
    observer.observe(section);
  });

  // Scroll to top button
  const topBtn = document.getElementById("toTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
// Background Image Shuffle (Anime style)
const bgImages = ['Ace.png', 'Ace.png', /* add more anime/cyber images you have */];
let currentBg = 0;

function changeBackground() {
    const bg = document.getElementById('bg-shuffle');
    bg.style.backgroundImage = `url('${bgImages[currentBg]}')`;
    currentBg = (currentBg + 1) % bgImages.length;
}

setInterval(changeBackground, 7000);
changeBackground();

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typewriter for hero
function typewriter(element, text, speed = 80) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Intersection Observer for fade-ins
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Scroll to top
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
    toTop.style.display = window.scrollY > 500 ? 'block' : 'none';
});

toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Auto year
document.getElementById('year').textContent = new Date().getFullYear();
