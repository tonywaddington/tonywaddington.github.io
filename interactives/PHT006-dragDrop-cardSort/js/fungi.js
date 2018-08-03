var steps = ['one', 'two', 'three', 'four', 'five', 'six'];
    var stepIndex = 0;

//tip page 

    $(document).ready(function () {
       
        // initialise
//        $('#intro-page .btn').click(function() {
//           $('#intro-page').fadeOut(500); 
//            $('.example-draggable,.example-dropable,#mouse,#pulse1,#pulse2').removeClass('animated');
//        });
        
        function closeIntro() {
           $('#intro-page').fadeOut(500); 
            $('.example-draggable,.example-dropable,#mouse,#pulse1,#pulse2').removeClass('animated');
        }
        
        $('#intro-page .btn').click(closeIntro);
        
        $(document).keydown(function(e) {
            if (e.keyCode == 27) {
                $('#intro-page .btn').click();
            }
        });
        
        
        
        
        
        $('header .fa').click(function() {
            $('#intro-page').fadeIn(500);
            $('.example-draggable,.example-dropable,#mouse,#pulse1,#pulse2').addClass('animated');
        });
        
        
        
        
        
        
        $("#complete-page").hide();
        var notifyIconMaxSize = 40; //Size of the Blinking icon on answer dropped.

        
        $(".question-number, .answer").each(function () {
            $(this).hide();
        });

        $('#0-question').show();
        $('#0-answer').show();

        $('.hidden').hide();
        $('.nextbtn').hide();
        
//restart button
        $('.restart-button').click(function () {
            $(".question-number, .answer").each(function () {
                $(this).hide();
            });
            
            $('.feedback').removeClass('active');

            $('#0-question').show();
            $('#0-answer').show();
            $('.category p').remove();
            $('body').removeClass('completed');

            stepIndex = 0;
        });


        $(".menu .answer").draggable({
//            snap: '.ui-droppable',
            scroll: false,
//            snapMode: 'inner',
//            snapTolerance: 30,
            revert: function (drop) {
                if (!drop) {
                    return true;
                }

                var drop_p = drop.offset();

                //if ($.trim($(this).text()).toLowerCase() === $.trim(drop.text()).toLowerCase())
                    
                
                if ($(this).data('answer') === drop.data('answer')) {
                    
                    drop.addClass('answered');
                    $(this).addClass('answered');
                    $(this).hide();
                    
                    drop.addClass('correct');


                    $('#answered-correctly').css({
                        opacity : 0,
                        'font-size': 0,
                        left: drop_p.left + drop.innerWidth()/2 + 10,
                        top: drop_p.top + drop.innerHeight()/2
                    }).show().animate({
                        opacity: 1,
                        'font-size': '+=' + notifyIconMaxSize + 'px',
                        left: drop_p.left + drop.innerWidth() / 2 + 10 - notifyIconMaxSize / 2,
                        top: drop_p.top + drop.innerHeight() / 2 - notifyIconMaxSize / 2
                    }, 500, function () {
                        $('#answered-correctly').animate({
                            opacity: 0,
                            'font-size': '-=' + notifyIconMaxSize + 'px',
                            left: drop_p.left + drop.innerWidth() / 2 + 10,
                            top: drop_p.top + drop.innerHeight() / 2
                        }, 500, function () {
                            $('#answered-correctly').removeAttr('style');
                            $('#answered-correctly').hide();

                            $(".question-container .drop.answered").addClass('allowed');
                            $(".menu .answer").removeClass('answered');
                            drop.removeClass('correct');
                        });
                    });
                    
                    //add item to list
                    var dropText = '<p>' + $(this).text() + '</p>';
                    drop.append(dropText);
                    
                    //show next question and dragable
                    setTimeout(function() {
                        $(".question-number, .answer").each(function () {
                           $(this).hide();
                       });
                        stepIndex = stepIndex + 1;
                        if (stepIndex < steps.length) {
                            $('#' + stepIndex + '-question').show();
                            $('#' + stepIndex + '-answer').show();
                        }
                    }, 1000);

                    //completed questions
                    if (stepIndex === steps.length - 1) {
                        $('.answer, .question-number').hide();
                        setTimeout(function() {
                            //feedback animation
                            var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                            
                            $(".feedback").addClass('active rubberBand').one(animationend,function() {
                                $(this).removeClass('rubberBand');
                                });
                            $('body').addClass('completed');
                        }, 1000); 
                    }

                    
                }
                
                //wrong feedback
                else {
                    drop.addClass('wrong');
                    
                    setTimeout(function() {
                        drop.removeClass('wrong');
                    }, 1000);
                    
                }
                $(this).delay(600);

                return true;
            }

        });

        $(".drop.allowed").droppable({
            accept: ".menu .answer",
            hoverClass: 'drop-hover',
        });
        

    });