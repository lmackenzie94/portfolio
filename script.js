$(function () {

    $('.hamburger').on('click', function () {
        $('.hamburger').toggleClass('active'),
            $('.line1').toggleClass('active'),
            $('.line2').toggleClass('active'),
            $('.line3').toggleClass('active');
        $('.header-nav').toggleClass('active');
    });

    $('a').smoothScroll({
        speed: 600
    });

});