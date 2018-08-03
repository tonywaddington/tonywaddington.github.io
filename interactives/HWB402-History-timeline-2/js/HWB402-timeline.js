$(document).ready(function() {
    
    function openSection() {
        $(this).addClass('open');
        $('.centre-line, .container').addClass('open');
        $('.section, header').addClass('closed');
    }
    
    function closeSection() {
        $('.section, header').removeClass('closed');
        $('.section, .centre-line, .container').removeClass('open');
    }
    
    $('.section').click(openSection);
    $('button').click(closeSection);
    
    var scroll = true;
    
    $('.section').click(function() {
       if (scroll) {
            $('.info').scrollTop(0);
           scroll = false;    
       }
        
    $('button').click(function() {
           scroll = true; 
        });

    });
    //end document ready
});