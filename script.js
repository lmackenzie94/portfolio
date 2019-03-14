$(function () {

    $('.landingTextBox .button').delay(8000).show(0); 

    $('.hamburger').on('click', function () {
        $('.hamburger').toggleClass('active'),
            $('.line1').toggleClass('active'),
            $('.line2').toggleClass('active'),
            $('.line3').toggleClass('active');
        $('.headerNav').toggleClass('active');
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
    startDelay: 3000
});
var typed = new Typed('#p2', {
    strings: [
        "I'm a Toronto-based Web Developer"
    ],
    typeSpeed: 40,
    startDelay: 4500
});
var typed = new Typed('#p3', {
    strings: [
        "Thanks for stopping by!"
    ],
    typeSpeed: 40,
    startDelay: 7000
});
