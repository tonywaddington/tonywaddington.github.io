$(document).ready(function () {

    //preloader
    $(window).load(function () {
        $('.preloader').fadeOut(500);
        $('body').removeClass('noscroll');
        heroText();
    });

    function heroText() {
        $('.tags,.hero-text h1,.hero-description,.hero-text .button,.home-arrow').removeClass('animate');
    }

    //read more button - skip to project intro
    function readMore() {
        $('html, body').animate({
            scrollTop: $(".project").offset().top
        }, 800);
    }
    $('.btn-plus,.home-btn').click(readMore);

    //Menu and About page
    var menuOpen = false;

    function openMenu() {
        $('.menuIcon, nav, .menu-link p,.header-line').addClass('open');

        menuOpen = true;
    }

    function closeMenu() {
        if (menuOpen) {
            $('.menuIcon, nav, .menu-link p,.header-line').removeClass('open');

            menuOpen = false;
        }
    }

    $('.menu-link').click(function () {
        if (menuOpen == false) {
            openMenu();
        } else {
            closeMenu();
            aboutPageClose();
        }
    });

    function aboutPageOpen() {
        $('.about-page,.header-line,.menuIcon,.menu-link p').addClass('open');

        $('.about-btn').addClass('open');

        $('body').addClass('noscroll');

        menuOpen = true;
    }

    function aboutPageClose() {
        $('.about-page,.header-line,.menuIcon,.menu-link p').removeClass('open').one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
            function (event) {
                // Do something when the transition ends
            $('.about-page').scrollTop(0);
            });

        $('body').removeClass('noscroll');

        menuOpen = false;
    }

    $('.about-btn').click(aboutPageOpen);
    $('.about-close-btn').click(aboutPageClose);

    $(document).keydown(function (e) {
        if (e.keyCode == 27) {
            closeMenu();
            aboutPageClose();
        }
    });

    //back to top
    function backToTop() {
        var timer = 2000

        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, timer);

        $('.tags,.hero-text h1,.hero-description,.hero-text .button,.home-arrow').addClass('animate');

        setTimeout(function () {
            $('.tags,.hero-text h1,.hero-description,.hero-text .button,.home-arrow').removeClass('animate');
        }, timer);

        setTimeout(function () {
            $('footer').removeClass('active');
        }, timer / 2);
    }

    $('.btn-top').click(backToTop);

    //close menu if click on active page in menu
    $('nav a.active').click(function () {
        $('.menuIcon, nav, .menu-link p,.header-line').removeClass('open');
    });

    //document ready end
});
