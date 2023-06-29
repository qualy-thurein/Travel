$(document).ready(function () {
  // Navbar Menu
  $(".menu-toggle").on("click", function () {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("view");
    $(".menu").toggleClass("is-show");
  });

  // travel slide starts
  $('.travel_slide_top.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-for',
    focusOnSelect: true
  });
  // travel slide ends

  // Scroll Top
  const toTop = document.querySelector(".scroll-top");

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  };

  let options2 = {
    root: null,
    rootMargin: "0px",
    threshold: 0.54,
  };

  let observer = new IntersectionObserver(callback, options);
  let observer2 = new IntersectionObserver(callback2, options2);

  let target = document.querySelector(".footer");
  let target2 = document.querySelector(".top_side");

  if (target) {
    observer?.observe(target);
  }
  if (target2) {
    observer2?.observe(target2);
  }
  

  function callback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        toTop.classList.add("stick-height");
      }
      if (!entry.isIntersecting) {
        toTop.classList.remove("stick-height");
      }
    });
  }

  function callback2(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        toTop.classList.add("hide");
      }
      if (!entry.isIntersecting) {
        toTop.classList.remove("hide");
      }
    });
  }
});
