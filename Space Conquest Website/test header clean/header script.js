document.addEventListener("DOMContentLoaded", function() {
    let menuButton = document.getElementById("expandMenuButton");
    let expanded = false;
    let expandButtons = document.getElementById("expandMenu")

    function expandMenu() {
        if (expanded == false) {
            expanded = true
            menuButton.src = "close.svg"
            expandButtons.style.top = 0
            expandButtons.style.display = "flex"
        } else {
            expanded = false
            menuButton.src = "menu.svg"
            expandButtons.style.display = "none"
        }
    }

    menuButton.addEventListener("mousedown", expandMenu)
}, )

