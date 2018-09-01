// window.onscroll = function () {
//     scrollFunction()
// };

// function scrollFunction() {
//     const navbar = document.getElementsByTagName("nav")[0];
//     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//         navbar.classList.add("scrolled-nav");
//     } else {
//         navbar.classList.remove("scrolled-nav");
//     }
// }


// $(function () {
//     $('.name-title').textillate({

//         // ループのオンオフ、falseの場合、outは発動しない
//         loop: true,

//         // テキストが置き換えられるまでの表示時間
//         minDisplayTime: 1500,

//         // 遅延時間
//         initialDelay: 0,

//         // アニメーションが自動的にスタートするかどうか
//         autoStart: true,

//         // フェードインのエフェクトの詳細設定
//         in: {
//             // エフェクトの名前（animate.cssをご参照下さい）
//             effect: 'fadeInUp',

//             // 遅延時間の指数
//             delayScale: 1.0,

//             // 文字ごとの遅延時間
//             delay: 100,

//             // trueにすることでアニメーションをすべての文字に同時に適用される
//             sync: false,

//             // trueにすることで文字を順番にではなく、ランダムに入ってくるようにする
//             // (注：syncがtrueの場合は無効になる)
//             shuffle: false
//         },

//         // フェードアウトのエフェクトの詳細設定(同上)
//         out: {
//             effect: 'fadeOutUp',
//             delayScale: 1.0,
//             delay: 50,
//             sync: false,
//             shuffle: false,
//         }
//     });

// })




// $(window).on('load', function () {

//     $('.menu-trigger').click(function () {
//         $('.navbar-nav').slideToggle(500);
//     });

//     $(window).resize(function () {
//         if ($(window).width() > 580) {
//             $('.navbar-nav').removeAttr('style');
//         }

//     });



// fade-in
$(window).scroll(function () {
    $('.container').each(function () {
        var POS = $(this).offset().top; //fade-inがついている要素の位置
        var scroll = $(window).scrollTop(); //スクロール一
        var windowHeight = $(window).height(); //ウィンドウの高さ

        if (scroll > POS - windowHeight + windowHeight / 5) {
            $(this).css("opacity", "1");
        } else {
            $(this).css("opacity", "0");
        }
    });

});


$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: ['1page', '2page', '3page', '4page', '5page'],
        menu: '#menu',

    });
});

$(function () {
    $('.nav__icon').on('click', function () {
        $(this).toggleClass('active');
        $('nav ul').slideToggle();
    });

    $(window).on('load resize', function () {
        var w = $(window).width();
        var h = $(window).height();
        var x = 767;
        if (w >= x) {
            $('nav ul').css({
                display: 'flex',
                height: 'auto'
            });
        } else {
            $('nav ul').css({
                display: 'none',
                height: h + 'px'
            });
        }
    });
});