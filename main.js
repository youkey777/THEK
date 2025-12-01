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
    // Animate hamburger lines if needed, or just toggle class
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

gsap.from(".story-image", {
    scrollTrigger: {
        trigger: ".story-image",
        start: "top 75%",
    },
    x: 50,
    opacity: 0,
    duration: 1,
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
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        storyBg.appendChild(particle);

        gsap.set(particle, {
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.2,
            position: "absolute",
            width: "10px",
            height: "10px",
            backgroundColor: "#C5A059",
            borderRadius: "50%",
            filter: "blur(5px)"
        });

        gsap.to(particle, {
            y: "-=100",
            x: "+=50",
            rotation: 360,
            duration: Math.random() * 10 + 10,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }
}
