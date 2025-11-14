const lista = document.querySelectorAll("#minhaLista li");
const listaArray = Array.from(lista);

function ordenaLista() {
  return listaArray.sort((a, b) => a.textContent.localeCompare(b.textContent));
}
const listaOrdenada = ordenaLista();

const ul = document.querySelector("#minhaLista");

// limpa a UL
ul.innerHTML = "";

// adiciona a lista ordenada
ordenaLista().forEach((li) => {
  ul.appendChild(li);
});

const lista2 = document.getElementsByClassName("minhaList minhalistaAzul");
const lista2Array = Array.from(lista2);
console.log(lista2);





/* document.querySelector("#ordenarBtn").addEventListener("click", () => {
  const itensOrdenados = ordenaLista();

  // limpa a UL
  ul.innerHTML = "";

  // adiciona novamente em ordem
  itensOrdenados.forEach((li) => {
    ul.appendChild(li);
  });
}); */
