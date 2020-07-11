let pictures = $(".works-gallery__preview");

pictures.on("click", function() {
    event.preventDefault();
    $(this).toggleClass("works-gallery__preview--active");
    let activePicture = $(".works-gallery__preview--active");
    let prevPicture = activePicture.prev();
    let nextPicture = activePicture.next();
    let leftButton = $(".works-gallery__button--left");
    let rightButton = $(".works-gallery__button--right");

    if (prevPicture.length === 0) {
        leftButton.css("visibility", "hidden");
    } else {
        leftButton.css("visibility", "visible");
    }

    if (nextPicture.length === 0) {
        rightButton.css("visibility", "hidden");
    } else {
        rightButton.css("visibility", "visible");
    }
});

let leftButton = $(".works-gallery__button--left");
leftButton.on("click", function() {
    event.preventDefault();
    console.log("куку");
    let picture = $(".works-gallery__preview--active");
    let prevPicture = picture.prev();

    prevPicture.toggleClass("works-gallery__preview--active");
});

let rightButton = $(".works-gallery__button--right");
rightButton.on("click", function() {
    event.preventDefault();
    console.log("куку");
    let picture = $(".works-gallery__preview--active");
    let nextPicture = picture.next();
    nextPicture.toggleClass("works-gallery__preview--active");
});