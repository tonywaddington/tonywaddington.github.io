$(document).ready(function() {
    
    function activeNav() {
        var tabNumber = $(this).data('tab');
        var image = ".image-" + tabNumber;
        var info = ".info-" + tabNumber;
        
        if ($('.nav-item,.image,.info').hasClass('active')) {
            $('.nav-item,.image,.info').removeClass('active');
        }
        $(this).addClass('active');
        $(image).addClass('active');
        $(info).addClass('active');
        
        $('html, body, .wrapper').stop(true, true).delay(500).animate({scrollTop:$('.info').position().top}, 0);
    }
    
    $('.nav-item').click(activeNav);
    
    $('.barChart').each(function() {
        var barWidth = $(this).data('bar');
         $(this).find('.bar').css('transform','translate(0px,-5px) scaleX(' + barWidth + ')');
        
        var $lines;
        var linesAmount = $(this).data('lines');
        for (var i = 0; i < linesAmount; i++) {
            $lines = $('<i><i/>');
            $(this).append($lines);
        }    
    });
    
    function menuOpen() {
        $('nav,.menu-btn').toggleClass('active');
    }
    function menuClose() {
        $('nav,.menu-btn').removeClass('active');
    }
    
    $('.menu-btn').click(menuOpen);
    $('.nav-item').click(menuClose);
    
    //end doc ready
});