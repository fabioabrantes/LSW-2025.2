const objectH1 = document.querySelector("#titulo");
objectH1.className = "titulo";
objectH1.textContent = "Desafio concluído";

const objetparagrafo = (document.querySelector(".descricao").textContent =
  "Texto alterado com sucesso");
const span = document.querySelector(".caixa span");
console.log(span);
span.innerHTML = "Novo conteúdo aqui <h1>oioioioioio</h1>";
const titulos = document.querySelectorAll("#titulo");
titulos.forEach((element)=>{
  element.style.color ="black"
});
console.log(titulos)

const titulosArray = Array.from(titulos);
console.log(titulosArray);