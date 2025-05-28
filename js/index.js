$(function () {
  Splitting();
  gsap.registerPlugin(ScrollTrigger);

  /*gsap 공통*/
  /*project*/
  gsap.utils.toArray(".project").forEach((project) => {
    gsap.timeline({
      scrollTrigger: {
        trigger: project,
        start: "top top",
        pin: true,
        pinSpacing: false,
        //markers: true,
      },
    });
  });

  /*기획서 바로가기 클릭 시 모달창 구현*/
  $(".project .inner .cloneWrap .right .buttons li:last-child").on(
    "click",
    function () {
      $(".project.seoul .view").css({ display: "block" });
    }
  );

  $(".project.seoul .view .close").on("click", function () {
    $(".project.seoul .view").css({ display: "none" });
  });

  /*gsap 반응형*/
  ScrollTrigger.matchMedia({
    /*pc*/
    "(min-width:1220px)": function () {
      /*intro*/
      gsap.fromTo(
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
            end: "60% 70%",
            scrub: 2,
            //markers: true,
          },
        })
        .fromTo(
          ".about .about_inner .page .Title",
          { x: -500 },
          { x: 0, duration: 10 },
          0
        )
        .fromTo(
          ".about .about_inner .page .menu_bar",
          { x: 500 },
          { x: 0, duration: 10 },
          0
        )
        .fromTo(
          ".about .about_inner .con .left",
          { y: 2000 },
          { y: 0, duration: 10 }
        )
        .fromTo(
          ".about .about_inner .con .center",
          { y: 2000 },
          { y: 0, duration: 10 }
        )
        .fromTo(
          ".about .about_inner .con .right",
          { y: 2000 },
          { y: 0, duration: 10 }
        );

      /*project*/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".project.spc",
            start: "top 50%",
            end: "50% 50%",
            scrub: 2,
            //markers: true,
          },
        })
        .fromTo(
          ".project.spc .inner .page .Title",
          { x: -500 },
          { x: 0, duration: 5 },
          0
        )
        .fromTo(
          ".project.spc .inner .page .menu_bar",
          { x: 500 },
          { x: 0, duration: 5 },
          0
        );

      /*design*/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".design",
            start: "30% 50%",
            end: "70% 70%",
            scrub: 2,
            markers: true,
          },
        })
        .fromTo(".design li.ds01", { y: 400 }, { y: 0 }, 1)
        .fromTo(".design li.ds02", { y: 400 }, { y: 0 }, 1.2)
        .fromTo(".design li.ds03", { y: 400 }, { y: 0 }, 1.4)
        .fromTo(".design li.ds04", { y: 400 }, { y: 0 }, 1.6)
        .fromTo(".design li.ds05", { y: 400 }, { y: 0 }, 1.8)
        .fromTo(".design li.ds06", { y: 400 }, { y: 0 }, 2);
    },

    /*태블릿*/
    "(max-width:1219px)": function () {
      gsap.fromTo(
        /*intro*/
        ".intro .intro_inner .left .picture",
        { x: -2000 },
        { x: 0, duration: 1 }
      );

      gsap.fromTo(
        ".intro .intro_inner .right .textBox",
        { x: 2000, y: -100 },
        { x: 0, y: -100, duration: 1 }
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

      /*about*/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".about",
            start: "top 70%",
            end: "60% 70%",
            scrub: 2,
            //markers: true,
          },
        })
        .fromTo(
          ".about .about_inner .page .Title",
          { x: -500 },
          { x: 0, duration: 10 },
          0
        )
        .fromTo(
          ".about .about_inner .page .menu_bar",
          { x: 500 },
          { x: 0, duration: 10 },
          0
        )
        .fromTo(
          ".about .about_inner .con .left",
          { y: 2000 },
          { y: 0, duration: 10 }
        )
        .fromTo(
          ".about .about_inner .con .center",
          { y: 2000 },
          { y: 0, duration: 10 }
        )
        .fromTo(
          ".about .about_inner .con .right",
          { y: 2000 },
          { y: 0, duration: 10 }
        );

      /*project*/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".project.spc",
            start: "top 70%",
            end: "60% 70%",
            scrub: 2,
            //markers: true,
          },
        })
        .fromTo(
          ".project.spc .inner .page .Title",
          { x: -500 },
          { x: 0, duration: 10 },
          0
        )
        .fromTo(
          ".project.spc .inner .page .menu_bar",
          { x: 500 },
          { x: 0, duration: 10 },
          0
        );
    },

    /*모바일*/
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
        { x: 0, y: -120, duration: 1 }
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
            end: "60% 70%",
            scrub: 2,
            //markers: true,
          },
        })
        .fromTo(
          ".about .about_inner .page .Title",
          { x: -500 },
          { x: 0, duration: 10 },
          0
        )
        .fromTo(
          ".about .about_inner .page .menu_bar",
          { x: 500 },
          { x: 0, duration: 10 },
          0
        )
        .fromTo(
          ".about .about_inner .con .left",
          { y: 2000 },
          { y: 0, duration: 10 }
        )
        .fromTo(
          ".about .about_inner .con .center",
          { y: 2000 },
          { y: 0, duration: 10 }
        )
        .fromTo(
          ".about .about_inner .con .right",
          { y: 2000 },
          { y: 0, duration: 10 }
        );

      /*project*/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".project.spc",
            start: "top 70%",
            end: "60% 70%",
            scrub: 2,
            //markers: true,
          },
        })
        .fromTo(
          ".project.spc .inner .page .Title",
          { x: -500 },
          { x: 0, duration: 10 },
          0
        )
        .fromTo(
          ".project.spc .inner .page .menu_bar",
          { x: 500 },
          { x: 0, duration: 10 },
          0
        );
    },
  });
});
