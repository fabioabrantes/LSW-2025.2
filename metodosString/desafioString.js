const form = document.getElementById("form-cadastro");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const fieldNome = String(document.getElementById("nome").value);
  const fieldEmail = String(document.getElementById("email").value);
  const fieldIdade = document.getElementById("idade").value;
  const fieldInteresses = String(document.getElementById("interesses").value);

  alert(`${fieldNome}, ${fieldEmail}, ${fieldIdade}, ${fieldInteresses}`)
});
