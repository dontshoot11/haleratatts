let worksButton = $(".gallery-navigation-button--works");
let sketchesButton = $(".gallery-navigation-button--sketches");
let works = $(".works-gallery__works");
let sketches = $(".works-gallery__sketches");

$(document).ready(function() {
    showGallery("#gallery");
    showGallery("#gallery2");
});

worksButton.click(function() {
    works.show();
    sketches.hide();
});

sketchesButton.click(function() {
    sketches.show();
    works.hide();
});

function showGallery(which) {
    $(which).unitegallery({
        gallery_theme: "tiles",
        gallery_theme: "tilesgrid",
        tile_enable_border: false,
        tile_enable_shadow: false,
        theme_bullets_margin_top: 25,
    });
}