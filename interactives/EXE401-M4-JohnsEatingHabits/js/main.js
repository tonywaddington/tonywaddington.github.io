$(document).ready(function () {

    //intro page button
    $('.button-intro').click(function () {
        $('.page-intro').fadeOut(500);
    });

    //HELP BUTTON
    $('.button-help').click(function () {
        $('.page-intro').fadeIn(500);
    });

    var goto;

    //GO TO PAGE
    function pageGoto() {
        goto = $(this).data('goto');
        var page = '.page-' + goto;

        $('.page-menu').addClass('leavingPage');
        $(page).addClass('currentPage');
    }

    $('.button-menu').click(pageGoto);


    //BACK BUTTON
    function backToMenu() {
        $('.page-menu').removeClass('leavingPage');
        $('.optionContent').show();
        $('.optionFeedback').hide();
        $('.optionsSection').removeClass(answer);
        $('.option,.optionText').css('transform', 'translateX(0%)');

        sliderTranslate = 0;
        slideNumber = 1;

        if ($('.page').hasClass('currentPage')) {
            $('.page').removeClass('currentPage');
        }

        sliderButtons();
        continueBtn = false;
        tryAgain();
    }

    $('.button-back').click(backToMenu);

    //SLIDER BUTTONS
    function sliderButtons() {
        if (sliderTranslate === 0) {
            $('.button-left').addClass('disabled');
        } else {
            $('.button-left').removeClass('disabled');
        }

        if (sliderTranslate === slideLength * -100 + 100) {
            $('.button-right').addClass('disabled');
        } else {
            $('.button-right').removeClass('disabled');
        }
    }

    //SLIDESHOWS
    var sliderTranslate = 0;
    var slideLength = 3;

    var slideNumber = 1;
    var optionText = '.optionText-' + goto + slideNumber;

    var answer = $(optionText).data('answer');

    function slider() {
        optionText = '.optionText-' + goto + slideNumber;
        var amount = $(this).data('translate');
        sliderTranslate = sliderTranslate + amount;
        var translate = sliderTranslate + "%";

        var slideAmount = $(this).data('slide');
        slideNumber = slideNumber + slideAmount;
        optionText = '.optionText-' + goto + slideNumber;

        sliderButtons();

        $('.option,.optionText').css('transform', 'translateX(' + translate + ')');
    }

    $('.button-slider').click(slider);

    //FEEDBACK 
    function feedback() {
        optionText = '.optionText-' + goto + slideNumber;
        answer = $(optionText).data('answer');
        $('.optionsSection').addClass(answer);
        $('.optionContent').hide();
        $('.optionFeedback').show();
        $('.button-slider').addClass('disabled');

        $('.button-select').addClass(answer).empty().text('Try again');
        
        if (answer === "correct" && continueBtn === false) {
            $('.button-select').empty().text('Continue');
            continueBtn = true;
        }
    }

    var continueBtn = false;

    //page count - intro and menu page
    var totalCorrect = $('.page').length - 2;
    var correctCount = 0;
    
    // SELECT BUTTON
    $('.button-select').click(function () {
        var menuList = '.list-' + goto;
        var menuCorrect = '.correct-' + goto;
        var menuButton = '.button-' + goto;
        var menuTick = '.tick-' + goto;
        var menuImg = '.menuItem-' + goto;

        if ($(this).hasClass('allowed')) {
            feedback();
            $(this).removeClass('allowed');
        } else if (answer === "correct" && continueBtn === true) {
            //CONTINUE FUNCTIONS
            $('.page').removeClass('currentPage');
            $('.page-menu').removeClass('leavingPage');
            $('.optionContent').show();
            $('.optionFeedback').hide();
            $('.optionsSection').removeClass(answer);
            $(menuList).empty();
            $(menuCorrect).appendTo(menuList).addClass('animate');
            $(menuButton).hide();
            $(menuTick).show();
            $(menuImg).addClass('correct');
            $('.option,.optionText').css('transform', 'translateX(0%)');
            sliderTranslate = 0;
            slideNumber = 1;
            $('.button-select').empty().text('Select').addClass('allowed');
            sliderButtons();
            continueBtn = false;
            
            correctCount++;
            
            if (correctCount === totalCorrect) {
                $('.instruction p').empty().html('<i class="far fa-check-circle"></i> Well done! This is a much healthier eating habit for John.').addClass('animate');
                $('.instruction').addClass('correct');
                $('.menuItem,.scroll-container').addClass('complete');
                $('.complete-tick').show();
            }

        } else {
            //Wrong answer
            tryAgain();
        }

    });

    //TRY AGAIN
    function tryAgain() {
        $('.optionContent').show();
        $('.optionFeedback').hide();
        $('.optionsSection').removeClass(answer);
        $('.button-select').removeClass(answer).empty().text('Select');

        sliderButtons();

        $('.button-select').addClass('allowed');
    }
    
    //TOOLTIP 
    function tooltip(e) {
        $(this).addClass('active');
        e.stopPropagation();
    }
    
    $('body').click(function() {
        $('.tooltip').removeClass('active');
    });
    
    $('.tooltip').click(tooltip);

    //RELOAD 
    function reload() {
        location.reload();
    }

    $('.refresh').click(reload);

    //END DOC READY
});
