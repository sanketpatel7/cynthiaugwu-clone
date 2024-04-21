var timeout;

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

const firstpageani = () => {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      delay: -1,
      duration: 2,
      stagger: 0.2,
    })
    .from("#herofooter", {
      y: -10,
      opacity: 0,
      delay: -0.5,
      duration: 1,
      ease: Expo.easeInOut,
    });
};

const cursoreni = () => {
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);
    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    cursor(xscale, yscale);

    timeout = setTimeout(function (det) {
      var cur = document.getElementById("minicircle");
      cur.style.transform = `translate(${det.clientX}px, ${det.clientY}px) scale(0,0)`;
    }, 100);
  });
};

function cursor(xscale, yscale) {
  window.addEventListener("mousemove", function (det) {
    var cur = document.getElementById("minicircle");

    // 1st
    // gsap.to(cur, {
    //   left: det.clientX + "px",
    //   top: det.clientY + "px",
    //   ease: Power4,
    // });

    // 2nd
    cur.style.transform = `translate(${det.clientX}px, ${det.clientY}px) scale(${xscale}, ${yscale})`;
  });
}

cursor();
firstpageani();
cursoreni();

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;
  // console.log(elem);
  elem.addEventListener("mousemove", function (dets) {
    // console.log(dets);

    // console.log(dets.clientY - elem.getBoundingClientRect().top);
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    // console.log(rotate - diffrot);
    // console.log(gsap.utils.clamp(20, 30, diffrot));

    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power1,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.8),
    });
  });
});

document.querySelectorAll(".elem").forEach(function (elem) {
  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power1,
    });
  });
});
