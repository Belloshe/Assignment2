const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('active');
});

$(document).ready(function() {
  $('.read-more').on('click', function() {
    $('.progress-bar').each(function() {
      var width = $(this).data('progress');
      $(this).css('width', width);
    });
    $('.skill').fadeIn();
  });
});
