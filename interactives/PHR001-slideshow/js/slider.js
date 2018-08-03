$(document).ready(function() {

    var count = 0;
    var navCount = 1;
    
    //work out max translate value based on number of slides
    var slides = $('.info').length * 100 - 100;
    
    //hide previous button at the start
    if (count === 0) {
        $('.prev-btn').hide();
        }
    
    //active state for nav items
    function navActive() {
        $('.nav-item').removeClass('active');
        var navItem = '.nav-item' + navCount;
        $(navItem).addClass('active');
    }
    
    //next slide function
    function next() {

        //show prev btn after first slide
        if (count === 0) {
            $('.prev-btn').show();
            }

        //minus 100 from current value of count
        count -= 100;
        
        //change the active class on nav to current slide
        navCount += 1;
        navActive();
        
        //translate the slide by the current value of count
        $('.info').css({
            'transform': 'translateX(' + (count) + '%)'
            });
        
        //hide next button on last slide
        if (count === -slides) {
            $('.next-btn').hide();
            } 
    }
    
    
    //prev slide function
    function prev() {
        
        //show next btn when going back to penultimate slide
        if (count === -slides) {
            $('.next-btn').show();
            }
        
        //add 100 to current value of count
        count += 100;
        
        //change the active class on nav to current slide
        navCount -= 1;
        navActive()
        
        //translate the slide by the current value of count
        $('.info').css({
            'transform': 'translateX(' + (count) + '%)'
            });
        
        //hide prev btn on first slide
        if (count === 0) {
            $('.prev-btn').hide();
            }
    }
    
    
    //perform next function when next-btn clicked
    $('.next-btn').click(function() {
       next(); 

    });
    
    //perform prev function when prev-btn clicked
    $('.prev-btn').click(function() {
       prev(); 
    });
    
    
    //nav function
    $('.nav-item').click(function() {
        
        //change class of current active tab
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
        
        //hide prev btn if on first slide
        if (count === 0) {
            $('.prev-btn').show();
            }
        
        //work out translate value for the slide
        var goto = $(this).data('nav-item') * 100;
        count = -goto;
        
        
        $('.info').css({
            'transform': 'translateX(' + (-goto) + '%)'
            });
        
        //hide next btn if goto last slide, else show it
        if (count === -slides) {
            $('.next-btn').hide();
            } else {
                $('.next-btn').show();
            }
        
        //if goto first slide, hide prev btn
        if (count === 0) {
            $('.prev-btn').hide();
            }
        
        //set the navCount so that the next and prev btns still work in changing the nav item to current slide
        navCount = $(this).data('nav-item') + 1;

    });
    
    
    
    
    //keyboard functions
    $(document).keydown(function(e) {
        
        //right arrow key - next slide function
       if (e.keyCode == 39 && count > -slides) {
           next();
            navActive();
       } 
        
        //left arrow key - prev slide function
        if (e.keyCode == 37 && count < 0) {
           prev();
            navActive();
       } 
        
        
        //use 1-8 on keybard to navigate slides
        if (e.keyCode == 49) {
           $('.nav div:nth-of-type(1)').click();
        }
        
        if (e.keyCode == 50) {
           $('.nav div:nth-of-type(2)').click();
        }
        
        if (e.keyCode == 51) {
           $('.nav div:nth-of-type(3)').click();
        }
        
        if (e.keyCode == 52) {
           $('.nav div:nth-of-type(4)').click();
        }
        
        if (e.keyCode == 53) {
           $('.nav div:nth-of-type(5)').click();
        }
        
        if (e.keyCode == 54) {
           $('.nav div:nth-of-type(6)').click();
        }
        
        if (e.keyCode == 55) {
           $('.nav div:nth-of-type(7)').click();
        }
        
        if (e.keyCode == 56) {
           $('.nav div:nth-of-type(8)').click();
        }
    });
    
    
    //end doc ready
});