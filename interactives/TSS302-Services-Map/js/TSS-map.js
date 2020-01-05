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

    function closeStart() {
        $('.introModal').removeClass('active');
    }
    $('.close-start-btn').click(closeStart);
    $('.start-btn').click(closeIntro);


    $('.help-btn').click(function () {
        $('.intro-instructions').fadeIn(500);
    });

    //INFO SECTION

    var maplink;
    var hoverItem;

    var clicked = false;

    //hover state on map when hover nav-item
    $('.nav-item').hover(function (e) {
        hoverItem = '#' + $(this).data('maplink');

        $(hoverItem).attr('class', 'map-link hover');
    }, function () {
        if (clicked === true) {
            $(hoverItem).attr('class', 'map-link active');
        } else {
            $(hoverItem).attr('class', 'map-link');
        }

    });


    //MODAL
    function openModal(e) {
        if (allowClick === true) {
            clicked = true;

            var currentMaplink = $(this).data('maplink');
            var maplink = '#' + currentMaplink;

            $(maplink).attr('class', 'map-link active');

            $('.svg-pan-zoom_viewport').attr('class', 'svg-pan-zoom_viewport transition').one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
                function (event) {
                    // Do something when the transition ends
                    $('.svg-pan-zoom_viewport').attr('class', 'svg-pan-zoom_viewport')
                });

            var linkName = $(this).data('modal');
            var modal = '.' + linkName;

            $(modal).addClass('active animate');
            $('.modal-bg').fadeIn(1000);
            $('nav').addClass('noclick');
        }

    }
    
    //always allow click on nav items
    $('.nav-item').click(function() {
       allowClick = true;
    });

    // Check if the mouse is dragging

    var element = document.getElementById('map');
    var flag = 0;

    var allowClick = true;

    element.addEventListener("mousedown", function () {
        flag = 0;
    }, false);

    element.addEventListener("mousemove", function () {
        flag = 1;
    }, false);

    element.addEventListener("mouseup", function () {
        if (flag === 0) {
            console.log("Click")
            allowClick = true;
        } else if (flag === 1) {
            console.log("Drag");
            allowClick = false;
        }
    }, false);


    function closeModal() {
        clicked = false;

        $('nav').removeClass('noclick');
        $('.map-link').attr('class', 'map-link');

        $('.modal').removeClass('active animate');
        $('.modal-bg').fadeOut(500);

        setTimeout(function () {
            $('.modal-container').removeAttr('style').removeClass('top-align');

            $('.tab,.info').removeClass('active');
            $('.tab-1,.info-1').addClass('active');
            $('.modal-info').scrollTop(0);
        }, 500);
    }

    $('.modal-container').click(function (e) {
        e.stopPropagation();
    });

    $('.map-link,.nav-item').click(openModal);
    $('.close-modal,.back-btn').click(closeModal);



    //TABS

    function activeTab() {
        var currentTabs = document.querySelectorAll('.modal.active .tab');
        var info = document.querySelectorAll('.modal.active .info');

        for (var i = 0; i < currentTabs.length; i++) {
            currentTabs[i].onclick = activeTab;
        }

        for (var i = 0; i < currentTabs.length; i++) {
            //active state for tab
            currentTabs[i].classList.remove('active');
            this.classList.add('active');

            var infoNext = '.' + this.dataset.info;
            info[i].classList.remove('active');

            document.querySelector('.modal.active ' + infoNext).classList.add('active');
        }

    }

    $('.tab').click(activeTab);


    //MOBILE BUTTON

    $('.menu-btn').click(function () {
        $(this).hide();
        $('.map-btn').show();

        $('nav').addClass('active');
    });

    $('.map-btn').click(function () {
        $(this).hide();
        $('.menu-btn').show();

        $('nav').removeClass('active');
    });

    // PAN ZOOM 
    $(window).on('load', function () {
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


        var panZoom = window.panZoom = svgPanZoom('#map', {
            zoomEnabled: true,
            dblClickZoomEnabled: true,
            controlIconsEnabled: false,
            minZoom: 1,
            maxZoom: 5,
            fit: true,
            //            center: 2,
            zoomScaleSensitivity: 0.2,
            customEventsHandler: eventsHandler
        });

        $(window).resize(function () {
            panZoom.resize();
            panZoom.fit();
            panZoom.center();
        });

        var page = $('#map');


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
        $('#map').on('mousedown wheel DOMMouseScroll mousewheel keyup touchmove', function () {
            $('.svg-pan-zoom_viewport').attr('class', 'svg-pan-zoom_viewport')
        });


        function gotoLink() {
            if (allowClick === true) {
                var landX = $(this).data('x');
                var landY = $(this).data('y');

                panZoom.pan({
                    x: 0,
                    y: 0
                });
                var realZoom = panZoom.getSizes().realZoom;

                panZoom.pan({
                    x: -(landX * realZoom) + (panZoom.getSizes().width / 2),
                    y: -(landY * realZoom) + (panZoom.getSizes().height / 2)
                });
            }
        }

        $('.map-link').click(gotoLink);
        $('.nav-item').click(gotoLink);

    });


    function showInfo1() {
        $("#map-link-1").click();
    }

    function showInfo2() {
        $("#map-link-2").click();
    }

    function showInfo3() {
        $("#map-link-3").click();
    }

    function showInfo4() {
        $("#map-link-4").click();
    }

    function showInfo5() {
        $("#map-link-5").click();
    }

    function showInfo6() {
        $("#map-link-6").click();
    }

    function showInfo7() {
        $("#map-link-7").click();
    }

    function showInfo8() {
        $("#map-link-8").click();
    }

    function showInfo9() {
        $("#map-link-9").click();
    }

    function showInfo10() {
        $("#map-link-10").click();
    }

    function showInfo11() {
        $("#map-link-11").click();
    }

    function showInfo12() {
        $("#map-link-12").click();
    }

    function showInfo13() {
        $("#map-link-13").click();
    }

    function showInfo14() {
        $("#map-link-14").click();
    }

    function showInfo15() {
        $("#map-link-15").click();
    }

    function showInfo16() {
        $("#map-link-16").click();
    }

    function clickZoomIn() {
        $(".zoom-in").click();
    }

    function clickZoomOut() {
        $(".zoom-out").click();
    }

    function clickReset() {
        $(".reset").click();
    }

    //----STOP TRANSITIONS ON WINDOW RESIZE----
    (function () {
        const classes = document.body.classList;
        let timer = 0;
        window.addEventListener('resize', function () {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            } else
                classes.add('stop-transitions');

            timer = setTimeout(() => {
                classes.remove('stop-transitions');
                timer = null;
            }, 100);
        });
    })();

    //end doc ready
});
