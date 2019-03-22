$(document).ready(function () {



    //muscles toggle
    var toggle = true;
    var musclesDiagramFront = $('#front-muscles');
    var musclesDiagramBack = $('#back-muscles');

    function musclesToggle() {

        if (toggle) {
            $('.muscles').css('opacity', '0').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
                function (e) {
                    $('#front').prepend(musclesDiagramFront);
                    $('#back').prepend(musclesDiagramBack);

                });

            $('.bonesToggle .toggleButton').addClass('active');
            $('.musclesImage').removeClass('active');
            toggle = false;
        } else {
            $('#front').append(musclesDiagramFront);
            $('#back').append(musclesDiagramBack);

            $('.muscles').animate({
                opacity: 1
            }, 100).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
                function (e) {
                    $('#front').append(musclesDiagramFront);
                    $('#back').append(musclesDiagramBack);


                });

            $('.bonesToggle .toggleButton').removeClass('active');
            toggle = true;

            $('.musclesImage').addClass('active');
        }

        $('.bonesToggle p').toggleClass('active');
    }

    $('.bonesToggle .toggleButton').click(musclesToggle);

    $('.bonesToggle p').click(function () {
        if ($(this).hasClass('active')) {

        } else {
            musclesToggle();
        }
    });

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

    function openModal(e) {
        var linkName = $(this).attr('id');
        var modal = '.' + linkName;
        var x = e.clientX;
        var y = e.clientY;
        var transformOrigin = x + "px " + y + "px";

        $(modal).addClass('active').css('transform-origin', transformOrigin);
        $('.modal-bg').fadeIn(1500);

        var bodyPart = $(this).attr('data-bodyPart');

        $('#' + bodyPart).attr('class', 'link active');
        $(this).attr('class', 'link active');

        topAlignModal();
        
        e.stopPropagation();

    }

    function closeModal() {
        $('.modal').removeClass('active');
        $('.modal-bg').fadeOut(200);
        $('.link').attr('class', 'link');

        setTimeout(function () {
            $('.modal-container').removeAttr('style').removeClass('top-align');
        }, 500);
    }

    $('.link').click(openModal);
    $('.close-modal').click(closeModal);


    $('.modal-container').click(function (e) {
        e.stopPropagation();
    });

    $('body').click(function (e) {
        closeModal();
        e.stopPropagation();

    });

    //flipper

    var rotateCount = 0;
    
//    function flipToggle() {
//        var rotateAmount = $(this).data('rotate');
//        rotateCount = rotateCount + rotateAmount;
//    }
    var flipToggle = true;
    
    function flipDiagram() {

        var rotateAmount = $(this).data('rotate');

        rotateCount = rotateCount + rotateAmount;

        $('.flipper').css({
            '-webkit-transform': 'rotateY(' + rotateCount + 'deg)',
            '-moz-transform': 'rotateY(' + rotateCount + 'deg)',
            'transform': 'rotateY(' + rotateCount + 'deg)'
        });
        
        if (flipToggle) {
            $('.flipToggle p span').text('Posterior');
            $('.rotateIcon').addClass('animate').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                function (e) {
                    $(this).removeClass('animate');
                });
            flipToggle = false;
        } else if (flipToggle == false){
            flipToggle = true;
            $('.flipToggle p span').text('Anterior');
            $('.rotateIcon').addClass('animate').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                function (e) {
                    $(this).removeClass('animate');
                });
        }
    }



    //    function flipDiagram() {
    //        $('.flipper').toggleClass('active');
    //    }

    $('.flipLeft').click(flipDiagram);
    $('.flipRight').click(flipDiagram);
    $('.flipToggle').click(flipDiagram);


    //keyboard functions
    $(document).keydown(function (e) {

        //escape key - close modal
        if (e.keyCode == 27) {
            closeModal();
        }

    });

    //draggable windows (jQuery UI)
    $('.modal-container').draggable({
        containment: "body",
        scroll: false
    });




});
