//初回読み込み、リロード、ページ切り替えで動く。
$(document).on('turbolinks:load', function() {



  //application.html.erb
  $("header").hide().fadeIn(500);
  $(".logo").hide().fadeIn(700);
  $("#header-message").hide().fadeIn(2000);
  setTimeout("$('.time-limit').fadeOut('slow')", 1000)
  $(".home-image").hide().fadeIn(1500);
  $(".wrapper").hide().fadeIn(2000);

  /* プロダクトをスクロールで表示させる */
  /* 若干この演出が邪魔に感じるのでコメントアウト中 */
  /* $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $(".wrapper").slideDown(2000);
    } else {
        $(".wrapper").hide();
    }
  }); */




  /* 写真拡大モーダル  */

  $('.product-image').click(
  function(){
    $($(this).data('target')).fadeIn();
  });
  $('.close-modal').click(function(){
    $('.img-modal-wrapper').fadeOut();
  });

});
