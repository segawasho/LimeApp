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
  /* 各種画像の拡大モーダル表示 */
  $('.product-image').click(
  function(){
    $($(this).data('target')).fadeIn();
  });
  $('.close-modal').click(function(){
    $('.img-modal-wrapper').fadeOut();
  });

  $('.product-image-1').click(
  function(){
    $($(this).data('target')).fadeIn();
  });
  $('.close-modal').click(function(){
    $('.img-modal-wrapper-1').fadeOut();
  });

  $('.product-image-2').click(
  function(){
    $($(this).data('target')).fadeIn();
  });
  $('.close-modal').click(function(){
    $('.img-modal-wrapper-2').fadeOut();
  });

  $('.product-image-3').click(
  function(){
    $($(this).data('target')).fadeIn();
  });
  $('.close-modal').click(function(){
    $('.img-modal-wrapper-3').fadeOut();
  });

  $('.product-image-4').click(
  function(){
    $($(this).data('target')).fadeIn();
  });
  $('.close-modal').click(function(){
    $('.img-modal-wrapper-4').fadeOut();
  });

  /* 画像を１枚ずつ表示にしてスライド形式で画像切替 */
    /* 下記4行　画像2~4を隠す */
  $(".product-image-wrapper-1").hide();
  $(".product-image-wrapper-2").hide();
  $(".product-image-wrapper-3").hide();
  $(".product-image-wrapper-4").hide();
    /* 右アイコンを押すと次の画像を表示させる  */
  $(".next-img").click(
    function(){
      $(".product-image-wrapper").hide();
      $(".product-image-wrapper-1").fadeIn();
    });

  $(".next-img-1").click(
    function(){
      $(".product-image-wrapper-1").hide();
      $(".product-image-wrapper-2").fadeIn();
    });

  $(".next-img-2").click(
    function(){
      $(".product-image-wrapper-2").hide();
      $(".product-image-wrapper-3").fadeIn();
    });

  $(".next-img-3").click(
    function(){
      $(".product-image-wrapper-3").hide();
      $(".product-image-wrapper-4").fadeIn();
    });
    /* 左アイコンを押すと前の画像を表示させる */
  $(".previous-img-1").click(
    function(){
      $(".product-image-wrapper-1").hide();
      $(".product-image-wrapper").fadeIn();
    });

  $(".previous-img-2").click(
    function(){
      $(".product-image-wrapper-2").hide();
      $(".product-image-wrapper-1").fadeIn();
    });

  $(".previous-img-3").click(
    function(){
      $(".product-image-wrapper-3").hide();
      $(".product-image-wrapper-2").fadeIn();
    });

  $(".previous-img-4").click(
    function(){
      $(".product-image-wrapper-4").hide();
      $(".product-image-wrapper-3").fadeIn();
    });



  /* 特定商取引法表示　商品ページで表示 */
  $(".notation-wrapper-2").hide();
  $("#notation-list-minus-btn").hide();
  $("#notation-list-btn").click(
    function(){
      $(".notation-wrapper-2").fadeIn();
      $("#notation-list-minus-btn").fadeIn();
      $(this).hide();
    });
  $("#notation-list-minus-btn").click(
    function(){
      $(".notation-wrapper-2").fadeOut();
      $("#notation-list-btn").fadeIn();
      $(this).hide();
    });

  $(".notation-product").hide();
  $(".notation-personal").hide();
  $(".notation-leader").hide();

  $("#notation-click-1-minus").hide();
  $("#notation-click-2-minus").hide();
  $("#notation-click-3-minus").hide();

  $("#notation-click-1").click(
    function(){
      $(".notation-product").fadeIn();
      $("#notation-click-1-minus").fadeIn();
      $(this).hide();
    });
  $("#notation-click-1-minus").click(
    function(){
      $(".notation-product").fadeOut();
      $("#notation-click-1").fadeIn();
      $(this).hide();
    });

  $("#notation-click-2").click(
    function(){
      $(".notation-personal").fadeIn();
      $("#notation-click-2-minus").fadeIn();
      $(this).hide();
    });
  $("#notation-click-2-minus").click(
    function(){
      $(".notation-personal").fadeOut();
      $("#notation-click-2").fadeIn();
      $(this).hide();
    });

  $("#notation-click-3").click(
    function(){
      $(".notation-leader").fadeIn();
      $("#notation-click-3-minus").fadeIn();
      $(this).hide();
    });
  $("#notation-click-3-minus").click(
    function(){
      $(".notation-leader").fadeOut();
      $("#notation-click-3").fadeIn();
      $(this).hide();
    });

});
