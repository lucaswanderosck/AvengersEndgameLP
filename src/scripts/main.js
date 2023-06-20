document.addEventListener("DOMContentLoaded", function () {
  AOS.init();

// Efeito para o scroll no header usando jquery
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".header").addClass("header--is-hidden");
    } else {
      $(".header").removeClass("header--is-hidden");
    }
  });

});
