function validaEntradas(){
const min = parseInt(document.getElementById("min").value);
  const max = parseInt(document.getElementById("max").value);

  if (isNaN(min) || isNaN(max)) {
    alert("preeencha min ou max com número válidos");
    return null;
  }

  if (min > max) {
    alert("eroor: o minimo esta sendo maior que o máximo. digite corretamente");
    return null;
  }

  return { min, max };
}

function gerarNumeroAleatorio() {
  const valores = validaEntradas();
  if (!valores) {
    return;
  }

  const { min, max } = valores;
  let resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById("resultado").textContent = resultado;
  return resultado;
}
