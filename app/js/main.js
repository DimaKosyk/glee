$(function(){

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $('.select-style').styler();

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

  $('.cart-btn').on('click', function () {
    $('.cart-btn').removeClass('cart-btn--active');
    $('.product-list__add-btn').addClass('cart-btn--active');
  });

  $('.product-list__add-btn').on('click', function () {
    $('.product-list__add-btn').removeClass('cart-btn--active');
    $('.cart-btn').addClass('cart-btn--active');
  });

  $(".star").rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true
  });

  $(".star-line").rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "13px",
    readOnly: true
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