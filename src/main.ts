

import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);

// HERO PARALLAX & REVERSAL
// scrub: true ensures it plays back when scrolling up
gsap.to(".hero-title", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    // scrub: 1
    scrub: true
  },
  // scale: 2.5,
  scale: 2,
  filter: "blur(30px)",
  opacity: 0,
  ease: "none"
  // y: -100
});

// FULL IMAGE ZOOM PARALLAX
gsap.from(".about-full-img img", {
  scrollTrigger: {
    trigger: ".about-full-img",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  },
  scale: 1.4,
  ease: "none"
});

// Fade in the transition text
gsap.from(".text-wrap", {
  scrollTrigger: {
    trigger: ".transition-text",
    start: "top 80%",
    end: "top 20%",
    scrub: true,
  },
  opacity: 0,
  y: 50,
});

// Parallax the boxes so they move at different speeds while scrolling
gsap.to(".pos-up", {
  scrollTrigger: {
    trigger: ".work-grid-section",
    scrub: 1
  },
  y: -50
});

gsap.to(".pos-down", {
  scrollTrigger: {
    trigger: ".work-grid-section",
    scrub: 1
  },
  y: 50
});
// Footer Reveal
const footerTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".calendly-footer",
    start: "top 80%", // Starts when footer enters view
  }
});

footerTl.from(".footer-title", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
})
.from(".footer-content", {
  y: 30,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
}, "-=0.6"); 