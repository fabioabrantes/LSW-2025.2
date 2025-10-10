let x = 1;
x+= 10;
x *=20;
x /=4;

console.log(x)

let a =1;
a++;
let b = 2;
let c = 10
c = ++b * --a;
b *= a++ + --b + 3 + c; 
console.log(b);

let a6 = false && "jose"
console.log(typeof a6)
let lista = [1,2,3,4,5]
console.log(typeof lista)

function soma(a,b){
  return a+b;
}
delete lista[1];
console.log(lista)

let array1 = [1,2,3,4,5];
let resultado = 0;
array1.forEach(item => {
  resultado +=item;
});
console.log(resultado)

 function soma2(a,b,c,d){
  console.log(a +b + c+d)
 }
soma2(...array1)


let lista2 = [1,2,3,4,5];
let nome = "fabio"
for (const caracter of nome) {
   console.log(caracter)

}

let user = {
  name:"fabio",
  profission:"professor"
}
Dictionary()
let lista3 = new Array(1,2,3,4)
console.log(JSON.stringify(user))