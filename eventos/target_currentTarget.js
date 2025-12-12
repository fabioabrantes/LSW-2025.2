const lista = document.getElementById("minhaLista");

lista.addEventListener("click", function (event) {
  console.clear();
  console.log("👉 event.target:", event.target);
  console.log("📍 event.currentTarget:", event.currentTarget);
  console.log("🧠 this:", this);
  if(event.target.tagName === "LI"){
    alert("tage li clicado" + event.target.textContent)
  }
});
