//GSAP animationss

document.addEventListener('DOMContentLoaded', function() {
  
     //About page
    let aboutImg = document.getElementsByClassName("profile-img"),
    abouttitle = document.getElementsByClassName("about-title"),
    p = document.getElementsByClassName("description"),
    skills = document.getElementsByClassName("skill-description"),
    snsIcons = document.getElementsByClassName("social-icons"),
    btn = document.getElementsByClassName("msg-btn"),

    tl = new TimelineLite();

    tl.from(aboutImg, 0.9, { x: -100,opacity: 0,ease: Power1.easeInOut,delay: 1})
    .from(abouttitle,0.4,{ y: 15, opacity: 0, ease: Power0.easeInOut }, "-= 0.1")
    .from(p, 0.4, { y: 15, opacity: 0, ease: Power0.easeInOut },  "-= 0.1")
    .from(skills, 0.4, { y: 15, opacity: 0, ease: Power0.easeInOut }, "-= 0.1")
    .from(snsIcons,0.4,{ y: 15, opacity: 0, ease: Power0.easeInOut }, "-= 0.1")
    .from(btn, 0.4, { y: 15, opacity: 0, ease: Power0.easeInOut }, "-= 0.1");

    //slide animation 

    let slideSec = document.getElementsByClassName("slide-section");
    sectionTween = TweenLite.fromTo(slideSec,1,{opacity: 0,scale: 0.8},{opacity: 1,scale: 1});
    sectionTween = TweenLite.set(".slide-section",{visibility:"visible"});
  
 
  //top page
    let mainNav = document.getElementsByClassName("first-page-nav");
    mainSlide = document.getElementsByClassName("main-top"),
    helloTitle = document.getElementsByClassName("greed"),
    nameTitle = document.getElementsByClassName("name"),
    position = document.getElementsByClassName("position-title"),
    checkWork = document.getElementsByClassName("check-work"),
    mainTl = new TimelineLite();
  
    sectionTween = TweenLite.set(".main-top",{visibility:"visible"});
    mainTl.from(mainNav, 1, { y: 15,opacity: 0,ease: Power1.easeInOut,delay: 3.5})
    .from(mainSlide, 1, { y: 50,opacity: 0,ease: Power1.easeInOut},"-= 0.15")
    .from(helloTitle,0.5,{y: 15, opacity: 0, ease: Power0.easeInOut}, "-= 0.15")
    .from(nameTitle,0.5,{ y: 15, opacity: 0, ease: Power0.easeInOut }, "-= 0.15")
    .from(position,0.5,{ y: 15, opacity: 0, ease: Power0.easeInOut }, "-= 0.15")
    .from(checkWork,0.5,{ y: 15, opacity: 0, ease: Power0.easeInOut }, "-= 0.15");

   
// scroll fade in single works page
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


//methods


//scrollify js
jQuery(document).ready(function($) {
  var $section = $(".scroll-section");
  var $pager = $("#js-pager");


  var option = {
    section: ".scroll-section",
    easing: "swing",
    scrollSpeed: 900,
    scrollbars: true,
    touchScroll:false,
    before: function(index) {
      setCurrent(index);
      pagerCurrent(index);
    },
    afterRender: function() {
      createPager();
      setCurrent();
      
    }
  };

  $(function() {
    $.scrollify(option);
  });

  // ==============================
  // page functions
  // ------------------------------

function setCurrent(index = 0) {
  $section.removeClass('is-show');
  $section.eq(index).addClass('is-show');
}

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
}, false);