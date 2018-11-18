let aboutImg = document.getElementsByClassName("profile-img"),
  aboutTitle = document.getElementsByClassName("about-title"),
  tl = new TimelineLite();

tl.from(aboutImg, 1, {
  x: -100,
  autoAlpha: 0,
  ease: Power1.easeInOut
}).from(aboutTitle, 1, { y: 20, autoAlpha: 0, ease: Power1.easeOut }, "+=0.15");

// var anim = new TimelineLite({ paused: true });
// mainCon = document.getElementsByClassName("main-top");
// menu = document
//   .querySelector(".about-menu")
//   .addEventListener("click", function() {
//     TweenLite.to(mainCon, 1, {
//       ease: Power2.easeInOut,
//       scale: 0.8
//       // scaleX: 1,
//       // skewX: "10deg"
//       // skewY: "180deg"
//     });
//   });
// menubar = document.getElementsByClassName("menu-list");

// TweenLite.from(mainCon, 1, {
//   opacity: 0,
//   y: 30,
//   ease: Power2.easeInOut,
//   delay: 4
// });

// document
//   .getElementsByClassName("menu-list")
//   .addEventListener("click", function() {
//     anim.play();
//   });

// menubar.addEventListener("click", scaleOnClick);
// function scaleOnClick() {
//   TweenLite.to(menubar, 1, {
//     ease: Power2.easeInOut,
//     scale: 0.8
//     // scaleX: 1,
//     // skewX: "10deg"
//     // skewY: "180deg"
//   });
// }

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
  // functions
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
