let num = 10;
let texto = "Olá, Mundo";
let logico = true;
let usuario = "fabio";
if (usuario) {
  console.log("O número é maior que 5");
} else {
  console.log("O número é menor ou igual a 5",usuario);
}

for (let contador = 0; contador < 5; contador++) {
  console.log("Contador: " + contador);
}

while (num > 0) {
  console.log("Numero atual: " + num);

  num = num - 1;
}

function somar(a,b){
  return a + b;
}
let resultado =somar(3,4);
console.log("resultado da soma: " + resultado);



let num1 = "5.15";
console.log(parseFloat(num1));