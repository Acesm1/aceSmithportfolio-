// script.js

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

  function typeWriter(element, text, speed i = 0) {
  if (i < text.length) {
    element.innerHTML += text.charAt(i);
    i++;
    setTimeout(function() {
      typeWriter(element, text, speed, i);
    }, speed);
  }
  }
      const textElement = document.getElementById("myText");
    const textToType = "Featured Project: Information Disclosure Scanner";
    const typingSpeed = 200; // Adjust as needed
    typeWriter(textElement, textToType, typingSpeed);
  
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
