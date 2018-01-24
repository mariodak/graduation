"use strict";

// Main JS File

// Prednáčíta stránku

$(function () {

    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({ 'overflow': 'visible' });

    window.ondragstart = function () {
        return false;
    };

    // Zobrazí prekrytie s obrázkom
    $('img.thumbs').each(function (index) {
        var id = index + 1;
        $(this).click(function () {
            $("#full").attr("src", "assets/img/fullsize/img-" + id + ".jpg");
            $("#background").show();
            $("#overlay").show();
        });
    });

    // Skryje prekrytie s obrázkom
    $("#overlay").click(function () {
        $("#full").attr("src", "");
        $("#background").hide();
        $("#overlay").hide();
    });

    // Anchor odkazy
    $("a").on('click', function (event) {
        if (this.hash !== "") {

            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
                
            }, 800, function () {
                window.location.hash = hash;
            });
        } // End if
    });

    // Aktívne menu
    var sections = $('.page-section'),
        nav = $('.menu-bar'),
        nav_height = nav.outerHeight();

    function anchorFX() {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            var _top = $(this).offset().top;

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');

                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    }
    anchorFX();
    $(window).on('scroll', anchorFX);

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

// Blokuje Zoom na prehliadačoch
document.addEventListener('touchmove', function (event) {
    event = event.originalEvent || event;
    if (event.scale !== 1) {
        event.preventDefault();
    }
}, false);