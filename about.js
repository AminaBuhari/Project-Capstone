const navbar = document.querySelector('.menu-nav');
const openbtn = document.querySelector('.menu');
const closebtn = document.querySelector('.menu-close');
const toggleBtn = document.querySelector('.button-menu');
const lists = document.querySelector('.nav-mobile');
const navMobileList = document.querySelectorAll('.nav-mobile-list');
function toggler() {
  closebtn.classList.toggle('close-menu-active');
  openbtn.classList.toggle('menu-close');
  navbar.classList.toggle('mobile-menu');
  lists.classList.toggle('nav-mobile-active');
}
toggleBtn.addEventListener('click', toggler);
navMobileList.forEach((elem) => {
  elem.addEventListener('click', toggler);
});
