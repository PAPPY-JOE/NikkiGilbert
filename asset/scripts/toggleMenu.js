let toggleMenuStatus = false;

let btn = document.body.querySelector('header .horizontalNav #Menu-Toggle-Btn');
let btn2 = document.body.querySelector('header .sideNav #closeMenu');
let toggleMenu = document.body.querySelector('header #toggleMenu');

let toggleMenuFunc = function () {
    if (toggleMenuStatus === false) {
        toggleMenu.style.left = 0;

        toggleMenuStatus = true;
    }
    else if (toggleMenuStatus === true) {
        toggleMenu.style.left = '-200vw';

        toggleMenuStatus = false;
    }
}

btn.onclick = toggleMenuFunc;
btn2.onclick = toggleMenuFunc;


// Check for device width

setInterval(() => {
    let w = window.innerWidth;

    if (w > 768) {
        toggleMenu.style.visibility = "hidden";
    }
    else if (w <= 768) {
        toggleMenu.style.visibility = "visible";
    }
}, 100);