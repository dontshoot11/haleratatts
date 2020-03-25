$(function() {
    function randomInteger(min, max) {

        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }





    let pictureOne = $('.slideshow .slideshow__picture:eq(0)');
    let pictureTwo = $('.slideshow .slideshow__picture:eq(1)');
    let pictureThree = $('.slideshow .slideshow__picture:eq(2)');
    let randomNumber = randomInteger(1, 3);
    console.log(randomNumber);
    if (randomNumber === 1) {
        pictureOne.show();

    } else if (randomNumber === 2) {
        pictureTwo.show()
    } else if (randomNumber === 3) { pictureThree.show() }







});