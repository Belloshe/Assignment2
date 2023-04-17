$(document).ready(function() {
 
  $('.navbar-menu > li').hover(
    function() {
      $('ul', this).stop().slideDown(200);
    },
    function() {
      $('ul', this).stop().slideUp(200);
    }
  );
});

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:5
      }
    }
  });
});
