$(document).ready(function () {
    
    $('.home-slant').css('background-color', '#3ADDBE');

    var myVar = setInterval(changeColor, 3000);
    
    var colors = ['#3ADDBE', '#77e0dd', '#65c4bf'];
    var amount = colors.length;
    
    var count = 0;
    
    function changeColor() {
        count++;
        
        if (count === amount) {
            count = 0;
        }
        
        var currentColor = colors[count];
        
        $('.home-slant').css('background-color',currentColor);
    }
    //document ready end
});
