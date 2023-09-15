document.addEventListener("DOMContentLoaded", () => { 

document.getElementById("boton").addEventListener("click", () => {

let nombre = document.getElementById("pj").value;
var cuadroInfo = document.getElementById("info");

const url = "https://hp-api.onrender.com/api/characters" 
fetch(url) 
.then(response => response.json())
.then(data => {

  const nombreEncontrado = data.find((nombreEncontrado) => nombreEncontrado.name === nombre)
if (nombreEncontrado) {
  cuadroInfo.innerHTML = `
                
  <div>
  <h2>${nombreEncontrado.name}</h2>
<p class="aviso">La info está en inglés para notivarte a que estés al día con Voxy ♥</p>
<br>

  <div class="flex-container">  

  <div class="side">
  <img src="${nombreEncontrado.image}"></img>
  </div>

  <div class="main">
  <p class="cat1">Seudónimos:</p>
  <div class="infopj">${nombreEncontrado.alternate_names}</div>
  <p class="cat1">Especie:</p><div class="infopj">${nombreEncontrado.species}</div>
  <p class="cat1">Casa:</p><p>${nombreEncontrado.house}</p>
  <p class="cat1">Año de nacimiento:</p><p>${nombreEncontrado.dateOfBirth}</p>  
  </div>  
  
  </div>
  `
}
else {
  characterInfo.innerHTML = "<p>Personaje no encontrado.</p>"
}

})
});

})
