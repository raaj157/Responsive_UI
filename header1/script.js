let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    manu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}