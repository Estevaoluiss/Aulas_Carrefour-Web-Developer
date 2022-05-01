// cada function tem uma unica responsabilidade

function changeMode() {
  changeClasses()
  changeText()
}

// o toggle vai adicionar ou tirar a class="dark-mode" na hora do click
function changeClasses() {
  button.classList.toggle(darkModeClass)
  h1.classList.toggle(darkModeClass)
  body.classList.toggle(darkModeClass)
  footer.classList.toggle(darkModeClass)
}

// trocando os textos dpendendo de qual for o modo light ou dark
function changeText() {
  const lighMode = 'Light Mode'
  const darkmode = 'Dark Mode'

  //vai ver se dentro do body ja tem a class list contains "darkModeClass"
  if (body.classList.contains(darkModeClass)) {
    button.innerHTML = lighMode //
    h1.innerHTML = darkmode + 'On'
    return
  }

  button.innerHTML = darkmode
  h1.innerHTML = lighMode + 'On'
}

// criando variaveis para cada item
const darkModeClass = 'dark-mode'
const button = document.getElementById('mode-selector')
const h1 = document.getElementById('page-title')

// selecionando sem o "id" direto na tag o [0] é index do arry
const body = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0] // selecionando sem o "id" direto na tag

button.addEventListener('click', changeMode)
