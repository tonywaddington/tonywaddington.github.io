$(document).ready(function () {

    var transitionDuration = 2;
    var slideInfoDelay = transitionDuration * 1000 - 500;
    var steps = $('.graphic').length;
    var stepRotateAmount = 360 / steps;
    var BGrotateAmount = 0;
    var cloudsRotateAmount = 0;
    var skyTransformAmount = 0;

    var nextRotate = 0;
    var currentSlide;
    var rotateCount = 0;
    var rotateEnd = 360 - stepRotateAmount;
    var navCount = 1;


    //rotate end one step
    $('.progress-end').css({
        'transform': 'rotate(' + rotateEnd + 'deg)'
    });

    //set the length of slide transitions
    $('.FG-container,.BG-container,.clouds-container,.progress-steps,.progress-start,.progress-end,.sky-container,.stars').css({
        'transition': 'transform ' + transitionDuration + 's'
    });

    $('.clouds-container,.stars').css({
        'transition': transitionDuration + 's'
    });

    //student animation duration
    $('.student').css({
        'animation-duration': transitionDuration + 's'
    });

    //set height of sky based on how many slides there are
    $('.sky-container').css({
        'height': (steps * 100) + 'vh'
    });

    //remove blink hint animation from next button
    $('.next-btn,.nav-item').click(function () {
        $('.next-btn').removeClass('animate');
    });

    function studentAnimation() {
        $('.student').addClass('animate').one("webkitAnimationEnd oanimationend oAnimationEnd msAnimationEnd animationend",
            function (event) {
                $(this).removeClass('animate');
            });
    }

    //sky animation
    function skyAnimate() {
        $('.sky-container').css({
            'transform': 'translateY(' + skyTransformAmount + 'vh)'
        });
    }

    //menu
    $('.menu-button').click(function () {
        $('nav').toggleClass('active');
        $(this).toggleClass('active');
    });

    //progress numbers & graphic rotation for each step   
    for (i = 1; i < steps + 1; i++) {
        $('.progress-steps').append('<div style="transform: rotate(' + nextRotate + 'deg)"><p>' + i + '</p></div>');
        $('.graphic:nth-child(' + i + ')').css('transform', 'rotate(' + nextRotate + 'deg)');

        nextRotate = nextRotate + stepRotateAmount;
    }

    //hide last step at start
    $('.graphic:nth-child(' + steps + ')').css({
        'opacity': '0'
    });
    $('.progress-steps div:nth-child(' + steps + ')').css({
        'opacity': '0'
    });

    //hide previous button at the start
    if (navCount === 1) {
        $('.prev-btn').addClass('disabled');
    }

    //active state for nav items
    function navActive() {
        $('.nav-item,nav,.menu-button').removeClass('active');
        var navItem = '.nav-item' + navCount;
        $(navItem).addClass('active');
    }

    //next slide function
    function next() {
        //minus stepRotateAmount from current value of count
        rotateCount -= stepRotateAmount;
        BGrotateAmount -= stepRotateAmount / 3;
        cloudsRotateAmount -= stepRotateAmount / 6;
        skyTransformAmount += 100;

        //change the active class on nav to current slide
        navCount += 1;
        navActive();

        //show prev btn after first slide
        if (navCount > 1) {
            $('.prev-btn').removeClass('disabled');
        }

        //hide next button on last slide
        if (navCount === steps) {
            $('.next-btn').addClass('disabled');
        }

        //rotate slides amount of count
        $('.FG-container,.progress-steps').css({
            'transform': 'rotate(' + rotateCount + 'deg)'
        });

        //rotate BG
        $('.BG-container').css({
            'transform': 'rotate(' + BGrotateAmount + 'deg)'
        });

        //rotate clouds
        $('.clouds-container').css({
            'transform': 'rotate(' + cloudsRotateAmount + 'deg)'
        });

        if (navCount >= (steps - 2)) {
            $('.stars').addClass('active');
            $('.clouds-container').removeClass('active');
        }

        skyAnimate();
        progressEndsNext();
        studentAnimation();

    }


    //prev slide function
    function prev() {
        //plus stepRotateAmount from current value of count
        rotateCount += stepRotateAmount;
        BGrotateAmount += stepRotateAmount / 3;
        cloudsRotateAmount += stepRotateAmount / 6;
        skyTransformAmount -= 100;

        //change the active class on nav to current slide
        navCount -= 1;
        navActive();

        //show next btn when going back to penultimate slide
        if (navCount < steps) {
            $('.next-btn').removeClass('disabled');
        }

        //hide prev btn on first slide
        if (navCount === 1) {
            $('.prev-btn').addClass('disabled');
        }

        //rotate slides amount of count
        $('.FG-container,.progress-steps').css({
            'transform': 'rotate(' + rotateCount + 'deg)'
        });

        //rotate BG
        $('.BG-container').css({
            'transform': 'rotate(' + BGrotateAmount + 'deg)'
        });

        //rotate clouds
        $('.clouds-container').css({
            'transform': 'rotate(' + cloudsRotateAmount + 'deg)'
        });

        if (navCount <= (steps - 2)) {
            $('.stars').removeClass('active');
            $('.clouds-container').addClass('active');
        }

        skyAnimate();
        progressEndsPrev();
        studentAnimation();

    }

    function progressEndsNext() {
        //hide progress-start before first step
        $('.progress-start').css({
            'transform': 'rotate(' + rotateCount + 'deg)'
        });
        if (navCount > 6) {
            $('.progress-start').css({
                'opacity': '0'
            });
        }

        //hide progress-end after last step
        rotateEnd -= stepRotateAmount;
        $('.progress-end').css({
            'transform': 'rotate(' + rotateEnd + 'deg)'
        });
        if (navCount > steps - 5) {
            $('.progress-end').css({
                'opacity': '1'
            });
            //hide last step at end
            $('.graphic:nth-child(' + steps + ')').css({
                'opacity': '1'
            });
            $('.progress-steps div:nth-child(' + steps + ')').css({
                'opacity': '1'
            });
            //show first step
            $('.graphic:nth-child(1)').css({
                'opacity': '0'
            });
            $('.progress-steps div:nth-child(1)').css({
                'opacity': '0'
            });
        }
    }

    function progressEndsPrev() {
        //hide progress-bar before first step
        $('.progress-start').css({
            'transform': 'rotate(' + rotateCount + 'deg)'
        });

        if (navCount < 6) {
            $('.progress-start').css({
                'opacity': '1'
            });

            //hide last step at end
            $('.graphic:nth-child(' + steps + '),.progress-steps div:nth-child(' + steps + ')').css({
                'opacity': '0'
            });

            //show first step
            $('.graphic:nth-child(1),.progress-steps div:nth-child(1)').css({
                'opacity': '1'
            });
        }

        //hide progress-end after last step
        rotateEnd += stepRotateAmount;
        $('.progress-end').css({
            'transform': 'rotate(' + rotateEnd + 'deg)'
        });
        if (navCount < steps - 5) {

            $('.progress-end').css({
                'opacity': '0'
            });
            //hide last step at end
            $('.graphic:nth-child(' + steps + '),.progress-steps div:nth-child(' + steps + ')').css({
                'opacity': '0'
            });

            //show first step
            $('.graphic:nth-child(1),.progress-steps div:nth-child(1)').css({
                'opacity': '1'
            });
        }
    }


    //perform next function when next-btn clicked
    $('.next-btn').click(function () {
        next();
        slideInfo();
        sectionTitle();
    });

    //perform prev function when prev-btn clicked
    $('.prev-btn').click(function () {
        prev();
        slideInfo();
        sectionTitle();
    });


    //nav function
    $('.nav-item').click(navItem);
    $('.restart-btn').click(function() {
        $('.nav-item1').click();  
    });

    function navItem() {

        //set the navCount so that the next and prev btns still work in changing the nav item to current slide
        navCount = $(this).data('nav-item') + 1;

        sectionTitle();

        //close menu
        $('nav,.menu-button').removeClass('active');

        //change class of current active tab
        $('.nav-item').removeClass('active');
        $(this).addClass('active');

        //work out translate value for the slide
        var goto = $(this).data('nav-item') * stepRotateAmount;
        rotateCount = -goto;
        BGrotateAmount = rotateCount / 3;
        cloudsRotateAmount = rotateCount / 6;
        skyTransformAmount = $(this).data('nav-item') * 100;

        //rotate slides amount of count
        $('.FG-container,.progress-steps').css({
            'transform': 'rotate(' + rotateCount + 'deg)'
        });
        //rotate BG
        $('.BG-container').css({
            'transform': 'rotate(' + BGrotateAmount + 'deg)'
        });
        //rotate clouds
        $('.clouds-container').css({
            'transform': 'rotate(' + cloudsRotateAmount + 'deg)'
        });

        //hide next btn if goto last slide, else show it
        if (navCount === steps) {
            $('.next-btn').addClass('disabled');
        } else {
            $('.next-btn').removeClass('disabled');
        }

        //if goto first slide, hide prev btn
        if (navCount === 1) {
            $('.prev-btn').addClass('disabled');
        } else {
            $('.prev-btn').removeClass('disabled');
        }

        if (navCount >= (steps - 2)) {
            $('.stars').addClass('active');
            $('.clouds-container').removeClass('active');
        }

        if (navCount < (steps - 2)) {
            $('.stars').removeClass('active');
            $('.clouds-container').addClass('active');
        }

        skyAnimate();
        slideInfo();
        studentAnimation();


        rotateEnd = (steps - $(this).data('nav-item') - 1) * stepRotateAmount;
        $('.progress-end').css({
            'transform': 'rotate(' + rotateEnd + 'deg)'
        });

        if ($(this).data('nav-item') <= steps - 2) {
            setTimeout(function () {
                $('.progress-end').css({
                    'opacity': '0'
                });
                //hide last step at end
                $('.graphic:nth-child(' + steps + '),.progress-steps div:nth-child(' + steps + ')').css({
                    'opacity': '0'
                });

                //show first step
                $('.graphic:nth-child(1),.progress-steps div:nth-child(1)').css({
                    'opacity': '1'
                });
            }, transitionDuration * 1000 / steps * 3);
        }

        if ($(this).data('nav-item') >= steps - 2) {
            setTimeout(function () {
                $('.progress-end').css({
                    'opacity': '1'
                });
                //hide last step at end
                $('.graphic:nth-child(' + steps + '),.progress-steps div:nth-child(' + steps + ')').css({
                    'opacity': '1'
                });

                //show first step
                $('.graphic:nth-child(1),.progress-steps div:nth-child(1)').css({
                    'opacity': '0'
                });
            }, transitionDuration * 1000 / steps * 3);
        }

        rotateCount = ($(this).data('nav-item')) * -stepRotateAmount;
        $('.progress-start').css({
            'transform': 'rotate(' + rotateCount + 'deg)'
        });


        if ($(this).data('nav-item') < 2) {
            setTimeout(function () {
                $('.progress-start').css({
                    'opacity': '1'
                });
            }, transitionDuration * 1000 / steps * 3);
        } else if ($(this).data('nav-item') > 2) {
            setTimeout(function () {
                $('.progress-start').css({
                    'opacity': '0'
                });
            }, transitionDuration * 1000 / steps * 3);
        }

    }


    //Slide info

    function slideInfo() {

        $('.info').fadeOut(500);
        currentSlide = '.info-' + navCount;

        setTimeout(function () {
            $(currentSlide).fadeIn(500);
        }, slideInfoDelay);
    }


    //Section title
    function sectionTitle() {
        if (navCount === 1) {
            $('.section-titles div').removeClass('active');
        }
        
        if (navCount > 1 && navCount <= 5) {
            $('.section-titles div').removeClass('active');
            $('.section-1').addClass('active');
            console.log('Pre-enrolment');
        }

        if (navCount > 5 && navCount <= 11) {
            $('.section-titles div').removeClass('active');
            $('.section-2').addClass('active');
            console.log('Study');
        }

        if (navCount > 11 && navCount <= 13) {
            $('.section-titles div').removeClass('active');
            $('.section-3').addClass('active');
            console.log('Assessment');
        }

        if (navCount > 13) {
            $('.section-titles div').removeClass('active');
            $('.section-4').addClass('active');
            console.log('Next steps');
        }
    }

    //end doc ready
});
