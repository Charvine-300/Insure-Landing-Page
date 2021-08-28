function setUp() {
    const introInfo = document.getElementById("intro-info");
    const head = document.getElementById("header-wrapper");
    const menuButton = document.getElementById("menu-toggle");
    const navPage = document.getElementById("navigation-page");
    const familyPhoto = document.getElementById("family-photo");
    const leftMobile = document.getElementById("left-mobile");
    const rightMobile = document.getElementById("right-mobile");
    const infoLine = document.getElementById("roaring-man");
    const headerLine = document.getElementById("head-girl");
    const introBack = document.getElementById("intro-background");
    const firstFlex = document.getElementById("first-flexbox");
    const howitWorks = document.getElementById("howit-works");
    const footerPattern = document.getElementById("footer-pattern");

    console.log(document.body.clientWidth);
    
    menuButton.onclick = function() {
        if (navPage.className == "") {
            navPage.className = "open";
        }

        else {
            navPage.className = "";
        }
    }


    if (document.body.clientWidth >= 768) {
        const misoSoup = document.createElement("div");
        misoSoup.setAttribute("class", "beauty-line");
        infoLine.insertBefore(misoSoup, headerLine);

        head.removeChild(menuButton);
        head.appendChild(navPage);

        footerPattern.removeAttribute("src");
        footerPattern.setAttribute("src", "images/bg-pattern-footer-desktop.svg");

        howitWorks.removeAttribute("src");
        howitWorks.setAttribute("src", "images/bg-pattern-how-we-work-desktop.svg");

        familyPhoto.removeAttribute("src");
        familyPhoto.setAttribute("src", "images/image-intro-desktop.jpg");

        introInfo.removeChild(leftMobile);
        introInfo.removeChild(rightMobile);
        const desktopTop = document.createElement("img");
        desktopTop.setAttribute("src", "images/bg-pattern-intro-left-desktop.svg");
        desktopTop.setAttribute("alt", "Intro left");
        desktopTop.setAttribute("class", "desktop-top");
        const desktopBottom = document.createElement("img");
        desktopBottom.setAttribute("src", "images/bg-pattern-intro-right-desktop.svg");
        desktopBottom.setAttribute("alt", "Intro right");
        desktopBottom.setAttribute("class", "desktop-bottom");


        firstFlex.insertBefore(desktopBottom, introInfo);
        introBack.insertBefore(desktopTop, firstFlex);
        
    }

}


window.onload = function() {
    setUp();
}





