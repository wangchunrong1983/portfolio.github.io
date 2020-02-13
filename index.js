const barbara = document.querySelector('.barbara')
const slider = document.querySelector('.slider')
const logo = document.querySelector('#logo')
const menu = document.querySelector('.menu')
const headline = document.querySelector('.headline')

const t1 = new TimelineMax();

t1.fromTo(barbara, 2, {height: "0%"}, {height: "80%", ease: Sine.easeInOut})
  .fromTo(barbara, 2, {width: "100%"}, {width: "80%", ease: Sine.easeInOut})
  .fromTo(slider, 2, {x: "-100%"}, {x: "0%", ease: Sine.easeInOut}, "-=2")
  .fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
  
