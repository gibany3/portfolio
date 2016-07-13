$(document).ready(function() {

    //animate scroll
    $('a[href^="#"]').on('click', function(event) {

        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    //hamburger menu
    $('.hamburger').click(function() {
        $('.sidebar').toggleClass('sidebar-open');
        $('.hamburger').toggleClass("is-active");
    });



    //slider mac
    var rsi = $('#slider-in-laptop').royalSlider({
            autoHeight: false,
            arrowsNav: false,
            fadeinLoadedSlide: false,
            controlNavigationSpacing: 0,
            controlNavigation: 'bullets',
            imageScaleMode: 'fill',
            imageAlignCenter: true,
            loop: false,
            loopRewind: false,
            numImagesToPreload: 6,
            keyboardNavEnabled: true,
            autoScaleSlider: true,
            autoScaleSliderWidth: 486,
            autoScaleSliderHeight: 315,
            transitionType: 'fade',
            controlNavigation: 'none',
            autoPlay: {
                // autoplay options go gere
                enabled: true,
                pauseOnHover: false,
                stopAtAction: false,
                delay: 4000
            },

            /* size of all images http://help.dimsemenov.com/kb/royalslider-jquery-plugin-faq/adding-width-and-height-properties-to-images */
            imgWidth: 792,
            imgHeight: 479
        });
        // .data('royalSlider');
        // $('#slider-next').click(function() {
        //   rsi.next();
        // });
        // $('#slider-prev').click(function() {
        //   rsi.prev();
        // });







});
