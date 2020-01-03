$(document).ready(function () {

    $('.home-slant').css('background-color', 'rgba(86,86,200,0.2)');

    $('.homepage .hero-container').css('background-color', 'rgba(180,180,200,0.15)');
    
    $('body').css('background-color', 'rgba(84,90,200,0.15)');


    var $win = $(window),
        w = 0,
        h = 0,
        rgba = [],
        getWidth = function () {
            w = $win.width();
            h = $win.height();
        };

    const title = document.querySelector('.hero-shadow')

    $win.resize(getWidth).mousemove(function (e) {

        rgba = [
        Math.round(e.pageX / w * 170),
        Math.round(e.pageY / h * 170),
        200,
        0.15
    ];

        $('body').css('background-color', 'rgba(' + rgba.join(',') + ')');
        

        //shadow
        let x = e.pageX - window.innerWidth / 2;
        let y = e.pageY - window.innerHeight / 2;

        let rad = Math.atan2(y, x).toFixed(2);
        let length = Math.round(Math.sqrt((Math.pow(x, 2)) + (Math.pow(y, 2))) / 100);

        let x_shadow = Math.round(length * Math.cos(rad));
        let y_shadow = Math.round(length * Math.sin(rad));

        title.style.setProperty('--x-shadow', -x_shadow + 'px')
        title.style.setProperty('--y-shadow', -y_shadow + 'px')


        //mouse glow
        $('.mouse-glow').css({
            left: e.pageX - 450,
            top: e.pageY - 450
        });

    }).resize();

});
