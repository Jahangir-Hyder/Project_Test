// script.js

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// ============ Hero Section Entrance ============
gsap.from(".left", {
  duration: 1.2,
  x: -100,
  opacity: 0,
  ease: "power3.out",
});

gsap.from(".right", {
  duration: 1.2,
  x: 100,
  opacity: 0,
  ease: "power3.out",
  delay: 0.2,
});

// ============ Features Grid ============
gsap.from(".card", {
  scrollTrigger: {
    trigger: ".features",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 0.8,
  opacity: 0,
  y: 50,
  stagger: 0.2,
  ease: "power2.out",
});

// ============ Connection Section ============
gsap.from(".phones", {
  scrollTrigger: {
    trigger: ".connection-section",
    start: "top 75%",
  },
  x: -80,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

gsap.from(".text-features", {
  scrollTrigger: {
    trigger: ".text-features",
    start: "top 80%",
  },
  x: 80,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

// ============ Install Steps ============
gsap.from(".step", {
  scrollTrigger: {
    trigger: ".install-section",
    start: "top 80%",
  },
  y: 40,
  opacity: 0,
  stagger: 0.3,
  duration: 1,
  ease: "power2.out",
});

// ============ Custom Hero (Donate) ============
gsap.from(".custom-hero-text", {
  scrollTrigger: {
    trigger: ".custom-hero",
    start: "top 80%",
  },
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

gsap.from(".custom-hero-image", {
  scrollTrigger: {
    trigger: ".custom-hero",
    start: "top 80%",
  },
  x: 100,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  ease: "power2.out",
});

// ============ Testimonials ============
gsap.from(".custom-testimonial", {
  scrollTrigger: {
    trigger: ".custom-testimonials",
    start: "top 85%",
  },
  opacity: 0,
  y: 30,
  stagger: 0.2,
  duration: 0.8,
  ease: "power2.out",
});

// ============ Download Section ============
gsap.from(".custom-download-text", {
  scrollTrigger: {
    trigger: ".custom-download-section",
    start: "top 80%",
  },
  x: -80,
  opacity: 0,
  duration: 1,
});

gsap.from(".custom-download-images", {
  scrollTrigger: {
    trigger: ".custom-download-section",
    start: "top 80%",
  },
  x: 80,
  opacity: 0,
  duration: 1,
  delay: 0.2,
});

// ============ Hover Effects ============
document.querySelectorAll(".card, .feature, .step, .custom-testimonial").forEach(el => {
  el.addEventListener("mouseenter", () => {
    gsap.to(el, {
      scale: 1.03,
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
      duration: 0.3,
      ease: "power1.out",
    });
  });

  el.addEventListener("mouseleave", () => {
    gsap.to(el, {
      scale: 1,
      boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
      duration: 0.3,
      ease: "power1.inOut",
    });
  });
});

// ============ Donate Button Click (Sample Interaction) ============
function donateNow() {
  alert("Thank you for your support!");
}
