const sideBar = document.querySelector('.sidebar');
const sideBarToggle = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');

sideBarToggle.addEventListener('click', () => {
    sideBar.classList.toggle('show-sidebar');
});
closeBtn.addEventListener('click', () => {
    sideBar.classList.toggle('show-sidebar');
});
