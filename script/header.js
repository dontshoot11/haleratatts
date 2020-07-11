$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $("header").addClass("header--small");
    } else {
        $("header").removeClass("header--small");
    }
});