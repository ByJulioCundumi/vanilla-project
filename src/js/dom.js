const $nav = document.getElementById("nav")
const $menu_btn = document.getElementById("menu-btn")

$menu_btn.addEventListener("click", menuBtn);
function menuBtn(){
    $menu_btn.append($nav)
}