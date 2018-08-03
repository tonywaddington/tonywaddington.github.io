$(document).ready(function () {

    //preloader
    $(window).load(function () {
        $('.preloader').fadeOut(500);
        $('body').removeClass('noscroll');
        heroText();
        footer(); 
    });
    
    function heroText() {
        $('.tags,.hero-text h1,.hero-description,.hero-text .button').removeClass('animate');
    }

    //read more button - skip to project intro
    function readMore() {
        $('html, body').animate({
            scrollTop: $(".project").offset().top
        }, 800);
    }
    $('.btn-plus').click(readMore);
    
    //menu icon
    $('.menu-link').click(function () {
        $('.menuIcon, nav, .menu-link p,.header-line').toggleClass('open');

        $("nav").animate({
            scrollTop: 0
        }, "slow");
    });
    
    //back to top
    function backToTop() {
        var timer = 2000
        
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, timer);
        
        $('.tags,.hero-text h1,.hero-description,.hero-text .button').addClass('animate');
        
        setTimeout(function(){ 
            $('.tags,.hero-text h1,.hero-description,.hero-text .button').removeClass('animate'); 
        }, timer);
        
        setTimeout(function(){ 
            $('footer').removeClass('active'); 
        }, timer / 2);
    }
    
    $('.btn-top').click(backToTop);
    
    //footer
//    function debounce(func, wait = 20, immediate = true) {
//      var timeout;
//      return function() {
//        var context = this, args = arguments;
//        var later = function() {
//          timeout = null;
//          if (!immediate) func.apply(context, args);
//        };
//        var callNow = immediate && !timeout;
//        clearTimeout(timeout);
//        timeout = setTimeout(later, wait);
//        if (callNow) func.apply(context, args);
//      };
//    };
    
    function footer(e) {
        const footer = document.querySelector('footer');
        const project = document.querySelector('.project');
        
        var projectHeight = project.offsetHeight;
        
        if (window.pageYOffset > projectHeight / 2) {
            footer.classList.add('active');
        } else {
            footer.classList.remove('active');
        }
    }
    
    window.onscroll = function() {
        footer();
    }
    
//    window.addEventListener('scroll', debounce(footer));
    
    
    
    
    
    //header

    // window.onscroll = function() {
    //     var $el = $('.slider-container');
    //     var sliderBottom = $el.position().top + $el.offset().top + $el.outerHeight(true);
    //     var nav = document.querySelector('header');
    //     if ( window.pageYOffset > sliderBottom ) {
    //         nav.classList.add('fixed-nav');
    //     } else {
    //         nav.classList.remove('fixed-nav');
    //     }
    // }

    

    //homepage slideshow
//    var timer;
//
//    var slideCount = 1;
//    var slideNextCount = 2;
//
//    function startTimer() {
//        timer = setInterval(function () {
//            var currentSlide = '.slide-' + slideCount;
//            var nextSlide = '.slide-' + slideNextCount;
//            var nextSlant = $(currentSlide).data('slant');
//            var slideLength = $('.slide').length;
//
//            $(nextSlide).addClass('currentSlide').css('z-index', '3');
//            $('.slant').css('background-color', nextSlant);
//            $(currentSlide).addClass('leavingSlide').removeClass('currentSlide').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
//                function (e) {
//                    // code to execute after transition ends
//                    $(this).removeClass('leavingSlide').css('z-index', '0');
//                });
//
//            slideCount++;
//            slideNextCount++;
//
//            if (slideCount == slideLength + 1) {
//                slideCount = 1;
//                slideNextCount = 2;
//                $('.slide-1').addClass('currentSlide').css('z-index', '4');
//            }
//
//        }, 3000);
////    }
//
//    $('.slide .button').hover(function (ev) {
//        clearInterval(timer);
//    }, function (ev) {
//        startTimer();
//    });
//
//    startTimer();


    //header

    // window.onscroll = function() {
    //     var $el = $('.slider-container');
    //     var sliderBottom = $el.position().top + $el.offset().top + $el.outerHeight(true);
    //     var nav = document.querySelector('header');
    //     if ( window.pageYOffset > sliderBottom ) {
    //         nav.classList.add('fixed-nav');
    //     } else {
    //         nav.classList.remove('fixed-nav');
    //     }
    // }
    


    //document ready end
});
