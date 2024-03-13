const elMenubtn = document.querySelector('.menu-btn');
const elSpan = document.querySelector('.span');

elMenubtn.addEventListener('click', function() {
  elSpan.classList.toggle('span-btn');
})
