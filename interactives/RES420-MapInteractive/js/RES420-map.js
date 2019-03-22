$(document).ready(function () {

    
    
    //INTRO PAGE
    $('.demo-2,.start-btn').hide();

    function nextDemo() {
        $('.demo-1,.next-btn').hide();
        $('.demo-2,.start-btn').show();
    }

    $('.next-btn').click(nextDemo);

    function closeIntro() {
        $('.intro-page').fadeOut(500);

        setTimeout(function () {
            $('.demo-1,.next-btn').show();
            $('.demo-2,.start-btn').hide();
        }, 550);
    }
    $('.start-btn').click(closeIntro);

    $('.help-btn').click(function () {
        $('.intro-page').fadeIn(500);
    });

    //INFO SECTION
    function openInfo() {
        //active info tab
        $('.info').removeClass('current-slide');
        $('.menu').addClass('open');

        $('.menu-btn').click();

        var currentInfo = $(this).data('info');
        var info = '.' + currentInfo;
        $(info).addClass('active current-slide');

        setTimeout(function () {
            $('.info:not(.current-slide)').removeClass('active');
        }, 700);

        //active state on map buildings
        var currentMaplink = $(this).data('maplink');
        var maplink = '#' + currentMaplink;

        $('.map-link').attr('class', 'map-link');
        $(maplink).attr('class', 'map-link active');

        $('.svg-pan-zoom_viewport').attr('class', 'svg-pan-zoom_viewport transition').one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
            function (event) {
                // Do something when the transition ends
            $('.svg-pan-zoom_viewport').attr('class', 'svg-pan-zoom_viewport')
            });
    }

    function closeInfo() {
        $('.map-link').attr('class', 'map-link');
        $('.info,nav').removeClass('active');
        setTimeout(function () {
            $('.info').scrollTop(0);
        }, 500);
    }

    $('.nav-item').click(openInfo);
    $('.map-link').click(openInfo);
    $('.back-btn').click(closeInfo);


    //MODAL
    function openModal() {
        var linkName = $(this).attr('id');
        modal = '.' + linkName;

        $(modal).addClass('active');
        $('.modal-bg').fadeIn(500);
    }

    function closeModal() {
        $('.modal').removeClass('active');
        $('.modal-bg').fadeOut(500);

        setTimeout(function () {
            $('.modal-container').removeAttr('style').removeClass('top-align');
        }, 500);
    }

    $('.link').click(openModal);
    $('.close-modal').click(closeModal);


    //MOBILE MENU
    function openMobile() {
        $(this).removeClass('active');
        $('.map-btn').addClass('active');

        $('.menu').addClass('open');
    }

    function closeMobile() {
        $(this).removeClass('active');
        $('.menu-btn').addClass('active');

        setTimeout(function () {
            $('.info').scrollTop(0);
        }, 500);

        $('.menu').removeClass('open');
        $('.map-link').attr('class', 'map-link');
    }

    $('.menu-btn').click(openMobile);
    $('.map-btn').click(closeMobile);

    //end doc ready
});
