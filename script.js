var mainImages = document.getElementsByClassName("main-images");
var arrowDown = document.getElementById("arrowDown")
var arrowUp = document.getElementById("arrowUp");
var scrollHolder = 0;

/* ALL LISTENERS */
arrowDown.addEventListener('click', scrollFuncDown);
arrowUp.addEventListener('click', scrollFuncUp);
window.onload = init;
window.onwheel = function() {return false};

//Function that will scroll all the way up top
function init() {
    window.scrollTo(0, 0);
    console.log("should scroll")
}

//Function that will scroll trough the images down
function scrollFuncDown() {
    if (scrollHolder == mainImages.length - 1) {
        mainImages[0].scrollIntoView();
        scrollHolder = 0;
    } else {
        scrollHolder++;
        mainImages[scrollHolder].scrollIntoView();
    }
}

//Function that will scroll trough the images up
function scrollFuncUp () {
    if (scrollHolder == 0) {
        mainImages[mainImages.length - 1].scrollIntoView();
        scrollHolder = mainImages.length - 1;
    } else {
        scrollHolder--;
    }
    mainImages[scrollHolder].scrollIntoView();
}