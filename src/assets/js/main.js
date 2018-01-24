"use strict";

// Main JS File

// Prednáčíta stránku

$(window).on('load', function () {
    // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({ 'overflow': 'visible' });
});

// Blokuje Zoom na prehliadačoch

document.addEventListener('touchmove', function (event) {
    event = event.originalEvent || event;
    if (event.scale !== 1) {
        event.preventDefault();
    }
}, false);

// Zobrazí obrázky
$(document).ready(function () {

    $("#thumbs-1").click(function () {
        $("#full").attr("src", "assets/img/fotky/fullsize/img-1.jpg");
        $("#background").show();
        $("#overlay").show();
    });

    $("#thumbs-2").click(function () {
        $("#full").attr("src", "assets/img/fotky/fullsize/img-2.jpg");
        $("#background").show();
        $("#overlay").show();
    });

    $("#thumbs-3").click(function () {
        $("#full").attr("src", "assets/img/fotky/fullsize/img-3.jpg");
        $("#background").show();
        $("#overlay").show();
    });

    $("#thumbs-4").click(function () {
        $("#full").attr("src", "assets/img/fotky/fullsize/img-4.jpg");
        $("#background").show();
        $("#overlay").show();
    });

    $("#thumbs-5").click(function () {
        $("#full").attr("src", "assets/img/fotky/fullsize/img-5.jpg");
        $("#background").show();
        $("#overlay").show();
    });

    $("#thumbs-6").click(function () {
        $("#full").attr("src", "assets/img/fotky/fullsize/img-6.jpg");
        $("#background").show();
        $("#overlay").show();
    });

    $("#thumbs-7").click(function () {
        $("#full").attr("src", "assets/img/fotky/fullsize/img-7.jpg");
        $("#background").show();
        $("#overlay").show();
    });

    $("#thumbs-8").click(function () {
        $("#full").attr("src", "assets/img/fotky/fullsize/img-8.jpg");
        $("#background").show();
        $("#overlay").show();
    });

    $("#thumbs-9").click(function () {
        $("#full").attr("src", "assets/img/fotky/fullsize/img-9.jpg");
        $("#background").show();
        $("#overlay").show();
    });

    $("#thumbs-10").click(function () {
        $("#full").attr("src", "assets/img/fotky/fullsize/img-10.jpg");
        $("#background").show();
        $("#overlay").show();
    });

    $("#thumbs-11").click(function () {
        $("#full").attr("src", "assets/img/fotky/fullsize/img-11.jpg");
        $("#background").show();
        $("#overlay").show();
    });

    $("#thumbs-12").click(function () {
        $("#full").attr("src", "assets/img/fotky/fullsize/img-12.jpg");
        $("#background").show();
        $("#overlay").show();
    });

    $("#thumbs-13").click(function () {
        $("#full").attr("src", "assets/img/fotky/fullsize/img-13.jpg");
        $("#background").show();
        $("#overlay").show();
    });

    $("#thumbs-14").click(function () {
        $("#full").attr("src", "assets/img/fotky/fullsize/img-14.jpg");
        $("#background").show();
        $("#overlay").show();
    });

    $("#thumbs-15").click(function () {
        $("#full").attr("src", "assets/img/fotky/fullsize/img-15.jpg");
        $("#background").show();
        $("#overlay").show();
    });

    $("#thumbs-16").click(function () {
        $("#full").attr("src", "assets/img/fotky/fullsize/img-16.jpg");
        $("#background").show();
        $("#overlay").show();
    });

    $("#thumbs-17").click(function () {
        $("#full").attr("src", "assets/img/fotky/fullsize/img-17.jpg");
        $("#background").show();
        $("#overlay").show();
    });

    $("#thumbs-18").click(function () {
        $("#full").attr("src", "assets/img/fotky/fullsize/img-18.jpg");
        $("#background").show();
        $("#overlay").show();
    });

    // Show overlay with any image

    $("#overlay").click(function () {
        $("#full").attr("src", "");
        $("#background").show();
        $("#overlay").hide();
    });

    // Aktivuje effekt po scrollnutí --px


    /* Every time the window is scrolled ... */
    $(window).scroll(function () {

        /* Check the location of each desired element */
        $('.anim').each(function (i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({ 'opacity': '1', 'transform': 'translateY(0px)' }, 500);
            }
        });
    });

    //


    // Smooth scroll

    jQuery(document).ready(function () {
        // Add smooth scrolling to all links
        jQuery("a").on('click', function (event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                jQuery('html, body').animate({
                    scrollTop: jQuery(hash).offset().top
                }, 800, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
    });

    // CURRENT ACTIVE MENU
    var sections = $('.page-section'),
        nav = $('.menu-bar'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                //sections.removeClass('active');

                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height
        }, 500);

        return false;
    });

    // Add animations

    $('#one-anim-change').hover(function () {
        $('.one-anim-item').addClass('hover');
    }, function () {
        $('.one-anim-item').removeClass('hover');
    });

    $('#two-anim-change').hover(function () {
        $('.two-anim-item').addClass('hover');
    }, function () {
        $('.two-anim-item').removeClass('hover');
    });
});