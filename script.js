$(document).ready(function () {
  $(".main-content section").hide().each(function (i) {
    $(this).delay(300 * i).fadeIn(800);
  });
});
