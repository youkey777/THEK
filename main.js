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

// Story Background Animation - Luxurious Golden Particles
const storyBg = document.querySelector(".story-bg-anim");
if (storyBg) {
    storyBg.innerHTML = '';

    // Create multiple layers of animation elements

    // Layer 1: Floating golden orbs (large, slow)
    for (let i = 0; i < 15; i++) {
        const orb = document.createElement("div");
        orb.classList.add("golden-orb");
        storyBg.appendChild(orb);

        const size = Math.random() * 80 + 40; // 40-120px
        const xPos = Math.random() * 100;
        const yPos = Math.random() * 100;
        const duration = Math.random() * 25 + 20;
        const delay = Math.random() * 8;

        gsap.set(orb, {
            left: xPos + "%",
            top: yPos + "%",
            xPercent: -50,
            yPercent: -50,
            width: size,
            height: size,
            opacity: 0
        });

        // Fade in
        gsap.to(orb, {
            opacity: Math.random() * 0.15 + 0.05,
            duration: 3,
            delay: delay,
            ease: "power2.out"
        });

        // Floating movement
        gsap.to(orb, {
            x: `+=${Math.random() * 150 - 75}`,
            y: `+=${Math.random() * 100 - 50}`,
            duration: duration,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: delay
        });

        // Subtle pulse
        gsap.to(orb, {
            scale: 1.2,
            opacity: "+=0.05",
            duration: Math.random() * 5 + 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: delay
        });
    }

    // Layer 2: Shimmer particles (small, fast)
    for (let i = 0; i < 50; i++) {
        const shimmer = document.createElement("div");
        shimmer.classList.add("shimmer-particle");
        storyBg.appendChild(shimmer);

        const size = Math.random() * 4 + 2; // 2-6px
        const xPos = Math.random() * 100;
        const yPos = Math.random() * 100;
        const duration = Math.random() * 8 + 5;
        const delay = Math.random() * 10;

        gsap.set(shimmer, {
            left: xPos + "%",
            top: yPos + "%",
            xPercent: -50,
            yPercent: -50,
            width: size,
            height: size,
            opacity: 0
        });

        // Twinkle animation
        gsap.to(shimmer, {
            opacity: Math.random() * 0.8 + 0.2,
            duration: Math.random() * 2 + 1,
            delay: delay,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });

        // Drift upward
        gsap.to(shimmer, {
            y: `-=${Math.random() * 200 + 100}`,
            x: `+=${Math.random() * 60 - 30}`,
            duration: duration,
            repeat: -1,
            ease: "none",
            delay: delay
        });
    }

    // Layer 3: Flowing lines (elegant streaks)
    for (let i = 0; i < 8; i++) {
        const line = document.createElement("div");
        line.classList.add("flowing-line");
        storyBg.appendChild(line);

        const width = Math.random() * 150 + 100;
        const yPos = Math.random() * 80 + 10;
        const duration = Math.random() * 15 + 12;
        const delay = Math.random() * 5;

        gsap.set(line, {
            left: "-20%",
            top: yPos + "%",
            width: width,
            height: 1,
            opacity: 0
        });

        // Sweep across
        gsap.to(line, {
            left: "120%",
            opacity: 0.3,
            duration: duration,
            repeat: -1,
            ease: "power1.inOut",
            delay: delay,
            onRepeat: () => {
                gsap.set(line, { top: Math.random() * 80 + 10 + "%" });
            }
        });
    }

    // Layer 4: Diamond sparkles
    for (let i = 0; i < 20; i++) {
        const diamond = document.createElement("div");
        diamond.classList.add("diamond-sparkle");
        storyBg.appendChild(diamond);

        const size = Math.random() * 10 + 5;
        const xPos = Math.random() * 100;
        const yPos = Math.random() * 100;
        const delay = Math.random() * 15;

        gsap.set(diamond, {
            left: xPos + "%",
            top: yPos + "%",
            xPercent: -50,
            yPercent: -50,
            width: size,
            height: size,
            opacity: 0,
            rotation: 45,
            scale: 0
        });

        // Sparkle burst
        const sparkleTimeline = gsap.timeline({ repeat: -1, delay: delay });
        sparkleTimeline
            .to(diamond, {
                opacity: 0.9,
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            })
            .to(diamond, {
                opacity: 0,
                scale: 0.5,
                duration: 0.8,
                ease: "power2.in"
            })
            .to(diamond, {
                duration: Math.random() * 5 + 3
            });
    }
}
