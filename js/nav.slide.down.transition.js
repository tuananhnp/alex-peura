$('.navbar-toggler').click(function() {
  $('#navbar4').slideToggle(300);
  fullpage_api.setMouseWheelScrolling(true);
});

$('.why-signmylogo').click(function() {
  $('#navbar4').slideToggle(300);
  $('.animated-icon').toggleClass('open');
});