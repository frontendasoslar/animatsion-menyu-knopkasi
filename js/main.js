const elMenubtn = document.querySelector('.menu-btn');//link klasi tobib olinayapdi
const elSpan = document.querySelector('.span');//span klasi topib ilinayapdi


//link bosilganda spanning klasiga yangi klas qo'shish uchun kiritilayapdi
elMenubtn.addEventListener('click', function() {//link klasi click hodisasiga quloq solayapdi va funktsiya kiritilayapdi
  elSpan.classList.toggle('span-btn');//link bosilganda spanning klasiga yangi klas qo'shilayapdi
})
