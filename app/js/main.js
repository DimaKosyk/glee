$(function(){

  $('.product-detail__top-item').on('click', function(e){
    e.preventDefault();
    $('.product-detail__top-item').removeClass('product-detail__top-item--active');
    $(this).addClass('product-detail__top-item--active');

    $('.product-detail__content-item').removeClass('product-detail__content-item--active');
    $($(this).attr('href')).addClass('product-detail__content-item--active');
  });

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });

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

  $('.select-style, .product-detail__num').styler();

  $('.top-slider__items').slick({
    arrows: false,
    autoplay: true,
    fade: true,
    dots: true,
    autoplaySpeed: 2000
  });

  $('.product-detail__related-slider').slick({
    slidesToShow: 4,
    arrows: false
  });

  $('.related-prev').on('click', function(e) {
    $('.product-detail__related-slider').slick('slickPrev');
  });

  $('.related-next').on('click', function (e) {
    $('.product-detail__related-slider').slick('slickNext');
  });

  $('.products__filter-btn').on('click', function () {
    $('.products__filter-btn').removeClass('products__filter-btn--active');
    $(this).addClass('products__filter-btn--active');
  });

  $('.design__filter-btn').on('click', function () {
    $('.design__filter-btn').removeClass('design__filter-btn--active');
    $(this).addClass('design__filter-btn--active');
  });

  $('.product-list__cart-btn').on('click', function () {
    $('.product-list__cart-btn').removeClass('cart-btn--active');
    $(this).addClass('cart-btn--active');
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