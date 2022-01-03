$(function(){

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.product-grid__filters-btn').on('click', function(){
    $('.product-grid__filters').slideToggle();
  });

  $('.product-list__filters-btn').on('click', function () {
    $('.product-list__filters').slideToggle();
  });

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
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="16px" viewBox="0 0 18 16" version="1.1" ><g id="surface1"><path d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 " /> </g> </svg>'
  });

  $(".star-line").rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "13px",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="16px" viewBox="0 0 18 16" version="1.1" ><g id="surface1"><path d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 " /> </g> </svg>'
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