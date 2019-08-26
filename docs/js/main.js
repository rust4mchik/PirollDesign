jQuery(document).ready(function ($) {

  $('.owl-carousel').owlCarousel({
    dots: true,
    items: 1,
    startPosition: 1
  })

  $('.skills-item__way').each(function () {
    let way = $(this).attr('data-way');
    $(this).find('.way.passed-way').css('width', way + '%');
  });

  $('.nav-content__mobile').click(function () {
    $('.nav-content').toggleClass('active');
    $('.nav-content__mobile').toggleClass('active');
  });

  $(window).on('resize', function () {
    const scrollbarWidth = 17;
    if ($(window).width() >= (768 - scrollbarWidth)) {
      $('.nav-content').removeClass('active');
      $('.nav-content__mobile').removeClass('active');
    }
  });

  $(window).on('load', function () {
    $(window).scrollTop() >= 30 ? $('.nav').addClass('scroll') : $('.nav').removeClass('scroll');
  }).on('scroll', function () {
    $(window).scrollTop() >= 30 ? $('.nav').addClass('scroll') : $('.nav').removeClass('scroll');
  });

  $('a[href^="#"]').bind('click', function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 1500);
    $('.nav-content').removeClass('active');
    $('.nav-content__mobile').removeClass('active');
    e.preventDefault();
  });

  function addActiveLink() {
    var y = $(this).scrollTop();
    $('.nav-content__menu > a').each(function () {
      id = $(this).attr('href');
      if (y >= $(id).offset().top - 300) {
        $('.nav-content__menu > a').removeClass('active');
        $(this).addClass('active');
      }
    });
  }

  $(window).scroll(function () {
    addActiveLink();
  }).on('load', function () {
    addActiveLink();
  });

});