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
const objects = $('.animation')
function scrollAnimation(){

    const scroll         = $(window).scrollTop()
    
    
    objects.each(function(index, object) {
      const calcHeight     = $(window).height() - $(object).height()
      const totalDistance  = $(object).offset().top  - calcHeight
      const totalDistancex = calcHeight - $(object).offset().top
      
    if(scroll >= totalDistance)
        $(object).addClass('apply')
    else 
        $(object).removeClass('apply')
      
      })

}
scrollAnimation()
$(window).scroll(scrollAnimation);


// scroll

$(document).ready(function () {
    $('#demo').betterScroll();
});