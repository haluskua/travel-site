let controller;
let slideScene;

function animateSlides() {
  //Init Controller
  controller = new ScrollMagic.Controller();
  //Select some things
  const sliders = document.querySelectorAll(".slide");
  const nav = document.querySelector(".nav-header");
  //Loop

  sliders.forEach((slide) => {
    const revealImg = slide.querySelector(".reveal-img");
    const img = slide.querySelector("img");
    const revealText = slide.querySelector(".reveal-text");
    //GSAP
    // gsap.to(revealImg, 1.6, { x: "100%", opacity: 0.5 });
    // gsap.to(revealImg, 1.4, { scale: 1.7 });

    // also use Timeline to chain multiple animations
    const slideTl = gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" },
    });
    slideTl.fromTo(
      revealImg,
      { x: "0%", opacity: 0 },
      { x: "100%", opacity: 1 }
    );
    slideTl.fromTo(img, { scale: 2 }, { scale: 1 }, "-=1.5");
    slideTl.fromTo(revealText, { x: "0%" }, { x: "100%" }, "-=0.8");
    slideTl.fromTo(nav, { y: "-100%" }, { y: "0%" }, "-=0.5");
  });
}

animateSlides();
