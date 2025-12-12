// Acessando elementos
const imagem = document.getElementById("imagem");
const nomeInput = document.getElementById("nome");
const aceitaCheckbox = document.getElementById("aceita");
const caixa = document.getElementById("caixa");
// 1. style
caixa.style.backgroundColor = "lightblue";
caixa.style.padding = "10px";
// 2. src
/* imagem.src = "https://github.com/fabioabrantes.png"; */
// 3. className
caixa.className = "caixa-destacada";
// 4. value
nomeInput.value = "Maria";
// 5. checked
aceitaCheckbox.checked = false;
