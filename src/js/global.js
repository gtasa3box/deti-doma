//show-text-reviews
$('.reviews__btn-show').on('click', function(){
    $(this).toggleClass('active')  
    $($(this).data('target')).slideToggle()
});

//teacher slider
$('.slider-teachers').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

//tabs
$('.questions__question').on('click', function(){
  $(this).toggleClass('active')
  $($(this).data('target')).slideToggle()
});
