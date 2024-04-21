const menu = () => {
  var click = true;

  if (click === true) {
    // var menus = document.querySelector(".menus");
    // var navmenu = document.querySelector(".navmenu");

    // Create a new GSAP timeline
    var tl = gsap.timeline();

    // Add the movement animation to the timeline
    tl.to(".menus", {
      x: 0,
      y: -15,
      stagger: 0.2,
    });

    // Add the fade-out animation to the timeline, starting after the movement animation completes
    tl.to(
      ".navmenu",
      {
        // opacity: 0,
        visibility: "hidden",
        duration: 1,
      },
      ">"
    ); // ">"" means after the previous animation

    // menus.style.transform = "translateX(0%)";
    // navmenu.style.display = "none";
    // click = false;
  } else {
    // navmenu.style.display = "initial";
    // click = true;
  }
};
