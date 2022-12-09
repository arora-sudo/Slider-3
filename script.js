$(".g").owlCarousel({
  autoWidth: true,
  loop: false
});
$(document).ready(function () {
  $(".g .item").click(function () {
    $(".g .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
	
  });
});