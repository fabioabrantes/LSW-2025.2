let namesUsers = ["fabio", "jose", "henrique"];
namesUsers.forEach((name, indice) => {
  let nameX = name.toLocaleUpperCase();
  let resultado = `[${indice}]: ${nameX}`;
  console.log(resultado);
});

const users = [
  { name: "fabio", email: "fad@email.com" },
  { name: "jose", email: "jose@email.com" },
  { name: "alan", email: "alanemail.com" },
  { name: "joao", email: "joao@email" },
];
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
users.forEach((user) => {
  if (emailRegex.test(user.email)) {
    let primeiraLetra = user.name[0].toLocaleUpperCase();
    let restanteNome = user.name.substring(1);
    let resultado = primeiraLetra + restanteNome;
    console.log(resultado);
  } else {
    console.log("email invalido");
  }
});
console.log(users);

const products = [
  { name: "bicicleta", price: 130, category: "sport" },
  { name: "camiseta", price: 80, category: "clothes" },
  { name: "computador", price: 3800, category: "tech" },
  { name: "mouse", price: 200, category: "tech" },
];

const filterProductsTech = products.filter((product) => {
  return product.category === "tech";
});
const filterProductsTechFormatted = filterProductsTech.map((product) => {
  return {
    category: product.category,
    name: product.name.toLocaleUpperCase(),
    price: `R$ ${product.price.toFixed(2)}`,
  };
});
console.log(filterProductsTechFormatted);

const productsFormatted = products.map((product) => {
  return {
    name: product.name.toLocaleUpperCase(),
    price: `R$ ${product.price.toFixed(2)}`,
  };
});

console.log(productsFormatted);

const carrinhoCompra = ['camisa','bola', 'mouse']
function verificaItemNoCarrinho(carrinho){
  let resultado = carrinho.indexOf('bola')
  
  if(resultado > -1){
    console.log("produto encontrado")
  }else{
    console.log("produto nao encontrado")
  }
}
verificaItemNoCarrinho(carrinhoCompra)