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

var myFullpage = new fullpage("#fullpage", {
  licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
  anchors: ["1page", "2page", "3page", "4page", "5page"],
  navigation: true,
  navigationPosition: "right",
  navigationTooltips: ["1page", "2page", "3page", "4page", "5page"],
  menu: "#menu",
  scrollingSpeed: 700,
  css3: true
});
