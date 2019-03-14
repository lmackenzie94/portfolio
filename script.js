$(function () {

    $('.landingTextBox .button').delay(7000).fadeIn();

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

// typed.js
var typed = new Typed('#p1', {
    strings: [
        "Hey, I'm Luke"
    ],
    typeSpeed: 40,
    startDelay: 1000
});
var typed = new Typed('#p2', {
    strings: [
        "I'm a Toronto-based Web Developer"
    ],
    typeSpeed: 40,
    startDelay: 2500
});
var typed = new Typed('#p3', {
    strings: [
        "Thanks for stopping by!"
    ],
    typeSpeed: 40,
    startDelay: 5000
});
