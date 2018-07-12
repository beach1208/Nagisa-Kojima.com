// window.onscroll = function(){myScroll()};
// const nav1 = document.getElementsByTagName("nav");
// window.onscroll = function(){
//     if(window.pageXOffset > 300){
//         nav1.classList.add("scrolled-nav");
//     }else{
//         nav1.classList.remove("scrolled-nav");
//     }
//     console.log(nav1);
// }

$(function() {
    var navbar = $("nav");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 400) {
            navbar.addClass("scrolled-nav");
        } else {
            navbar.removeClass("scrolled-nav");
        }
    });
  
});

$(function () {
    $('.name-title').textillate({

        // ループのオンオフ、falseの場合、outは発動しない
        loop: false,
      
        // テキストが置き換えられるまでの表示時間
        minDisplayTime: 6000,
      
        // 遅延時間
        initialDelay: 0,
      
        // アニメーションが自動的にスタートするかどうか
        autoStart: true,
      
        // フェードインのエフェクトの詳細設定
        in: {
          // エフェクトの名前（animate.cssをご参照下さい）
          effect: 'fadeInLeftBig',
      
          // 遅延時間の指数
          delayScale: 1.5,
      
          // 文字ごとの遅延時間
          delay: 100,
      
          // trueにすることでアニメーションをすべての文字に同時に適用される
          sync: false,
      
          // trueにすることで文字を順番にではなく、ランダムに入ってくるようにする
          // (注：syncがtrueの場合は無効になる)
          shuffle: false
        },
      
        // フェードアウトのエフェクトの詳細設定(同上)
        out: {
          effect: 'hinge',
          delayScale: 1.5,
          delay: 50,
          sync: false,
          shuffle: false,
        }
      });
    
})




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

