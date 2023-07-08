const container = document.querySelector('.container')
const spinner = document.querySelector('.spinner')
const bg = document.querySelector('.bg')
const bodybg = document.querySelector('.bodybg')
const h1 = document.getElementsByTagName('h1')

console.log(h1)
container.addEventListener('click', () => {
  if(spinner.className == 'spinner') {
    spinner.classList.add('spinnerDay')
    spinner.classList.remove('spinner')
    h1[0].style.color = '#272727'
    
  } else {
    spinner.classList.add('spinner')
    spinner.classList.remove('spinnerDay')
    h1[0].style.color = '#fdfcef'

  }
  
  if(bodybg.className == 'bodybg bgday') {
    bodybg.classList.add('bgnite')
    bodybg.classList.remove('bgday')
  } else {
    bodybg.classList.add('bgday')
    bodybg.classList.remove('bgnite')

  }
  
  if(bg.className == 'bg') {
    bg.classList.add('bgSpin')
    bg.classList.remove('bg')
  } else {
    bg.classList.add('bg')
    bg.classList.remove('bgSpin')
  }
})