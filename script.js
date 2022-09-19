const menuBtn = document.querySelector('.menuBtn');
const openMenu = document.querySelector('.openMenu');
const cookiesBtnAccept = document.querySelector('.cookiesBtnAccept');
const cookiesBtnDecline = document.querySelector('.cookiesBtnDecline');
const cookiesContainer = document.querySelector('.cookiesContainer');



menuBtn.addEventListener('click', () => {
    openMenu.classList.toggle('hideMe');
});

cookiesBtnAccept.addEventListener('click', () => {
    cookiesContainer.remove();
});

cookiesBtnDecline.addEventListener('click', () => {
    cookiesContainer.remove();
});