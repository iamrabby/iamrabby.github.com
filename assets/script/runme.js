// Modal script
$(".js-open-modal").click(function(){
    $(".im_modal_wrapper").addClass("visible");
});
  
$(".js-close-modal").click(function(){
    $(".im_modal_wrapper").removeClass("visible");
});
  
$(document).click(function(event) {
	//if you click on anything except the modal itself or the "open modal" link, close the modal
	if (!$(event.target).closest(".modal,.js-open-modal").length) {
	  $("body").find(".im_modal_wrapper").removeClass("visible");
	}
});





// Button Hover Effect
var $cta = $('.hover_effect');

function drawGlow(e) {
	var $t = $(this)
	var x = e.pageX - $t.offset().left; 
	var y = e.pageY - $t.offset().top; 
	$t.find('.hover-glow').css({
		'transform': 'translate('+x +'px,' + y  +'px)',
		'opacity': 1
	})
}

function killGlow() {
	var $t = $(this);
	$t.find('.hover-glow').css({
		'opacity' : 0
	})
}


$cta.on({
	'mousemove': drawGlow,
	'mouseleave': killGlow
})