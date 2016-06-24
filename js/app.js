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

});
