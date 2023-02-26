window.addEventListener( 'scroll', () => {
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 400)
})


let upIcon = document.querySelector('.up__icon')
window.addEventListener('scroll', () => {
  if(window.scrollY > 600) {
    upIcon.style.display = "block"
  } else {
    upIcon.style.display = "none"
  }
})


let menuBtn = document.querySelector('.menu__btn');
let secMenu = document.querySelector('.section-menu')
menuBtn.addEventListener('click', () => {
  secMenu.classList.toggle('show')
  menuBtn.children[0].classList.toggle('bx-x')
})


secMenu.addEventListener('click', (event) => {
  if(event.target.children[1].classList[1] == 'bx-plus') {
    event.target.children[1].classList.remove('bx-plus')
    event.target.children[1].classList.add('bx-minus')
  } else {
    event.target.children[1].classList.add('bx-plus')
    event.target.children[1].classList.remove('bx-minus')
  }

  console.log(event.target.children[1].classList);
  event.target.nextElementSibling.classList.toggle('show')
})

let slide1 = document.querySelector('.slide1')
let slide2 = document.querySelector('.slide2')
let slide3 = document.querySelector('.slide3')
let slideAction = document.querySelector('.slide__action');
let count = 0;
setInterval( () => {

  if( count == 0 ) {
    slide2.style.display = 'none';
    slide3.style.display = 'none';
    slide1.style.display = 'block';
    slideAction.children[0].classList.add('slide__active')
    slideAction.children[1].classList.remove('slide__active')
    slideAction.children[2].classList.remove('slide__active')
    count += 1;
    console.log(1);
  }else if(count == 1 ) {
    slide1.style.display = 'none';
    slide2.style.display = 'block';
    slideAction.children[1].classList.add('slide__active')
    slideAction.children[0].classList.remove('slide__active')
    slideAction.children[2].classList.remove('slide__active')
    count += 2;
    console.log(2);
  }  else {
    slide1.style.display = 'none';
    slide2.style.display = 'none';
    slide3.style.display = 'block';
    slideAction.children[2].classList.add('slide__active')
    slideAction.children[1].classList.remove('slide__active')
    slideAction.children[0].classList.remove('slide__active')
    count = 0;
  }
  console.log('function');
}, 8000)


