document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
  const acordionHeader = document.getElementsByClassName(
    "review__accordion__item__header"
  );
  const top = document.getElementById("scrollTop");

  // Efeito para o scroll no header usando jquery
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $(".header").addClass("header--active");
    } else {
      $(".header").removeClass("header--active");
    }
  });

  // Accordion na seção de criticas
  for (let i = 0; i < acordionHeader.length; i++) {
    acordionHeader[i].addEventListener("click", function () {
      this.classList.toggle("review__accordion__item--active");

      const acordionContent = this.nextElementSibling;

      if (acordionContent.style.maxHeight) {
        acordionContent.style.maxHeight = null;
      } else {
        acordionContent.style.maxHeight = acordionContent.scrollHeight + "px";
      }
    });
  }

  // ir para o topo
  top.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  //Botão para fechar o frame do trailer
  document.getElementById("close").addEventListener("click", function () {
    document.documentElement.classList.add("hidden");
  });
});
