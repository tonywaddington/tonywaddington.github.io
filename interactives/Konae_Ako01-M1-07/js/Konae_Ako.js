$(document).ready(function () {
    
    
    //-----------Hammer - pinch zoom gestures-----------

    var eventsHandler;

    eventsHandler = {
        haltEventListeners: ['touchstart', 'touchend', 'touchmove', 'touchleave', 'touchcancel'],
        init: function (options) {
                var instance = options.instance,
                    initialScale = 1,
                    pannedX = 0,
                    pannedY = 0

                // Init Hammer
                // Listen only for pointer and touch events
                this.hammer = Hammer(options.svgElement, {
                    inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput
                })

                // Enable pinch
                this.hammer.get('pinch').set({
                    enable: true
                })

                // Handle double tap
                this.hammer.on('doubletap', function (ev) {
                    instance.zoomIn()
                })

                // Handle pan
                this.hammer.on('panstart panmove', function (ev) {
                    // On pan start reset panned variables
                    if (ev.type === 'panstart') {
                        pannedX = 0
                        pannedY = 0
                    }

                    // Pan only the difference
                    instance.panBy({
                        x: ev.deltaX - pannedX,
                        y: ev.deltaY - pannedY
                    })
                    pannedX = ev.deltaX
                    pannedY = ev.deltaY
                })

                // Handle pinch
                this.hammer.on('pinchstart pinchmove', function (ev) {
                    // On pinch start remember initial zoom
                    if (ev.type === 'pinchstart') {
                        initialScale = instance.getZoom()
                        instance.zoom(initialScale * ev.scale)
                    }

                    instance.zoom(initialScale * ev.scale)

                })

                // Prevent moving the page on some devices when panning over SVG
                options.svgElement.addEventListener('touchmove', function (e) {
                    e.preventDefault();
                });
            }

            ,
        destroy: function () {
            this.hammer.destroy()
        }
    }
    
    
    //-----------Panzoom-----------

    var panZoom = window.panZoom = svgPanZoom('#diagram', {
        zoomEnabled: true,
        dblClickZoomEnabled: true,
        controlIconsEnabled: false,
        minZoom: 1,
        maxZoom: 5,
        fit: true,
        center: 1,
        zoomScaleSensitivity: 0.2,
        customEventsHandler: eventsHandler
    });

    $(window).resize(function () {
        panZoom.resize();
        panZoom.fit();
        panZoom.center();
    });

    //-----------Panzoom Buttons-----------
    $('.zoom-in').click(function (ev) {
        ev.preventDefault();
        $('.svg-pan-zoom_viewport').attr('class', 'svg-pan-zoom_viewport transition').one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
            function (event) {
                // Do something when the transition ends
                $('.svg-pan-zoom_viewport').attr('class', 'svg-pan-zoom_viewport')
            });
        panZoom.zoomIn();
    });
    $('.zoom-out').click(function (ev) {
        ev.preventDefault();

        $('.svg-pan-zoom_viewport').attr('class', 'svg-pan-zoom_viewport transition').one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
            function (event) {
                // Do something when the transition ends
                $('.svg-pan-zoom_viewport').attr('class', 'svg-pan-zoom_viewport')
            });
        panZoom.zoomOut();
    });
    $('.reset').click(function (ev) {
        ev.preventDefault();

        $('.svg-pan-zoom_viewport').attr('class', 'svg-pan-zoom_viewport transition').one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
            function (event) {
                // Do something when the transition ends
                $('.svg-pan-zoom_viewport').attr('class', 'svg-pan-zoom_viewport')
            });
        panZoom.reset();
    });

    //remove transition if panning during zoom or pan to point
    $('#diagram').on('mousedown wheel DOMMouseScroll mousewheel keyup touchmove', function () {
        $('.svg-pan-zoom_viewport').attr('class', 'svg-pan-zoom_viewport')
    });

    //set active state when click on svg labels
    function svgLink() {
        $('.link').attr('class', 'st10 link');
        $(this).attr('class', 'st10 link active');
    }

    //-----------Play audio-----------
    function play() {

        $('li').removeClass('active');
        var count = $(this).data('audio');
        var audio = document.getElementById('audio' + count);

        audio.play();

        document.addEventListener('play', function (e) {
            var audios = document.getElementsByTagName('audio');
            for (var i = 0, len = audios.length; i < len; i++) {
                if (audios[i] != e.target) {
                    audios[i].pause();
                    audios[i].currentTime = 0;
                }
            }
        }, true);


        $(this).addClass('active');

        audio.addEventListener("ended", function () {
            audio.currentTime = 0;
            $('li').removeClass('active');
            $('.link').attr('class', 'st10 link');
        });
    }

    $('li').click(play);
    $('.link').click(play);
    $('.link').click(svgLink);
    
    
    //-----------tabs-----------
    function tabs() {
        $('.tab').removeClass('active');
        $(this).addClass('active');
        
        var labels = '#' + $(this).data('labels');
        
        $('.hide').attr('class', 'hide');
        $(labels).attr('class', 'hide active');
        
        var list = '.' + $(this).data('labels');
        
        $('ol').hide();
        $(list).show();

    }
    
    $('.tab').click(tabs);
    
    //-----------list button-----------
    
    function listBtn() {
        if ($(this).hasClass('list-btn')) {
            $(this).empty().text('Map ').removeClass('list-btn').addClass('map-btn');
            $('.list').show();
            $('nav').removeClass('map');
        } else {
            $(this).empty().text('List ').removeClass('map-btn').addClass('list-btn');
            $('.list').hide();
            $('nav').addClass('map');
        }
    }
    
    $('.list-btn').click(listBtn);
    
    //-----------intro-----------
    
    $('.close-modal').click(function() {
       $('.intro-page').fadeOut(500); 
    });
    
    $('.info-btn').click(function() {
        $('.intro-page').fadeIn(500);
    });
    
});
