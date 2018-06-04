
$(window).on('load',function(){
  $('.menu-trigger').click(function() {
      $('.navbar-nav').slideToggle(500);

  });

  $(window).resize(function(){
      if($(window).width() > 580 ) {
          $('.navbar-nav').removeAttr('style');
      }
  });





  // fade-in
    $(window).scroll(function (){
        $('.container').each(function(){
            var POS = $(this).offset().top;  //fade-inがついている要素の位置
            var scroll = $(window).scrollTop();  //スクロール一
            var windowHeight = $(window).height();  //ウィンドウの高さ

            if (scroll > POS - windowHeight + windowHeight/5){
                $(this).css("opacity","1" );
            } else {
                $(this).css("opacity","0" );
            }
        });

    });
});

