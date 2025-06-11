
document.addEventListener('DOMContentLoaded', () => {
    const menuHamburger = document.querySelector('.menu-hamburger');
    const sidebar = document.querySelector('.sidebar');
    menuHamburger.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
});
