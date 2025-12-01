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

// Scroll Animations - シンプルなフェードインのみ（フェードアウトなし）
gsap.utils.toArray(".section-title, .section-subtitle").forEach(target => {
    gsap.from(target, {
        scrollTrigger: {
            trigger: target,
            start: "top 85%",
            once: true
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });
});

gsap.utils.toArray(".value-card").forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 90%",
            once: true
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.1,
        ease: "power2.out"
    });
});

gsap.from(".concept-text-vertical p", {
    scrollTrigger: {
        trigger: ".concept-text-vertical",
        start: "top 80%",
        once: true
    },
    y: 20,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
});

gsap.from(".story-text p", {
    scrollTrigger: {
        trigger: ".story-text",
        start: "top 80%",
        once: true
    },
    y: 15,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "power2.out"
});

gsap.utils.toArray(".time-slot").forEach((slot, i) => {
    gsap.from(slot, {
        scrollTrigger: {
            trigger: slot,
            start: "top 90%",
            once: true
        },
        x: -20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
    });
});

gsap.from(".step", {
    scrollTrigger: {
        trigger: ".flow-steps",
        start: "top 85%",
        once: true
    },
    y: 20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out"
});

gsap.utils.toArray(".review-card").forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 90%",
            once: true
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.1,
        ease: "power2.out"
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

// Story Background Animation - Elegant Flowing Golden Light
const storyBg = document.querySelector(".story-bg-anim");
if (storyBg) {
    storyBg.innerHTML = '';

    // Layer 1: 優雅な横方向のウェーブ（流線的）
    for (let i = 0; i < 6; i++) {
        const wave = document.createElement("div");
        wave.classList.add("golden-wave");
        storyBg.appendChild(wave);

        const yPos = 15 + i * 15; // 均等に配置
        const duration = 20 + i * 3; // それぞれ異なる速度
        const delay = i * 2;

        gsap.set(wave, {
            left: "-100%",
            top: yPos + "%",
            opacity: 0
        });

        // 滑らかな横移動
        gsap.to(wave, {
            left: "100%",
            opacity: 0.6,
            duration: duration,
            repeat: -1,
            ease: "none",
            delay: delay
        });
    }

    // Layer 2: 優雅に浮遊するオーブ（大きくゆっくり）
    for (let i = 0; i < 8; i++) {
        const orb = document.createElement("div");
        orb.classList.add("elegant-orb");
        storyBg.appendChild(orb);

        const size = 100 + Math.random() * 150; // 100-250px
        const xPos = Math.random() * 100;
        const yPos = Math.random() * 100;
        const duration = 30 + Math.random() * 20;

        gsap.set(orb, {
            left: xPos + "%",
            top: yPos + "%",
            xPercent: -50,
            yPercent: -50,
            width: size,
            height: size,
            opacity: 0
        });

        // ゆっくりフェードイン
        gsap.to(orb, {
            opacity: 0.12,
            duration: 4,
            delay: i * 0.5,
            ease: "power2.out"
        });

        // なめらかな浮遊
        gsap.to(orb, {
            x: `+=${Math.random() * 80 - 40}`,
            y: `+=${Math.random() * 60 - 30}`,
            duration: duration,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.5
        });

        // 呼吸するようなパルス
        gsap.to(orb, {
            scale: 1.15,
            opacity: 0.18,
            duration: 8 + Math.random() * 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.5
        });
    }

    // Layer 3: 縦に流れる光のストリーム
    for (let i = 0; i < 5; i++) {
        const stream = document.createElement("div");
        stream.classList.add("light-stream");
        storyBg.appendChild(stream);

        const xPos = 15 + i * 18; // 均等に配置
        const height = 150 + Math.random() * 100;
        const duration = 12 + Math.random() * 8;
        const delay = i * 3;

        gsap.set(stream, {
            left: xPos + "%",
            top: "-20%",
            height: height,
            opacity: 0
        });

        // 上から下への流れ
        gsap.to(stream, {
            top: "120%",
            opacity: 0.4,
            duration: duration,
            repeat: -1,
            ease: "power1.inOut",
            delay: delay
        });
    }

    // Layer 4: 繊細な光の粒子（少なめで上品に）
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement("div");
        particle.classList.add("light-particle");
        storyBg.appendChild(particle);

        const size = 3 + Math.random() * 4; // 3-7px
        const xPos = Math.random() * 100;
        const yPos = Math.random() * 100;
        const duration = 15 + Math.random() * 10;
        const delay = Math.random() * 10;

        gsap.set(particle, {
            left: xPos + "%",
            top: yPos + "%",
            xPercent: -50,
            yPercent: -50,
            width: size,
            height: size,
            opacity: 0
        });

        // ゆっくりとした明滅
        gsap.to(particle, {
            opacity: 0.5 + Math.random() * 0.3,
            duration: 3 + Math.random() * 2,
            delay: delay,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // なめらかな漂い
        gsap.to(particle, {
            x: `+=${Math.random() * 40 - 20}`,
            y: `-=${Math.random() * 80 + 40}`,
            duration: duration,
            repeat: -1,
            ease: "none",
            delay: delay
        });
    }
}
