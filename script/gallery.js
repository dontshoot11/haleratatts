let button1 = $('.works-gallery__nav-button--sketches1');
let button2 = $('.works-gallery__nav-button--sketches2');


let firstGallery = $('.works-gallery__sketches .works-gallery__previews:first');
let lastGallery = $('.works-gallery__sketches .works-gallery__previews:last');




button1.on('click', function() {

    let activeGallery = $('.works-gallery__sketches .works-gallery__previews--active');
    let prevGallery = activeGallery.prev();

    activeGallery.removeClass('works-gallery__previews--active');
    prevGallery.addClass('works-gallery__previews--active');

    if (firstGallery.hasClass('works-gallery__previews--active')) {
        button1.css({ 'visibility': 'hidden', 'pointer-events': 'none' })
    };
    if (!lastGallery.hasClass('works-gallery__previews--active')) {
        button2.css({ 'visibility': 'visible', 'pointer-events': 'auto' })
    };






});
button2.on('click', function() {
    let activeGallery = $('.works-gallery__sketches .works-gallery__previews--active');
    let nextGallery = activeGallery.next();

    activeGallery.removeClass('works-gallery__previews--active');
    nextGallery.addClass('works-gallery__previews--active');


    if (!firstGallery.hasClass('works-gallery__previews--active')) {
        button1.css({ 'visibility': 'visible', 'pointer-events': 'auto' })
    };
    if (lastGallery.hasClass('works-gallery__previews--active')) {
        button2.css({ 'visibility': 'hidden', 'pointer-events': 'none' })
    };













});





let button3 = $('.works-gallery__nav-button--works1');
let button4 = $('.works-gallery__nav-button--works2');








button3.on('click', function() {
    let firstGallery = $('.works-gallery__works .works-gallery__previews:first');
    let lastGallery = $('.works-gallery__works .works-gallery__previews:last');

    let activeGallery = $('.works-gallery__works .works-gallery__previews--active');
    let prevGallery = activeGallery.prev();

    activeGallery.removeClass('works-gallery__previews--active');
    prevGallery.addClass('works-gallery__previews--active');

    if (firstGallery.hasClass('works-gallery__previews--active')) {
        button3.css({ 'visibility': 'hidden', 'pointer-events': 'none' })
    };
    if (!lastGallery.hasClass('works-gallery__previews--active')) {
        button4.css({ 'visibility': 'visible', 'pointer-events': 'auto' })
    };






});
button4.on('click', function() {
    let firstGallery = $('.works-gallery__works.works-gallery__previews:first');
    let lastGallery = $('.works-gallery__works .works-gallery__previews:last');
    let activeGallery = $('.works-gallery__works .works-gallery__previews--active');
    let nextGallery = activeGallery.next();

    activeGallery.removeClass('works-gallery__previews--active');
    nextGallery.addClass('works-gallery__previews--active');


    if (!firstGallery.hasClass('works-gallery__previews--active')) {
        button3.css({ 'visibility': 'visible', 'pointer-events': 'auto' })
    };
    if (lastGallery.hasClass('works-gallery__previews--active')) {
        button4.css({ 'visibility': 'hidden', 'pointer-events': 'none' })
    };













});












let pictures = $('.works-gallery__preview');



pictures.on('click', function() {
    event.preventDefault();
    $(this).toggleClass('works-gallery__preview--active');
    let activePicture = $('.works-gallery__preview--active');
    let prevPicture = activePicture.prev();
    let nextPicture = activePicture.next();
    let leftButton = $('.works-gallery__button--left');
    let rightButton = $('.works-gallery__button--right');

    if (prevPicture.length === 0) {
        leftButton.css('visibility', 'hidden')
    } else { leftButton.css('visibility', 'visible') };

    if (nextPicture.length === 0) {
        rightButton.css('visibility', 'hidden')
    } else { rightButton.css('visibility', 'visible') };





})

let leftButton = $('.works-gallery__button--left')
leftButton.on('click', function() {
    event.preventDefault();
    console.log('куку');
    let picture = $('.works-gallery__preview--active')
    let prevPicture = picture.prev();


    prevPicture.toggleClass('works-gallery__preview--active');

})

let rightButton = $('.works-gallery__button--right')
rightButton.on('click', function() {
    event.preventDefault();
    console.log('куку');
    let picture = $('.works-gallery__preview--active')
    let nextPicture = picture.next();
    nextPicture.toggleClass('works-gallery__preview--active')
})