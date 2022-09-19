const menuBtn = document.querySelector('.menuBtn');
const openMenu = document.querySelector('.openMenu');


menuBtn.addEventListener('click', () => {
    openMenu.classList.toggle('hideMe');
});