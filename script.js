



Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});


function shape(){
  const bouncyCircle = new mojs.Shape({
    parent:'.no1',
    shape:        'polygon',
    points:       5,
    left:         '75%',
    fill:         { 'deeppink' : '#00F87F' },
    // x:            { 'rand(-100%, -200%)' : 0  },
    rotate:        { 0: 'rand(0, 360)' },
    radius:       20,
  
    duration:     1500,
    repeat:       999,
  });
  
  bouncyCircle.play()
  const bouncyCircle1 = new mojs.Shape({
    parent:       '.no2',
    shape:        'circle',
    fill:         {'#F64040': '#A6A999'},
    radius:       {20: 40},
    duration:     2000,
    isYoyo:       true,
    isShowStart:  true,
    easing:       'elastic.inout',
    repeat:       999,
  });
  
  bouncyCircle1.play()
  
  const bouncyCircle2 = new mojs.Shape({
    parent:       '.no3',
    shape:        'rect',
  left:         '50%',
  fill:         'none',
  radius:       30,
  stroke:       { 'rgba(0,255,255, 1)' : 'magenta' },
  strokeWidth:  { 10: 0 },
  strokeDasharray: '100%',
  strokeDashoffset: { '-100%' : '100%' },
  rotate:        { 0: 180 },

  duration:     1500,
  repeat:       999,
  });
  
  bouncyCircle2.play()
  const bouncyCircle3 = new mojs.Shape({
    parent:       '.no4',
    shape:        'polygon',
    fill:         {'#F64040': '#A6A999'},
    radius:       {20: 50},
    duration:     2000,
    isYoyo:       true,
    isShowStart:  true,
    rotate:        { 0: 180 },
    easing:       'elastic.inout',
    repeat:       999,
  });
  
  bouncyCircle3.play()
  
  
}
shape();







function horizontal(){
  gsap.registerPlugin(ScrollTrigger);
const tl=gsap.timeline();
tl.to(".wrapper",5,{
  x:-window.innerWidth
})

ScrollTrigger.create({
  animation:tl,
  trigger:".wrapper",
  start:"center center center",
  end:"+=1000 ",
  scrub:true,
  pin:true,
  // markers: true
  });

}
horizontal();
 
function shery(){
  Shery.textAnimate(".do" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
 
  
  Shery.imageMasker(".right>a>img" /* Element to target.*/, {
    //Parameters are optional.
    mouseFollower: true,
    text: "PCM",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.imageEffect(".image", {
    style: 6,
    debug: true,
  });
  Shery.imageMasker(".sec-home-image>a>img" /* Element to target.*/, {
    //Parameters are optional.
    mouseFollower: true,
    text: "PCM",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  
  
}
shery();





gsap.from(".nav",{
  opacity: 0,
  y: -100,
  duration: 1,
  scrub:true,
  stagger:.5,
  
})
var tl2 = gsap.timeline({
  scrollTrigger: {
      trigger: '.sec-home',
      start: 'top center',
      scrub: 1,
      // markers: true,
      pin: true,
      end:"bottom",
      // markers: {startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20}
  }
})
tl2
  .to(" .sec-home-text", {
 
      scale: 1,
      duration: 1,
      ease: Power1,

      

  }, "sametimemechalege")

  var tl3=gsap.timeline({
    scrollTrigger: {
      trigger: '.third',
      start: 'top 0%',
      scrub: 1,
      // markers: true,
      pin: true,
      end:"bottom -195%",
      // markers: {startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20}
    }
  })
  tl3.to(" .circle-1", {
    y:-100,
    x:450,
    scale: 1,
    duration: 1,
    ease: Power1,
    delay:.5,
  }, "sametimemechalege")
  tl3.to(" .circle-2", {
    y:-100,
    x:-445,
    scale: 1,
    duration: 1,
    ease: Power1,
    delay:.5,
  }, "sametimemechalege")
 
  tl3.to(" .circle-2", {
  
    scale: 5,
    duration: 1,
    ease: Power1,
    delay:.5,
  }, "hello")
  tl3.to(" .circle-2>h1", {
  
    opacity:0,
    ease: Power1,
    delay:.5,
  }, "hello")
  tl3.to(" .circle-2-box", {
  
    opacity:1,
    ease: Power1,
    
  }, "hello1")

  var tl4=gsap.timeline({
    scrollTrigger: {
      trigger: '.footer',
      start: 'top 0%',
      scrub: 1,
      // markers: true,
      pin: true,
      end:"bottom 105%",
      // markers: {startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20}
    }
  })
  tl4.to(" .nav", {
    opacity:0
  })

  const tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".footer",
        start: "top 15%", // Start the animation when the box reaches the center of the viewport
        end: "bottom 75%",   // End the animation when the box scrolls out of view
        scrub: true,   
        // markers:true      // Smooth scrolling effect
    }
});

// Define the gradient color transition
tl5.to(".footer", {
    background: "linear-gradient(to top, rgb(255, 182, 193), rgb(173, 216, 230))", // From full yellow to transparent yellow
    duration: 1,
    ease:Power1, // Duration for each gradient change
});
gsap.to(".footer", {
  opacity: 1,
  duration: 1,
  ease: Power1, // Duration for each gradient change
})