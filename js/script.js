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
  var option = {
    section: ".scroll-section",
    easing: "swing",
    scrollSpeed: 600,
    scrollbars: true
  };

  $(function() {
    $.scrollify(option);
  });
});
