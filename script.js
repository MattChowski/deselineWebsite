var mainImages = document.getElementsByClassName("main-images");
var arrowDown = document.getElementById("arrowDown")
var arrowUp = document.getElementById("arrowUp");
var menuButton = document.getElementById("main-small-nav-button");
var closeMenu = document.getElementById("closeMenuButton");
var allContent = document.getElementById("all-content");
var pageEntrance = document.getElementById("page-entrance");

var scrollHolder = 0;

/*---------------*/
/* ALL LISTENERS */
/*---------------*/
arrowDown.addEventListener('click', scrollFuncDown);
arrowUp.addEventListener('click', scrollFuncUp);
window.onload = init;
window.onwheel = function() {return false};
menuButton.addEventListener('click', openSideMenu);
closeMenu.addEventListener('click', closeSideMenu);


/*-----------*/
/* FUNCTIONS */
/*-----------*/
function init() {
    window.scrollTo(0, 0);
    setTimeout(function() {pageEntrance.style.opacity = 1}, 500);
    setTimeout(function() {pageEntrance.style.opacity = 0}, 2000);
    setTimeout(function() {allContent.style.opacity = 1}, 2500);
}

function openSideMenu() {
    var smallMenu = document.getElementById("mySmallNavItems");

    smallMenu.style.marginLeft = 0;
    menuButton.style.opacity = 0;
}

function closeSideMenu () {
    var smallMenu = document.getElementById("mySmallNavItems");

    smallMenu.style.marginLeft = "-150px";
    menuButton.style.opacity = 1;
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