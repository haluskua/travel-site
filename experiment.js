// [[[[[[[[[ one way of animating with window scroll]]]]]]]]]

// const hikeExp = document.querySelector(".hike-exp");

// window.addEventListener("scroll", scrollReveal);

// function scrollReveal() {
//   const hikePos = hikeExp.getBoundingClientRect().top;
//   const windowHeight = window.innerHeight / 1.8;
//   if (hikePos < windowHeight) {
//     hikeExp.style.color = "red";
//   }
// }

// [[[[[[[[[ intersection observer]]]]]]]]]

// const slide = document.querySelector(".slide");

// let options = {
//   threshold: 0.5,
// };

// let observer = new IntersectionObserver(slideAnim, options);

// function slideAnim(entries) {
//   entries.forEach((entry) => {
//     console.log(slide);
//   });
// }

// observer.observe(slide);

// [[[[[[[[[[[[[[[[[[[[ scroll magic]]]]]]]]]]]]]]]]]]]]

// const controller = new ScrollMagic.Controller();

// const exploreScene = new ScrollMagic.Scene({
//   triggerElement: ".hike-exp",
//   triggerHook: 0.5,
// })
//   .addIndicators({colorStart: "orange", colorTrigger: "white"})
//   .setClassToggle('.hike-exp', 'active')
//   .addTo(controller);
