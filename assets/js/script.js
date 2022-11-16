const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');

const modalAuthbtn = document.querySelector('.nav-auth-btn');
const modalAuthbox = document.querySelector('.modalbox-auth');
const modalAuth = document.querySelector('.modal');
const closeBtn = document.querySelector('.closebtn');
const submitbtn = document.querySelector('.modal-btn')

const inputTitle = document.querySelector('.input-title');
const input = document.querySelector('.auth-input');
const inputTitle2 = document.querySelector('.input-title2');
const input2 = document.querySelector('.auth-input2');

const nextbtn = document.querySelector('.slider-next-btn');
const prevbtn = document.querySelector('.slider-prev-btn');
const slider1 = document.querySelector('.slider-item1')
const slider2 = document.querySelector('.slider-item2')
const slider3 = document.querySelector('.slider-item3')
const slider4 = document.querySelector('.slider-item4')

const modalSisAdminbtn = document.querySelector('.modal-sis-admin');
const modalSisAdminBox = document.querySelector('.modalbox-course3');
const modalSisAdmin = document.querySelector('.modal-course3');
const closeBtn2 = document.querySelector('.closebtn-course3')

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

// input.addEventListener('click', function(){
//   if(inputTitle.classList.contains('show')){
//     inputTitle2.classList.remove('show');
//   } else {
//     inputTitle.classList.toggle('show');
//     inputTitle2.classList.remove('show')
//   }
// })

// input2.addEventListener('click', function(){
//   if(inputTitle2.classList.contains('show')){
//     inputTitle.classList.remove('show');
//   } else {
//     inputTitle2.classList.toggle('show');
//     inputTitle.classList.remove('show');
//   }
// })



nextbtn.addEventListener('click', function(){ 
  if(slider2.classList.contains('hide') && slider3.classList.contains('hide') && slider4.classList.contains('hide') ){
    slider2.classList.remove('hide');
    slider1.classList.add('hide');

  } else if(slider1.classList.contains('hide') && slider3.classList.contains('hide') && slider4.classList.contains('hide')) {
    slider2.classList.add('hide')
    slider3.classList.remove('hide');
  } else if(slider1.classList.contains('hide') && slider2.classList.contains('hide') && slider4.classList.contains('hide')){
    slider3.classList.add('hide');
    slider4.classList.remove('hide');
  } else if(slider1.classList.contains('hide') && slider2.classList.contains('hide') && slider3.classList.contains('hide')){
    slider4.classList.add('hide');
    slider1.classList.remove('hide');
  }
})

prevbtn.addEventListener('click', function(){
  if(slider3.classList.contains('hide') && slider2.classList.contains('hide') && slider1.classList.contains('hide') ){
    slider3.classList.remove('hide');
    slider4.classList.add('hide');

  } else if(slider1.classList.contains('hide') && slider2.classList.contains('hide') && slider4.classList.contains('hide')) {
    slider3.classList.add('hide')
    slider2.classList.remove('hide');
  } else if(slider1.classList.contains('hide') && slider3.classList.contains('hide') && slider4.classList.contains('hide')){
    slider2.classList.add('hide');
    slider1.classList.remove('hide');
  } else if(slider2.classList.contains('hide') && slider3.classList.contains('hide') && slider4.classList.contains('hide')){
    slider1.classList.add('hide');
    slider4.classList.remove('hide');
  }
})

modalSisAdminbtn.addEventListener('click', function(){
  modalSisAdminBox.classList.toggle('active');
  modalSisAdmin.classList.toggle('active');
})

modalSisAdminBox.addEventListener('click', function(e){
  if(e.target.classList.contains('modalbox-course3')) {
    modalSisAdminBox.classList.remove('active')
    modalSisAdmin.classList.remove('active');
  }
})

closeBtn2.addEventListener('click', function(e){
    modalSisAdminBox.classList.remove('active')
    modalSisAdmin.classList.remove('active');
})







