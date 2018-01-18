// Main JS File

// Blokuje Zoom na prehliadačoch
document.addEventListener('touchmove', function (event) {
    event = event.originalEvent || event;
    if (event.scale !== 1) {
        event.preventDefault();
    }
}, false);

// Aktivuje effekt po scrollnutí --px

// Added dynamic class by @fazulkovy
const objects = $('.object')
function scrollAnimation() {

    const scroll = $(window).scrollTop()


    objects.each(function (index, object) {
        const calcHeight = $(window).height() - $(object).height()
        const totalDistance = $(object).offset().top - calcHeight

        if (scroll >= totalDistance)
            $(object).addClass('apply')
        else
            $(object).removeClass('apply')

    })

}
scrollAnimation()
$(window).scroll(scrollAnimation);



// Menu loading
$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.menu .progressbar li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.menu .progressbar li').removeClass(".menu .progressbar li .active");
            currLink.addClass("active");
        }
        else {
            currLink.removeClass("active");
        }
    });
}