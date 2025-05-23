$(function () {
  // gsap.registerPlugin(ScrollTrigger);
  /*사이트 접속 시 intro 페이지 움직임*/
  $(".intro .intro_inner .left .picture").css({ "margin-left": "0" });
  $(".intro .intro_inner .right .textBox .title").css({ "margin-left": "0" });
  $(".intro .intro_inner .right .textBox").css({ "margin-left": "0" });

  Splitting();
});
