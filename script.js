function firstpage(){
  const loadstart= performance.now();
  window.onload = function(){
    const loadend=performance.now();
    const loadTime=loadend-loadstart;
    console.log("Page loaded in "+loadTime+" milliseconds");

    const page =document.querySelector('.start');
    page.style.transition = 'height 0.0002s ease-out, opacity 0.2s ease-out';
    page.style.transitionDuration = `${loadTime}ms`;
    page.style.height = '0%';
    page.style.opacity = '0';
  }
}
firstpage();



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








function horizontal() {
  // Check if the screen width is greater than 768px (typical breakpoint for desktop)
  if (window.innerWidth > 768) {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    // This line creates a GSAP animation that moves the ".wrapper" element
    // horizontally over a duration of 5 seconds. The '5' represents the duration in seconds.
    tl.to(".wrapper", 5, {
      x: -window.innerWidth
    })

    ScrollTrigger.create({
      // This code configures a ScrollTrigger for a horizontal scrolling animation
      animation: tl, // Links the timeline animation to this ScrollTrigger
      trigger: ".wrapper", // Element that triggers the animation
      start: "center center center", // Animation starts when the trigger element's center reaches the viewport's center
      end: "+=1000 ", // Animation ends 1000 pixels after the start point
      scrub: true, // Enables smooth scrolling animation tied to scroll position
      pin: true, // Pins the trigger element during the animation
      // markers: true // Uncomment to show visual markers for debugging
    });
  } else {
    // Clear any existing ScrollTrigger instances for .wrapper
    ScrollTrigger.getAll().forEach(instance => {
      if (instance.vars.trigger === ".wrapper") {
        instance.kill();
      }
    });
    
    // Reset the wrapper position
    gsap.set(".wrapper", { x: 0 });
    
    // Hide section 2
    gsap.set(".second", { display: "block" });
  }
}

// Call the function initially
horizontal();

// Add event listener to check on window resize
window.addEventListener('resize', horizontal);


 
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