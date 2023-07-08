const container = document.querySelector('.container')
const spinner = document.querySelector('.spinner')
const bg = document.querySelector('.bg')

container.addEventListener('click', () => {
  if(spinner.className == 'spinner') {
    spinner.classList.add('spinnerDay')
    spinner.classList.remove('spinner')
  } else {
    spinner.classList.add('spinner')
    spinner.classList.remove('spinnerDay')
  }
  
  if(bg.className == 'bg') {
    bg.classList.add('bgSpin')
    bg.classList.remove('bg')
  } else {
    bg.classList.add('bg')
    bg.classList.remove('bgSpin')
  }
})