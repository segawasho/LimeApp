//初回読み込み、リロード、ページ切り替えで動く。
$(document).on('turbolinks:load', function() {

  $("#header-message").hide().fadeIn(2000);
  $("#header-message").css("color", "green");

});
