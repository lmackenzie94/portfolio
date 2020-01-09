$(function() {
  // $('#contact_me_by_fax_only').on('change', function() {
  //   if ($(this).prop('checked') == true) {
  //     $('#submit').prop('disabled', true);
  //   } else {
  //     $('#submit').prop('disabled', false);
  //   }
  // });

  $('.landingTextBox .button')
    .delay(4500)
    .show(0);

  $('.hamburger').on('click', function() {
    $('.hamburger').toggleClass('active'),
      $('.line1').toggleClass('active'),
      $('.line2').toggleClass('active'),
      $('.line3').toggleClass('active');
    $('.headerNav').toggleClass('active');
  });

  $('a').smoothScroll({
    speed: 1000
  });
});

// typed.js for the landing page
var typed = new Typed('#p1', {
  strings: ["Hey, I'm Luke"],
  typeSpeed: 25,
  startDelay: 1000
});
var typed = new Typed('#p2', {
  strings: ["I'm a Toronto-based Web Developer"],
  typeSpeed: 25,
  startDelay: 2000
});
var typed = new Typed('#p3', {
  strings: ['Thanks for stopping by!'],
  typeSpeed: 25,
  startDelay: 3500
});
