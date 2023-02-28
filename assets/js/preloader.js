$(document).ready(function() {
    $(".preloader").fadeIn(1000);
    $(".preloader-gif").fadeIn(2000);
	$(".preloader").delay(5000).fadeOut("slow");
    
    $("body").delay(6000).queue(function (next){
        $(this).css('overflow-y', 'visible');
        next();
    })
})