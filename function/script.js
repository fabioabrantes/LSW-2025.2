/* const somar = function (a, b) {
  let resultado = a + b;
  return resultado;
}; */

/* const somar = (a,b)=>(a + b)
console.log(somar(2,4)) */

function somar(a, b) {
  let resultado = a + b;
  return resultado;
}

function executarOutraDentroMim(callback) {
  let resultado = callback(2, 3);
  console.log(resultado);
}
executarOutraDentroMim(somar);

function imprimirUsuario(nome) {
  let resultado = "olá " + nome;
  console.log(resultado);
}
function exibirDetalhesUsuario(dados, callback) {
  callback(dados.nome);
}

const pessoaDados = {
  nome: "fabio",
  idade: 40,
};
exibirDetalhesUsuario(pessoaDados, imprimirUsuario);

function exibirNome() {
  var nomeX = "alice";
  console.log(nomeX);
}
exibirNome();
console.log(nomeX);

function contador() {
  let numero = 0;

  function incrementar() {
    numero++;
    let resultado = 0;
    resultado = resultado + numero;
    return resultado;
  }
  return incrementar;
}
const minhaContagem = contador();
console.log(minhaContagem());
console.log(minhaContagem());
console.log(minhaContagem());

function potenciacao(a, b = 2) {
  let resultado = 1;
  if (b >= 3) {
    for (let i = 0; i < b; i++) {
      resultado = resultado * a;
    }
  } else {
    resultado = a * a;
  }
  return resultado;
}

console.log(potenciacao(2));
console.log(potenciacao(3));
