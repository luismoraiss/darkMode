function darkMode(){
  const pagina = document.body

  pagina.classList.toggle("dark-mode")

  const isDarkMode = document.body.classList.contains("dark-mode")

  const botao = document.querySelector("button")

  if(isDarkMode == true){
    botao.textContent = "Modo Claro"
  }else{
    botao.textContent = "Modo escuro"
  }
}