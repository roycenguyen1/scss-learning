$(document).ready(function() {
	$(".hamburger").on('click', function() {
    $("header").toggleClass("open");
  });
  $("a").on('click', function(){
    $("header").removeClass('open');
  })
});
