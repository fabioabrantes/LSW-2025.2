const URL_User = "http://localhost:3333/users";
const userList = document.getElementById("user-list");

async function fetchUsers() {
  const res = await fetch(URL_User);
  const data = await res.json();
  console.log(data);

  userList.innerHTML = "";

  data.forEach((user) => {
    const li = document.createElement("li");
    li.innerHTML = `${user.name} - ${user.email}
      <button onclick="deleteUser('${user.id}')">Excluir</button>`;
    userList.appendChild(li);
  });
}
fetchUsers();

const form = document.getElementById("user-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
// POST - Adicionar novo usuário
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const user = {
    name: nameInput.value,
    email: emailInput.value,
  };
  await fetch(URL_User, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  form.reset();
  fetchUsers();
});
