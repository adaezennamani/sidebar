const menuBar = document.getElementById("menu-bar");
const crossIcon = document.getElementById("crossIcon");
const shopIcon = document.getElementById("shopIcon")

shopIcon.addEventListener("click", toggleSidebar);
crossIcon.addEventListener("click", removeSidebar);

function toggleSidebar() {
    // menuBar.classList.toggle("hide");
    menuBar.style.display = "flex"
}

function removeSidebar() {
    menuBar.style.display  = "none";
}