$(function () {
  Splitting();
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.matchMedia({
    "(min-width:1220px)": function () {
      /*intro*/
      gsap.fromTo(
        ".intro .intro_inner .left .picture",
        { x: -2000 },
        { x: 0, duration: 1 }
      );

      gsap.fromTo(
        ".intro .intro_inner .right .textBox",
        { x: 2000 },
        { x: 0, y: -200, duration: 1 }
      );

      let t1 = gsap.timeline();
      t1.fromTo(
        ".intro .intro_inner .right .info li:first-child",
        { y: 1000 },
        { y: -100, duration: 1 },
        0.2
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:nth-child(2)",
        { y: 1000 },
        { y: -100, duration: 1 },
        0.4
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:nth-child(3)",
        { y: 1000 },
        { y: -100, duration: 1 },
        0.6
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:nth-child(4)",
        { y: 1000 },
        { y: -100, duration: 1 },
        0.8
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:last-child",
        { y: 1000 },
        { y: -100, duration: 1 },
        1
      );

      /*about*/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".about",
            start: "top 70%",
            end: "top 70%",
            scrub: 2,
            markers: true,
          },
        })
        .fromTo(
          ".about .about_inner .page .Title",
          { x: -500 },
          { x: 0, duration: 5 },
          0
        )
        .fromTo(
          ".about .about_inner .page .menu_bar",
          { x: 500 },
          { x: 0, duration: 5 },
          0
        )
        .fromTo(
          ".about .about_inner .line",
          { x: 2000 },
          { x: 0, duration: 5 }
        );
    },

    "(max-width:1219px)": function () {
      gsap.fromTo(
        /*intro*/
        ".intro .intro_inner .left .picture",
        { x: -2000 },
        { x: 0, duration: 1 }
      );

      gsap.fromTo(
        ".intro .intro_inner .right .textBox",
        { x: 2000, y: -200 },
        { x: 0, y: -200, duration: 1 }
      );

      let t1 = gsap.timeline();
      t1.fromTo(
        ".intro .intro_inner .right .info li:first-child",
        { y: 1000 },
        { y: 0, duration: 1 },
        0.2
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:nth-child(2)",
        { y: 1000 },
        { y: 0, duration: 1 },
        0.4
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:nth-child(3)",
        { y: 1000 },
        { y: 0, duration: 1 },
        0.6
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:nth-child(4)",
        { y: 1000 },
        { y: 0, duration: 1 },
        0.8
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:last-child",
        { y: 1000 },
        { y: 0, duration: 1 },
        1
      );
    },

    "(max-width:599px)": function () {
      /*intro*/
      gsap.fromTo(
        ".intro .intro_inner .left .picture",
        { x: -2000 },
        { x: 0, duration: 1 }
      );

      gsap.fromTo(
        ".intro .intro_inner .right .textBox",
        { x: 2000 },
        { x: 0, y: -150, duration: 1 }
      );

      let t1 = gsap.timeline();
      t1.fromTo(
        ".intro .intro_inner .right .info li:first-child",
        { y: 1000 },
        { y: -100, duration: 1 },
        0.2
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:nth-child(2)",
        { y: 1000 },
        { y: -100, duration: 1 },
        0.4
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:nth-child(3)",
        { y: 1000 },
        { y: -100, duration: 1 },
        0.6
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:nth-child(4)",
        { y: 1000 },
        { y: -100, duration: 1 },
        0.8
      );
      t1.fromTo(
        ".intro .intro_inner .right .info li:last-child",
        { y: 1000 },
        { y: -100, duration: 1 },
        1
      );
    },
  });
});
