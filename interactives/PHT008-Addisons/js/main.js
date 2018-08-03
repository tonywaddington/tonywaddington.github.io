jQuery(document).ready(function($){
	//open interest point description
	$('.cd-single-point').children('a').on('click', function(){
		var selectedPoint = $(this).parent('li');
		if( selectedPoint.hasClass('is-open') ) {
			selectedPoint.removeClass('is-open').addClass('visited');
		} else {
			selectedPoint.addClass('is-open').siblings('.cd-single-point.is-open').removeClass('is-open').addClass('visited');
		}
	});
	//close interest point description
	$('.cd-close-info').on('click', function(event){
		event.preventDefault();
		$(this).parents('.cd-single-point').eq(0).removeClass('is-open').addClass('visited');
	});
    
    
    //click anywhere to close tooltip
    $(document).on('click', function(event){
		if( !$(event.target).is('.cd-single-point a') && !$(event.target).is('.cd-close-info')){
		$('.cd-single-point.is-open').removeClass('is-open').addClass('visited');
}
	});
    
    //paste this code under head tag or in a seperate js file.
        	// Wait for window load
        	$(window).load(function() {
        		// Animate loader off screen
        		$(".se-pre-con").fadeOut("slow");;
        	});
    
});