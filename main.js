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
