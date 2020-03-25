let picture = $('.works-gallery__preview')
picture.on('click', function() {
    $(this).toggleClass('works-gallery__preview--active');
    console.log('клик')
})