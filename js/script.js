//GSAP animationss

document.addEventListener("DOMContentLoaded", function() {
  let slideSec = document.getElementsByClassName("slide-section");
  sectionTween = TweenLite.fromTo(
    slideSec,
    1,
    {
      opacity: 0,
      scale: 0.8
    },
    {
      opacity: 1,
      scale: 1
    }
  );

  let mainSlide = document.getElementsByClassName("main-top"),
    helloTitle = document.getElementsByClassName("greed"),
    nameTitle = document.getElementsByClassName("name"),
    position = document.getElementsByClassName("position-title"),
    checkWork = document.getElementsByClassName("check-work"),
    mainTl = new TimelineLite();

  mainTl
    .from(mainSlide, 1, {
      y: 50,
      autoAlpha: 0,
      ease: Power1.easeInOut,
      delay: 4
    })
    .from(
      helloTitle,
      0.5,
      { y: 15, autoAlpha: 0, ease: Power0.easeIn },
      "-= 0.15"
    )
    .from(
      nameTitle,
      0.5,
      { y: 15, autoAlpha: 0, ease: Power0.easeIn },
      "-= 0.15"
    )
    .from(
      position,
      0.5,
      { y: 15, autoAlpha: 0, ease: Power0.easeIn },
      "-= 0.15"
    )
    .from(
      checkWork,
      0.5,
      { y: 15, autoAlpha: 0, ease: Power0.easeIn },
      "-= 0.15"
    );

  let aboutImg = document.getElementsByClassName("profile-img"),
    abouttitle = document.getElementsByClassName("about-title"),
    p = document.getElementsByClassName("description"),
    skills = document.getElementsByClassName("skill-description"),
    snsIcons = document.getElementsByClassName("social-icons"),
    btn = document.getElementsByClassName("msg-btn"),
    tl = new TimelineLite();

  tl.from(aboutImg, 1, {
    x: -100,
    autoAlpha: 0,
    ease: Power1.easeInOut,
    delay: 1
  })
    .from(
      abouttitle,
      0.5,
      { y: 15, autoAlpha: 0, ease: Power0.easeIn },
      "-= 0.15"
    )
    .from(p, 0.5, { y: 15, autoAlpha: 0, ease: Power0.easeIn }, "-= 0.15")
    .from(skills, 0.5, { y: 15, autoAlpha: 0, ease: Power0.easeIn }, "-= 0.15")
    .from(
      snsIcons,
      0.5,
      { y: 15, autoAlpha: 0, ease: Power0.easeIn },
      "-= 0.15"
    )
    .from(btn, 0.5, { y: 15, autoAlpha: 0, ease: Power0.easeIn }, "-= 0.15");

  let workImg = document.getElementsByClassName("work-img-one"),
    workTitle = document.getElementsByClassName("work-title"),
    workp = document.getElementsByClassName("work-description"),
    btnworks = document.getElementsByClassName("work-btn"),
    newtl = new TimelineLite();

  newtl

    .from(workTitle, 0.5, {
      y: 15,
      autoAlpha: 0,
      ease: Power0.easeIn,
      delay: 1
    })
    .from(workp, 0.5, { y: 15, autoAlpha: 0, ease: Power0.easeIn }, "-= 0.15")
    .from(
      btnworks,
      0.5,
      { y: 15, autoAlpha: 0, ease: Power0.easeIn },
      "-= 0.15"
    )
    .from(workImg, 1, { y: 15, autoAlpha: 0, ease: Power1.easeIn }, "-= 0.15");
});

// scroll fade in function
jQuery(function() {
  jQuery(window).scroll(function() {
    jQuery(".fadein").each(function() {
      var elemPos = jQuery(this).offset().top;
      var scroll = jQuery(window).scrollTop();
      var windowHeight = jQuery(window).height();
      if (scroll > elemPos - windowHeight + 100) {
        jQuery(this).addClass("scrollin");
      }
    });
  });
});

//scrollify js
jQuery(document).ready(function($) {
  var $section = $(".scroll-section"); // 各スライド
  var $pager = $("#js-pager");
  // scrollifyのオプション設定

  var option = {
    section: ".scroll-section",
    easing: "swing",
    scrollSpeed: 600,
    scrollbars: true,
    before: function(index) {
      pagerCurrent(index);
    },
    afterRender: function() {
      createPager(); // ページャーの作成
    }
  };

  $(function() {
    $.scrollify(option);
  });

  // ==============================
  // paget functions
  // ------------------------------

  function pagerCurrent(index = 0) {
    var $li = $pager.find("li");
    $li.removeClass("is-current");
    $li.eq(index).addClass("is-current");
  }

  function createPager() {
    $section.each(function(i, e) {
      var sectionName = $(e).attr("data-section-name");
      var addClass = "";
      if (i === 0) {
        addClass = "is-current";
      }

      var html = "";
      html += '<li class="' + addClass + '">';
      html += '<a href="#' + sectionName + '"></a>';
      html += "</li>";
      $pager.append(html);
    });
  }
});
