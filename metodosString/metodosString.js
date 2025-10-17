let frase = "Ads é nota 5 no ENADE"
const indice = frase.indexOf(5,3)
const existe = frase.includes("EaADE");
const palavra = frase.slice(-6,-3)
console.log(palavra)
console.log(frase[indice])
console.log(existe);

const codigo = "A-BC-123-XY-999";
console.log(codigo.slice(2,-7))
console.log(codigo.includes('9999'))
console.log(codigo.substring(5,2))
console.log(codigo.substring(codigo.indexOf("XY")-3,codigo.lastIndexOf("9")));

const frase = "Estudar JavaScript com lógica é essencial!";

const pos1 = frase.indexOf("Java");
const pos2 = frase.lastIndexOf("a");
const segredo = frase.slice(pos1, pos2 - 3).toUpperCase();

const existe = frase.includes("python");
const invertido = frase.substring(15, 8); // índices trocados

console.log(pos1);
console.log(pos2);
console.log(segredo);
console.log(existe);
console.log(invertido);

const dataHoje = "17/10/2025";
const [dia, mes, ano] = dataHoje.split("/");
console.log(dia);
console.log(mes);
console.log(ano);

/* let str = "fabio é professor LSW";
const str2= str.replace("fabio","diogo")
const indice = str.indexOf('O')
console.log(indice) */

const frase1 = "Nome: João Silva | Idade: 25 | Email: joao.silva@email.com";
//const temEmail = frase.includes("Email")
/* const indiceInicial = frase.indexOf(":");
const indiceFinal = frase.indexOf("|");
const nome = frase.slice(indiceInicial +1,indiceFinal);
console.log(nome.trim())
const indiceInicialidade = frase.indexOf(":",indiceFinal);
const indiceFinalidade = frase.indexOf("|",indiceInicialidade);
const idade = frase.slice(indiceInicialidade +1,indiceFinalidade);
console.log(idade.trim())
const indiceIniciaEmail = frase.indexOf(":",indiceFinalidade);
const indiceFinalEmail = frase.indexOf("|",indiceIniciaEmail);
const email = frase.slice(indiceIniciaEmail + 1);
console.log(email.trim()) */

const fraseDesafio = "Nome: João Silva | Idade: 25 | Email: joao.silva@email.com";
const arrayResult = fraseDesafio.split("|");
console.log(arrayResult.length)
for (let index = 0; index < arrayResult.length; index++) {
  const valor = arrayResult[index];
  const resultado = valor.split(":")
  console.log(resultado[1])
}