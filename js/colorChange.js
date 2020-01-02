//$(document).ready(function () {
//    
//    $('.home-slant').css('background-color', '#3ADDBE');
//
//    var myVar = setInterval(changeColor, 3000);
//    
//    var colors = ['#3ADDBE', '#77e0dd', '#65c4bf'];
////    var colors = ['#1fa1aa', '#29ac62', '#2fb7c5', '#4a66a6'];
//    var amount = colors.length;
//    
//    var count = 0;
//    
//    function changeColor() {
//        count++;
//        
//        if (count === amount) {
//            count = 0;
//        }
//        
//        var currentColor = colors[count];
//        
//        $('.home-slant').css('background-color',currentColor);
//    }
//    //document ready end
//});


$(document).ready(function () {
    
    $('.home-slant').css('background', 'rgba(86,86,200,0.2) url("img/bg-texture.png")');
    
    $('.homepage .hero-container').css('background', 'rgba(180,180,200,0.2) url("img/bg-texture.png")');
    

    var $win = $(window),
        w = 0,
        h = 0,
        rgb = [],
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
        0.2
    ];

//        $('.homepage .hero-container').css('background', 'rgba(' + rgba.join(',') + ') url("img/bg-texture.png")');
        $('.home-slant').css('background', 'rgba(' + rgba.join(',') + ') url("img/bg-texture.png")');
        
        
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
            left: e.pageX - 500,
            top: e.pageY - 500
        });

    }).resize();





    //shadow
    

//    document.onmousemove = function (e) {
//        let x = e.pageX - window.innerWidth / 2;
//        let y = e.pageY - window.innerHeight / 2;
//
//        let rad = Math.atan2(y, x).toFixed(2);
//        let length = Math.round(Math.sqrt((Math.pow(x, 2)) + (Math.pow(y, 2))) / 100);
//
//        let x_shadow = Math.round(length * Math.cos(rad));
//        let y_shadow = Math.round(length * Math.sin(rad));
//
//        title.style.setProperty('--x-shadow', -x_shadow + 'px')
//        title.style.setProperty('--y-shadow', -y_shadow + 'px')
//
//    }

    //follow mouse
//    $(document).bind('mousemove', function (e) {
//        $('.mouse-glow').css({
//            left: e.pageX - 500,
//            top: e.pageY - 500
//        });
//    });

});
