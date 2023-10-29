const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

gsap.from(".nlink", {
  stagger: 0.2,
  y: 10,
  duration: 1,
  ease: Power2,
  opacity: 0,
});

Shery.textAnimate("#heading h1", {
  style: 2,
  y: 10,
  delay: 0.2,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

gsap.from(".anim", {
  stagger: 0.3,
  y: 50,
  opacity: 0,
  duration: 1,
  ease: Expo,
});

Shery.imageEffect("#imgtxt img", {
  style: 3,
  config: {
    uFrequencyX: { value: 14.05, range: [0, 100] },
    uFrequencyY: { value: 5.79, range: [0, 100] },
    uFrequencyZ: { value: 26.45, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 15.58 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.7500071491892819 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.56, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

Shery.imageEffect(".imgef img", {
  style: 5,
  config: {
    a: { value: 1.24, range: [0, 30] },
    b: { value: -0.85, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.6315472606863335 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

gsap.from("#imgtxt img", {
  y: "70",
  opacity: 0,
  duration: 2,
  ease: Expo.easeInOut,
});

Shery.imageEffect("#bimg", {
  style: 5,
  config: {
    a: { value: 0.74, range: [0, 30] },
    b: { value: -0.98, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 2.345046494992847 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 2.85, range: [1, 15] },
    durationOut: { value: 0.63, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 1.07, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 31 } },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.33, range: [0, 2] },
    noise_scale: { value: 7.44, range: [0, 100] },
  },
  gooey: true,
});

document.querySelector("#ftxt button")
.addEventListener("mouseover",function(){
    gsap.to("#nav6 video",{
      opacity:1,
      duration:1,
      ease:Power4
    })
})

document.querySelector("#ftxt button")
.addEventListener("mouseleave",function(){
  gsap.to("#nav6 video",{
    opacity:0,
    duration:1,
    ease:Power4
  })
})