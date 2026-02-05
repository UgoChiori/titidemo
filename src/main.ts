

import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);


window.addEventListener('DOMContentLoaded', () => {

  gsap.fromTo(".hero-title", 
    { opacity: 0 }, 
    { 
      opacity: 1, 
      duration: 2.5, 
      ease: "power1.inOut", 
      delay: 0.3,
      onComplete: () => {
       
        initScrollAnimation();
      }
    }
  );
});

function initScrollAnimation() {
  gsap.to(".hero-title", {
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom center", 
      scrub: true,
      invalidateOnRefresh: true 
    },
    scale: 2,
    filter: "blur(30px)",
    opacity: 0,
    ease: "none"
  });
}


gsap.from(".about-section", {
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 85%", 
    end: "top 50%",   
    scrub: 1.5,    
  },
  opacity: 0,
  y: 50,            
  duration: 1.2,
  ease: "power2.out"
});

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

gsap.to(".impact-words", {
  scrollTrigger: {
    trigger: ".transition-text",
    start: "top center",   
    end: "bottom top",    
    scrub: 1,           
  },
  scale: 1.8,              
  filter: "blur(15px)",   
  opacity: 0,   
  ease: "power2.inOut"
});

gsap.from(".about-text-content p", {
  scrollTrigger: {
    trigger: ".about-text-content",
    start: "top 90%",
    toggleActions: "play none none reverse" 
  },
  opacity: 0,
  y: 20,
  duration: 1,
  ease: "power3.out"
});

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

const footerTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".calendly-footer",
    start: "top 80%", 
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