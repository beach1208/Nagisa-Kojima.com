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
