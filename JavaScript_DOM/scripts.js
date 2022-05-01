function changeMode() {
  changeClasses()
  changeText()
}

function changeClasses() {
  button.classList.toggle(darkModeClass) // o toggle vai adicionar ou tirar a class="dark-mode" na hora do click
  h1.classList.toggle(darkModeClass)
  body.classList.toggle(darkModeClass)
  footer.classList.toggle(darkModeClass)
}
function changeText() {
  const lighMode = 'Light Mode'
  const darkmode = 'Dark Mode'

  if (button.classList.contains(darkModeClass)) {
    button.innerHTML = lighMode
    h1.innerHTML = darkmode + 'On'
    return
  }

  button.innerHTML = darkmode
  h1.innerHTML = lighMode + 'On'
}

const darkModeClass = 'dark-mode'
const button = document.getElementById('mode-selector')
const h1 = document.getElementById('page-title')
const body = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0]

button.addEventListener('click', changeMode)
