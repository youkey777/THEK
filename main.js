import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Loader
window.addEventListener("load", () => {
    const tl = gsap.timeline();

    tl.to(".loader-text", {
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: "power2.out"
    })
        .to(".loader", {
            height: 0,
            duration: 1,
            ease: "power4.inOut"
        })
        .from(".hero-title .line", {
            y: "100%",
            duration: 1.5,
            stagger: 0.2,
            ease: "power4.out"
        }, "-=0.5")
        .to(".hero-subtitle", {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out"
        }, "-=1")
        .to(".scroll-indicator", {
            opacity: 1,
            duration: 1
        }, "-=1")
        .to(".scroll-indicator .line", {
            scaleY: 1,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        }, "-=1");
});

// Header Scroll Effect
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});

// Scroll Animations
gsap.utils.toArray(".section-title, .section-subtitle").forEach(target => {
    gsap.from(target, {
        scrollTrigger: {
            trigger: target,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});

gsap.utils.toArray(".value-card").forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.2,
        ease: "power3.out"
    });
});

gsap.from(".concept-text-vertical p", {
    scrollTrigger: {
        trigger: ".concept-text-vertical",
        start: "top 70%",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out"
});

gsap.from(".story-text p", {
    scrollTrigger: {
        trigger: ".story-text",
        start: "top 75%",
    },
    y: 20,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
});

gsap.utils.toArray(".time-slot").forEach((slot, i) => {
    gsap.from(slot, {
        scrollTrigger: {
            trigger: slot,
            start: "top 85%",
        },
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    });
});

gsap.from(".step", {
    scrollTrigger: {
        trigger: ".flow-steps",
        start: "top 80%",
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
});

gsap.utils.toArray(".review-card").forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.2,
        ease: "power3.out"
    });
});

// Parallax Hero
gsap.to(".hero-bg", {
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    y: 200,
    ease: "none"
});

// Story Background Animation
const storyBg = document.querySelector(".story-bg-anim");
if (storyBg) {
    storyBg.innerHTML = ''; // Clear existing

    const particleCount = 60; // Increased count

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        storyBg.appendChild(particle);

        // Random properties
        const size = Math.random() * 15 + 5; // 5-20px
        const xPos = Math.random() * 100;
        const yPos = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;

        // Initial State (Hidden)
        gsap.set(particle, {
            left: xPos + "%",
            top: yPos + "%",
            xPercent: -50,
            yPercent: -50,
            width: size,
            height: size,
            position: "absolute",
            backgroundColor: "#C5A059",
            borderRadius: "50%",
            filter: `blur(${Math.random() * 4 + 2}px)`,
            boxShadow: "0 0 10px 2px rgba(197, 160, 89, 0.3)",
            opacity: 0,
            scale: 0
        });

        // Appearance Animation (Emerge)
        gsap.to(particle, {
            opacity: Math.random() * 0.5 + 0.2, // Max 0.7 to keep text readable
            scale: Math.random() * 0.5 + 0.5,
            duration: 2,
            delay: delay,
            ease: "power2.out"
        });

        // Floating Animation (Continuous)
        gsap.to(particle, {
            x: `+=${Math.random() * 100 - 50}`,
            y: `+=${Math.random() * 100 - 50}`,
            rotation: Math.random() * 360,
            duration: duration,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: delay // Sync with appearance
        });

        // Pulse Animation (Subtle glow)
        gsap.to(particle, {
            opacity: "+=0.2",
            scale: "+=0.2",
            duration: Math.random() * 3 + 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: delay
        });
    }
}
