let isOpen = true;
function openNavBar() {
    document.getElementById("navList").style.opacity = +!isOpen;
    isOpen = !isOpen;
}