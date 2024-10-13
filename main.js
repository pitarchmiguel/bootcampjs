let showTurno = document.querySelector("#showTurno");
let after = document.querySelector("#after");
let next = document.querySelector("#next");

let turno = 0;

after.addEventListener("click", () => {
  turno--;
  showTurno.innerHTML = turno.toString().padStart(2, "0");
})

next.addEventListener("click", () => {
  turno++;
  showTurno.innerHTML = turno.toString().padStart(2, "0");
})

let ingresarTurno = document.querySelector("#ingresarTurno");
let addTurno = document.querySelector("#addTurno");

addTurno.addEventListener("click", () => {
  let ingresado = ingresarTurno.value;
    turno = parseInt(ingresado);
    showTurno.innerHTML = turno.toString().padStart(2, "0");
  })