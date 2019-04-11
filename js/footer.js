$(document).ready(function () {

    $(window).load(function () {
        footer();
    });

    function footer(e) {
        const hero = document.querySelector('.hero-container');
        const footer = document.querySelector('footer');
        const project = document.querySelector('.project');
        const contact = document.querySelector('.contact');

        var projectTop = project.offsetTop;
        var projectHeight = project.offsetHeight;

        if (window.pageYOffset > projectTop) {
            hero.classList.add('hide');
        } else {
            hero.classList.remove('hide');
        }

        if (window.pageYOffset > projectHeight - 100) {
            footer.classList.add('active');
        } else {
            footer.classList.remove('active');
        }

        //contact
        if (window.pageYOffset > projectTop && window.pageYOffset < projectHeight - 100 && window.matchMedia("(max-width: 500px)").matches) {
            contact.classList.add('hide');
        } else {
            contact.classList.remove('hide');
        }
    }

    window.onscroll = function () {
        footer();
    }

    //FOOTER SLIDESHOW - MOBILE    
    var footerTranslate = 0;
    var footerSlideLength = $('.footer-col').length;

    function footerSlider() {
        var amount = $(this).data('translate');
        footerTranslate = footerTranslate + amount;

        var translate = footerTranslate + "%";

        if (footerTranslate === 0) {
            $('.footer-button-left').addClass('disabled');
        } else {
            $('.footer-button-left').removeClass('disabled');
        }

        if (footerTranslate === footerSlideLength * -100 + 100) {
            $('.footer-button-right').addClass('disabled');
        } else {
            $('.footer-button-right').removeClass('disabled');
        }

        $('.footer-col').css('transform', 'translateX(' + translate + ')');

    }

    $('.footer-button').click(footerSlider);

    //if window is resized, go back to first slide
    $(window).resize(function () {
        if (window.matchMedia('(min-width: 600px)').matches) {
            $('.footer-col').css('transform', 'translateX(0%)');
            $('.footer-button-left').addClass('disabled');
            $('.footer-button-right').removeClass('disabled');
            footerTranslate = 0;
        }
    });

    //document ready end
});
