function setUp() {
    const menuButton = document.getElementById("menu-toggle");
    const navPage = document.getElementById("navigation-page");

    
    menuButton.onclick = function() {
        if (navPage.className == "") {
            navPage.className = "open";
        }

        else {
            navPage.className = "";
        }
    }

}


window.onload = function() {
    setUp();
}





