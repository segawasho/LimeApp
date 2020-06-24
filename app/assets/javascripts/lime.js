//初回読み込み、リロード、ページ切り替えで動く。
$(document).on('turbolinks:load', function() {



  //application.html.erb
  $("header").hide().fadeIn(1000);
  $(".logo").hide().fadeIn(2000);
  $("#header-message").hide().fadeIn(4000);
  setTimeout("$('.time-limit').fadeOut('slow')", 2000)
  $(".home-image").hide().fadeIn(4500);
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $(".wrapper").slideDown(2000);
    } else {
        $(".wrapper").hide();
    }
  });

  /* 写真拡大モーダル */
  $('.prodact-image').click(
  function(){
    $('.img-modal-wrapper').fadeIn();
  });

});
