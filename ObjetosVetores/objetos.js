let obj = {
  name: "Fulano",
  age: 32,
  preferencesFoods: ["lazanha", "feijoada", "frutas"],
  friends: [{ name: "matheus" }, { name: "joão paulo" }, { name: "Samily" }],
  saudacao: () => {
    console.log("oi meus amigos");
  },
};
console.log(obj.friends[0]["name"]);



const objJson = JSON.stringify(obj);
const obj2 = JSON.parse(objJson);
console.log(obj2);

localStorage.setItem("objeto", objJson);
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
