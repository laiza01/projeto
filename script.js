function toggleMode() {
 const html = document.documentElement
 html.classList.toggle("light")
   
   // pegar a tag img
   const img = document.querySelector("#profile img")
   
   // substituir a imagem
   if (html.classList.contains('light')) {
   // se tiver light mode, adicionar a imagen light
   img.setAttribute("src", "./assets/avatar-light.png")
   } else {
   // se tiver sem light mode, manter a imagem normal
   img.setAttribute("src", "./assets/avatar.png")
  } 
 
}
 function toggleMode() {
   const html = documentElement
 html.classList. toggle ("light")

 // pegar o texto 
  const texto = document.querySelector ("#profile texto")

  // substituir o texto
  if (html.classList.contains("light")) {
   // se tiver light mode, adicionar o texto light
   Text.setAttribute("alt", "foto de Maike Brito sorrindo, usando oculus escuro e jaqueta preta, barba e fundo azul")
  } else {
   // se tiver sem light mode, manter o texto normal
   Text.setAttribute("alt","foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo") 
 }
  
 }
