const yellow = document.querySelector('.yellow');
const max = document.querySelector('.max')


const jump = () => {
  yellow.classList.add('jump');
  setTimeout(() => {
    yellow.classList.remove('jump');
  }, 500);
}

const loop = setInterval(() =>{

const maxPosition = max.offsetLeft;
const yellowPosition = +window.getComputedStyle(yellow).bottom.replace('px', '');

if (maxPosition <= 120 && maxPosition > 0 && yellowPosition < 80 ){

  max.style.animation = 'none';
  max.style.left = `${maxPosition}px`;

  yellow.style.animation = 'none';
  yellow.style.bottom = `${yellowPosition}px`;

  yellow.src = "Imagens/subyellowbroken.png";
  yellow.style.marginbottom = '50px'

  clearInterval('loop')
}

}, 10 )

document.addEventListener('keydown', jump);
