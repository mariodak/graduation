"use strict";

// Hlavný JS súbor

// Prednáčíta stránku

$(function () {

    $(window).on('load', function () {
        // makes sure the whole site is loaded 
        $('#status').fadeOut(); // will first fade out the loading animation 
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
        $('body').delay(350).css({ 'overflow': 'visible' });
    });

    // Blokuje ťahanie objektov
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

    // Animácie na button

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

// paralax

var w = $(window).width();
var h = $(window).height();

if ($(".line-container").hasClass("parallax1")) {
    Createparallaxbg(".parallax1");
}
if ($(".line-container").hasClass("parallax2")) {
    Createparallaxbg(".parallax2");
}
if ($(".line-container").hasClass("parallax3")) {
    Createparallaxbg(".parallax3");
}
if ($(".line-container").hasClass("parallax4")) {
    Createparallaxbg(".parallax4");
}
if ($(".line-container").hasClass("parallax5")) {
    Createparallaxbg(".parallax5");
}
if ($(".line-container").hasClass("parallax6")) {
    Createparallaxbg(".parallax6");
}

$(window).bind('scroll', function () {

    if ($(".line-container").hasClass("parallax1")) {
        parallaxbg(".parallax1", ".parallax1");
    }
    if ($(".line-container").hasClass("parallax2")) {
        parallaxbg(".parallax2", ".parallax2");
    }
    if ($(".line-container").hasClass("parallax3")) {
        parallaxbg(".parallax3", ".parallax3");
    }
    if ($(".line-container").hasClass("parallax4")) {
        parallaxbg(".parallax4", ".parallax4");
    }
    if ($(".line-container").hasClass("parallax5")) {
        parallaxbg(".parallax5", ".parallax5");
    }
    if ($(".line-container").hasClass("parallax6")) {
        parallaxbg(".parallax6", ".parallax6");
    }
});

// Parallax Background Image Create
function Createparallaxbg(parallaxImage) {
    var ParSecImg = $(parallaxImage).attr("data-image");
    $(parallaxImage).attr("style", "background-image:url(" + ParSecImg + ");");
}

// Parallax Background Image ATTR ADD
function parallaxbg(position, parallaxImage) {
    var currentTop = $(window).scrollTop();
    var ParSecPT = $(position).position().top;
    if (currentTop > ParSecPT - h) {

        $(parallaxImage).css({
            "background-position": "0 " + ((currentTop - ParSecPT) / 2.5 - h / 5) + "px"
        });
    }
}

// Blokuje Zoom na prehliadačoch
document.addEventListener('touchmove', function (event) {
    event = event.originalEvent || event;
    if (event.scale !== 1) {
        event.preventDefault();
    }
}, false);