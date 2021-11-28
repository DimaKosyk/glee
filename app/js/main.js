$(function(){
  $('.top-slider__items').slick({
    arrows: false,
    autoplay: true,
    fade: true,
    dots: true,
    autoplaySpeed: 2000
  });

  $('.products__filter-btn').on('click', function () {
    $('.products__filter-btn').removeClass('products__filter-btn--active');
    $(this).addClass('products__filter-btn--active');
  });

  $('.design__filter-btn').on('click', function () {
    $('.design__filter-btn').removeClass('design__filter-btn--active');
    $(this).addClass('design__filter-btn--active');
  });

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
});