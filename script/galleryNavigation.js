let sketches = $('.works-gallery__sketches');
let button1 = $('.works-gallery__nav-button--sketches1');
let button2 = $('.works-gallery__nav-button--sketches2');

let works = $('.works-gallery__works')
let button3 = $('.works-gallery__nav-button--works1');
let button4 = $('.works-gallery__nav-button--works2');

function prevPicture(a, b, c) {
    let galleries = c.children();
    let firstGallery = galleries.filter(':first');
    let lastGallery = galleries.filter(':last');
    let activeGallery = c.find('.works-gallery__previews--active');
    let prevGallery = activeGallery.prev();

    activeGallery.removeClass('works-gallery__previews--active');
    prevGallery.addClass('works-gallery__previews--active');

    if (firstGallery.hasClass('works-gallery__previews--active')) {
        a.css({ 'visibility': 'hidden', 'pointer-events': 'none' })
    };
    if (!lastGallery.hasClass('works-gallery__previews--active')) {
        b.css({ 'visibility': 'visible', 'pointer-events': 'auto' })
    };
}

function nextPicture(a, b, c) {
    let galleries = c.children();
    let firstGallery = galleries.filter(':first');
    let lastGallery = galleries.filter(':last');
    let activeGallery = c.find('.works-gallery__previews--active');
    let nextGallery = activeGallery.next();

    activeGallery.removeClass('works-gallery__previews--active');
    nextGallery.addClass('works-gallery__previews--active');

    if (lastGallery.hasClass('works-gallery__previews--active')) {
        b.css({ 'visibility': 'hidden', 'pointer-events': 'none' })
    };
    if (!firstGallery.hasClass('works-gallery__previews--active')) {
        a.css({ 'visibility': 'visible', 'pointer-events': 'auto' })
    };
}

button1.on('click', function() {
    event.preventDefault();
    prevPicture(button1, button2, sketches)
});


button2.on('click', function() {
    event.preventDefault();
    nextPicture(button1, button2, sketches)
});

button3.on('click', function() {
    event.preventDefault();
    prevPicture(button3, button4, works)
});

button4.on('click', function() {
    event.preventDefault();
    nextPicture(button3, button4, works)
});