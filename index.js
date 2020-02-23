const barbara = document.querySelector('.barbara')
const slider = document.querySelector('.slider')
const leftArm = document.querySelector('#Leftarm')
const rightArm = document.querySelector('#Rightarm')

const t1 = new TimelineMax();

t1.fromTo(barbara, 1, {height: "0%"}, {height: "100%", ease: Sine.easeInOut})
  .fromTo(barbara, 1, {width: "100%"}, {width: "100%", ease: Sine.easeInOut})
  .fromTo(slider, 2, {x: "-100%"}, {x: "0%", ease: Sine.easeInOut}, "-=2");
  


  window.sr = ScrollReveal();
  sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 200
  });

  sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 400
  });

  sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 400
  });

  sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 400
  });

