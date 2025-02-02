import "./style.css";

const btnAtras = document.querySelector("#btn-atras");
const btnSiguiente = document.querySelector("#btn-siguientes");
const numActual = document.querySelector("#numActual");
const inputTurno = document.querySelector("#input-turno");
const cambiarTurno = document.querySelector("#cambiar-turno");
const reset = document.querySelector("#reset");

btnAtras.addEventListener("click", () => {
  numActual.innerHTML = (parseInt(numActual.innerHTML) - 1).toString().padStart(2, "0");

});

btnSiguiente.addEventListener("click", () => {
  numActual.innerHTML = (parseInt(numActual.innerHTML) + 1).toString().padStart(2, "0");
});

cambiarTurno.addEventListener("click", () => {
  numActual.innerHTML = inputTurno.value;
});

reset.addEventListener("click", () => {
  numActual.innerHTML = "01";
});