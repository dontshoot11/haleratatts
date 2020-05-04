let sketches = $('.works-gallery__sketches .works-gallery__previews');
let works = $('.works-gallery__works .works-gallery__previews');


$(document).ready(function() {
    drawGallery(12, sketches)
});


$(document).ready(function() {
    drawGallery(12, works)
});





function drawGallery(picturesToShow, works) {

    let navigation = works.siblings('.works-gallery__navigation');
    let buttonBackwards = navigation.find('.works-gallery__nav-button--backwards');
    let buttonForwards = navigation.find('.works-gallery__nav-button--forwards');


    let yyy = 0;
    let zzz = picturesToShow;
    for (let i = yyy; i < zzz; i++) { $(works.children()[i]).addClass('works-gallery__preview--show') };

    buttonBackwards.on('click', function() {
        let showingPictures = works.find('.works-gallery__preview--show');

        for (let i = 0; i <= showingPictures.length; i++) { $(showingPictures[i]).removeClass('works-gallery__preview--show') };

        yyy -= picturesToShow;
        zzz -= picturesToShow;

        for (let i = yyy; i < zzz; i++) { $(works.children()[i]).addClass('works-gallery__preview--show') };
        if (yyy <= 0) {
            buttonBackwards.css({ 'visibility': 'hidden', 'pointer-events': 'none' })
        };
        if (yyy + picturesToShow < works.children().length) {
            buttonForwards.css({ 'visibility': 'visible', 'pointer-events': 'auto' })
        }

    });

    buttonForwards.on('click', function() {
        event.preventDefault();
        let showingPictures = works.find('.works-gallery__preview--show');

        for (let i = 0; i <= showingPictures.length; i++) { $(showingPictures[i]).removeClass('works-gallery__preview--show') };

        yyy += picturesToShow;
        zzz += picturesToShow;
        for (let i = yyy; i < zzz; i++) { $(works.children()[i]).addClass('works-gallery__preview--show') };


        if (yyy > 0) {
            buttonBackwards.css({ 'visibility': 'visible', 'pointer-events': 'auto' })
        };
        if (yyy + picturesToShow > works.children().length) {
            buttonForwards.css({ 'visibility': 'hidden', 'pointer-events': 'none' })
        }
    });

}