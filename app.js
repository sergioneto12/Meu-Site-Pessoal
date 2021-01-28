var $target = $('.anime'),
    animationClass = 'anime-start',
    offset = $(window).height() * 1/1.1;
   
function animationScroll() {
    var DocumentTop = $(document).scrollTop();
    console.log(DocumentTop);

    $target.each(function() {
        var itemTop = $(this).offset().top;
        if (DocumentTop > itemTop - offset) {
            $(this).addClass(animationClass);
        } else {
            $(this).removeClass(animationClass);
        }
    });
}

$(document).scroll(function(){
    animationScroll();
})