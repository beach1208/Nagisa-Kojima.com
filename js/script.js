window.onscroll = function() {
  fadeIn();
};
function fadeIn() {
  let elem = document.getElementById("fadeIn-img");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    elem.classList.add("slideIn");
  } else {
    elem.className = "";
  }
}

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
