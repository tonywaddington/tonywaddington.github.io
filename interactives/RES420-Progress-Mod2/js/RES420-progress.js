$(document).ready(function () {
    
    //Set level status on the map
    // complete, current or locked
    $('.L1').addClass('complete');
    $('.L2').addClass('current');
    $('.L3').addClass('locked');
    $('.L4').addClass('locked');
    
    //INTRO PAGE
    function closeIntro() {
        $('.intro-page').fadeOut(500);
        $('.locked,.complete').addClass('iconGrow');
    }
    
    //clos intro modal + scroll to current level
    var page = $(".map-page");

    $('.intro-btn').click(function (e) {

        closeIntro();
        
        page.on('wheel DOMMouseScroll mousewheel keyup touchmove', function () {
            page.stop();
        });

        page.animate({
            scrollTop: $('.map-level.current').offset().top
        }, 4000, function () {
            page.off('wheel DOMMouseScroll mousewheel keyup touchmove');
        });

        return false;
    });

    var level;
    var questionCount = 1;
    var modal;
    var questionAmount;
    var progressTransform;
    var progressTransform;

    //MODAL
    //top align modal if window too short
    function topAlignModal() {
        var activeModal = $('.modal.active');
        var activeModalContainer = $('.modal.active .modal-container');
        var modalHeight = activeModal.innerHeight();
        var modalContainerHeight = activeModalContainer.innerHeight() + 40;

        if (modalContainerHeight > modalHeight) {
            $('.modal.active .modal-container').addClass('top-align');
        } else {
            $('.modal.active .modal-container').removeClass('top-align');
        }
    }

    function openIntro(e) {
        level = $(this).data('level');
        var linkName = $(this).attr('id');
        modal = '.' + linkName;
        var x = e.clientX;
        var y = e.clientY;
        var transformOrigin = x + "px " + y + "px";

        $(modal).addClass('active').css('transform-origin', transformOrigin);
        $('.modal-bg').fadeIn(1500);

        var moduleName = $(this).data('module');

        //change header text
        $('.title-name').empty().text(moduleName);

        $('.title-wrapper').addClass('active');

        topAlignModal();

        e.stopPropagation();
    }

    function openQuestions() {
        var linkName = $(this).attr('id');
        modal = '.' + linkName;

        $(modal).addClass('active').fadeIn(500);

        slides = $('.modal.active .slide').length * 100 - 100;

        //work out % to transform progressbar
        questionAmount = $(modal + ' .progress-bar .progress').length - 1;

        progressTransform = 1 / questionAmount;
    }

    function closeModal() {
        $('.modal,.title-wrapper').removeClass('active');
        $('.question-modal').fadeOut(500);
        $('.modal-bg').fadeOut(200);

        setTimeout(function () {
            $('.modal-container').removeAttr('style').removeClass('top-align');
        }, 500);
    }

    function lockedLink() {
        $(this).addClass('active').one('webkitAnimationEnd oanimationend oAnimationEnd msAnimationEnd animationend',
            function (e) {
                $(this).removeClass('active');
            });;
    }

    $('.map-level.locked .link').click(lockedLink);
    $('.map-level:not(.locked) .link').click(openIntro);
    $('.start-btn').click(openQuestions);
    $('.close-modal').click(closeModal);


    //-------------QUESTIONs--------------
    $('.next-btn,.continue-btn,.answerFeedback').hide();

    function start() {
        $('.submit-btn').show();
        setTimeout(function () {
            $('.intro-modal').removeClass('active');
        }, 600);
    }

    $('.start-btn').click(start);

    function submit() {
        //current question
        var currentAnswers = '.answers-' + level + '-' + questionCount;

        //feedback
        //'correct' or 'wrong' stored in answers li
        var answer = $('.modal.active .answers li.selected').data('answer');

        //select either wrongFeedback or correctFeedback
        var feedback = '.' + answer + 'Feedback';

        //fadeIn wrongFeedback or correctFeedback
        $(feedback).fadeIn(500);
        $('.feedback svg').one('webkitAnimationEnd oanimationend oAnimationEnd msAnimationEnd animationend',
            function (e) {

                // code to execute after animation ends
                //fadeOut wrongFeedback or correctFeedback
                $(feedback).fadeOut(300);
            });

        if (answer === 'correct') {
            $('.correctFeedback svg').one('webkitAnimationEnd oanimationend oAnimationEnd msAnimationEnd animationend',
                function (e) {

                    var answer = 0;
                    // code to execute after animation ends
                    //go to feedback

                    $('.answers li').addClass('disabled');
                    $('.submit-btn').hide();
                    $('.next-btn').show();
                    $('.answerFeedback-' + questionCount).show();

                    $('.question-modal').animate({
                        scrollTop: $('.question-modal').height()
                    }, 500);
                });
        }


    }
    $('.submit-btn').click(submit);
    $('.next-btn').click(function () {
        next();
        questionCount++;
        currentAnswers = '.answers-' + level + '-' + questionCount;
    });


    $('.answers li').click(function () {
        $('.answers li').removeClass('selected');
        $(this).addClass('selected');

        $('.submit-btn').removeClass('disabled');
    });


    //-----------------SLIDESHOW--------------
    var count = 0;
    var progressCount = 2;
    var completeCount = 1;

    var currentProgress = '.progress:nth-child(' + progressCount + ')';
    $(currentProgress).addClass('active');
    progressBar();

    //work out max translate value based on number of slides
    var slides;

    //hide previous button at the start
    //    if (count === 0) {
    //        $('.prev-btn').hide();
    //        }


    function progressBar() {
        //advance progress bar

        var transformAmount = progressTransform * questionCount;

        if (transformAmount <= 1) {
            $('.progress-bar-fill').css('transform', 'scaleX(' + transformAmount + ')');
        }

        setTimeout(function () {
            var currentProgress = '.progress:nth-child(' + progressCount + ')';
            $(currentProgress).addClass('active');
            progressCount++;
        }, 1000);

        var completeProgress = '.progress:nth-child(' + completeCount + ')';
        $(completeProgress).addClass('complete');
        completeCount++;
    }

    var foregroundCount = 0;
    var backgroundCount = foregroundCount / 2;

    //next slide function
    function next() {
        foregroundCount -= 500;
        backgroundCount = foregroundCount / 2;
        var backgroundTransform = backgroundCount + 'px 100%';
        var foregroundTransform = foregroundCount + 'px 100%';

        $('.question-modal').css('background-position', backgroundTransform);
        $('.question-bg').css('background-position', foregroundTransform);

        var nextSlide = questionCount + 1;

        $('.slide').removeClass('current-slide');
        $('.slide-' + nextSlide).addClass('current-slide');

        $('.question-modal').animate({
            scrollTop: 0
        }, 500);

        $('.next-btn').hide();
        $('.answers li').removeClass('disabled');
        $('.answerFeedback').hide();



        $('.submit-btn').show().addClass('disabled');

        progressBar();

        //minus 100 from current value of count
        count -= 100;

        //translate the slide by the current value of count
        $('.slide').css({
            'transform': 'translateX(' + (count) + '%)'
        });

        //last slide
        if (count === -slides) {
            $('.submit-btn').hide();
            $('.continue-btn').show();
            $('.stars,.slide h1').addClass('active');
            $('.feedback-bg').fadeIn(1500);
        }
    }

    //reset
    function reset() {
        level = 0;
        questionCount = 1;
        count = 0;
        progressCount = 3;
        completeCount = 2;

        setTimeout(function () {
            $('.continue-btn').hide();
            $('.start-btn').show();
            $('.answers li').removeClass('selected');
            $('.slide,.progress-bar-fill').removeAttr('style');
            $('.progress,.stars,.slide h1').removeClass('active');
            $('.feedback-bg').hide(0);
            $('.progress:nth-child(2)').addClass('active');
            $('.progress').removeClass('complete');
            $('.slide').removeClass('current-slide');
            $('.slide-1').addClass('current-slide');
        }, 600);
    }

    //continue button
    function continueBtn() {

        var completedLevel = '.' + level;
        var currentLevel = completedLevel + '.current'

        $(currentLevel).removeClass('current').addClass('complete iconGrow');

        closeModal();
        reset();
    }

    $('.continue-btn').click(continueBtn);


    //end doc ready
});
