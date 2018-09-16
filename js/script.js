$(function () {
    $('.name-title').textillate({

        // ループのオンオフ、falseの場合、outは発動しない
        loop: false,

        // テキストが置き換えられるまでの表示時間
        minDisplayTime: 1500,

        // 遅延時間
        initialDelay: 0,

        // アニメーションが自動的にスタートするかどうか
        autoStart: true,

        // フェードインのエフェクトの詳細設定
        in: {
            // エフェクトの名前（animate.cssをご参照下さい）
            effect: 'fadeInUp',

            // 遅延時間の指数
            delayScale: 1.0,

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
            effect: 'fadeOutUp',
            delayScale: 1.0,
            delay: 50,
            sync: false,
            shuffle: false,
        }
    });

})


// fade-in
// $(window).scroll(function () {
//     $('.container').each(function () {
//         var POS = $(this).offset().top; //fade-inがついている要素の位置
//         var scroll = $(window).scrollTop(); //スクロール一
//         var windowHeight = $(window).height(); //ウィンドウの高さ

//         if (scroll > POS - windowHeight + windowHeight / 5) {
//             $(this).css("opacity", "1");
//         } else {
//             $(this).css("opacity", "0");
//         }
//     });

// });



var myFullpage = new fullpage('#fullpage', {
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    anchors: ['1page', '2page', '3page', '4page', '5page'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['1page', '2page', '3page', '4page', '5page'],
    menu: '#menu',
    scrollingSpeed: 700,
    css3: true,
});

$(document).ready(function () {
    $(".animsition").animsition({
        inClass: 'fade-in-left',
        outClass: 'fade-out-left',
        inDuration: 1500,
        outDuration: 1000,
        linkElement: '.animsition-link',
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '', // e.g '<img src="loading.svg" />'
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: ['animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay: false,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'body',
        transition: function (url) {
            window.location.href = url;
        }
    });
});