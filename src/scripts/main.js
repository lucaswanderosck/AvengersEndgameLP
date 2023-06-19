document.addEventListener("DOMContentLoaded", function () {
  AOS.init();

// Efeito para o scroll no header usando jquery
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".header").addClass("header--scrolled");
    } else {
      $(".header").removeClass("header--scrolled");
    }
  });
});
