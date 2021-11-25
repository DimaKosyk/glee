$(function(){
  $('.top-slider__items').slick({
    arrows: false,
    autoplay: true,
    fade: true,
    dots: true,
    autoplaySpeed: 2000
    // customPaging: function (slider, i) {
    //   var thumb = $(slider.$slides[i]).data();
    //   return '<a>'+(i+1)+'</a>';
    // },
    // responsive: [{
    //   breakpoint: 500,
    //   settings: {
    //     dots: false,
    //     arrows: false,
    //     infinite: false,
    //     slidesToShow: 2,
    //     slidesToScroll: 2
    //   }
    // }]
  });
});