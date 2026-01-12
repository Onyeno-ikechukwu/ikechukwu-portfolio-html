window.addEventListener("load", function() {
  const loader = document.getElementById("preloader");
  
  // This waits 1000ms (1 second) after the page is fully loaded
  setTimeout(function() {
    loader.style.opacity = "0"; // Fades it out smoothly
    
    // Completely remove it from the layout after the fade
    setTimeout(function() {
      loader.style.display = "none";
    }, 500); 
    
  }, 1500); 
});


gsap.from('.welcome', {duration: 5, y: "-50", delay: 1.5, ease: "elastic"})
gsap.from(".welcome0", {duration: 3, opacity: 0, delay: 1.5, stagger: 0.5})
gsap.from(".welcome1", {duration: 3, opacity: 0, delay: 5.5, stagger: 0.5})
gsap.from(".welcome2", {duration: 3, opacity: 0, delay: 9.5, stagger: 0.5})


 gsap.registerPlugin(ScrollTrigger);
  gsap.from(".second3i", {
    scrollTrigger: {
      trigger: ".second3i",
      start: "top 90%",    
      end: "bottom 20%",
      toggleActions: "play reverse play reverse",
    },
    duration: 1.5,
    opacity: 0,
    y: 50,
  });

  gsap.from(".second3ii", {
    scrollTrigger: {
      trigger: ".second3ii",
      start: "top 90%",    
      end: "bottom 20%",
      toggleActions: "play reverse play reverse",
    },
    duration: 1.5,
    opacity: 0,
    y: 50,
  });

  gsap.from(".second3iii", {
    scrollTrigger: {
      trigger: ".second3iii",
      start: "top 90%",    
      end: "bottom 20%",
      toggleActions: "play reverse play reverse", 
    },
    duration: 1.5,
    opacity: 0,
    y: 50,
  });

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".second5",
    start: "top 90%", // Starts when parent is 80% down the screen
    end: "bottom 10%",
    toggleActions: "play reverse play reverse",
  }
});

// Animate left child from -100% (off-screen left)
tl.from(".width", {
  x: -100, 
  opacity: 0,
  duration: 3
}, 0); // 0 means both start at the same time

// Animate right child from +100% (off-screen right)
tl.from(".img6", {
  x: 100, 
  opacity: 0,
  duration: 3
}, 0);