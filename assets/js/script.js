const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const navlinks = document.querySelectorAll('.nav-link');

const modalAuthbtn = document.querySelector('.nav-auth-btn');
const modalAuthbox = document.querySelector('.modalbox-auth');
const modalAuth = document.querySelector('.modal');
const closeBtn = document.querySelector('.closebtn');
const submitbtn = document.querySelector('.modal-btn')

const inputTitle = document.querySelector('.input-title');
const input = document.querySelector('.auth-input');
const inputTitle2 = document.querySelector('.input-title2');
const input2 = document.querySelector('.auth-input2');



hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('is-active');
  nav.classList.toggle('is-active');
  overlay.classList.toggle('is-active');
  document.body.classList.toggle('noscroll');
})

overlay.addEventListener('click', function(){
  hamburger.classList.remove('is-active');
  nav.classList.remove('is-active');
  overlay.classList.remove('is-active');
  document.body.classList.remove('noscroll');
})

modalAuthbtn.addEventListener('click', function(){
  modalAuthbox.classList.toggle('active');
  modalAuth.classList.toggle('active');
})

modalAuthbox.addEventListener('click', function(e){
  if(e.target.classList.contains('modalbox')) {
    modalAuthbox.classList.remove('active')
    modalAuth.classList.remove('active');
  }
})

closeBtn.addEventListener('click', function(){
  modalAuthbox.classList.remove('active')
  modalAuth.classList.remove('active');
})

input.addEventListener('click', function(){
  if(inputTitle.classList.contains('show')){
    inputTitle2.classList.remove('show');
  } else {
    inputTitle.classList.toggle('show');
    inputTitle2.classList.remove('show')
  }
})

input2.addEventListener('click', function(){
  if(inputTitle2.classList.contains('show')){
    inputTitle.classList.remove('show');
  } else {
    inputTitle2.classList.toggle('show');
    inputTitle.classList.remove('show');
  }
})



// if(navlinks.addEventListener('click')) {
//   hamburger.classList.remove('is-active');
//   nav.classList.remove('is-active');
//   overlay.classList.remove('is-active');
//   document.body.classList.remove('noscroll');
// }








