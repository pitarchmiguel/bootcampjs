import "./style.css";

const title = "font-size: 1.2rem; color: green; font-weight: bold;";
interface Grupos {
    grupo: string;
    anoFundacion: number;
    estaActivo: boolean;
    genero: string;
}

const grupo1 : Grupos = {
    grupo: "The Beatles",
    anoFundacion: 1960,
    estaActivo: true,
    genero: "Pop Rock",
}

const grupo2 : Grupos = {
    grupo: "Queen",
    anoFundacion: 1970,
    estaActivo: false,
    genero: "Rock",
}

const grupo3 : Grupos = {
    grupo: "AC/DC",
    anoFundacion: 1973,
    estaActivo: true,
    genero: "Hard Rock",
}

const grupo4 : Grupos = {
    grupo: "Ludwig van Beethoven",
    anoFundacion: 1770,
    estaActivo: false,
    genero: "Clasica",
}

const grupo5 : Grupos = {
    grupo: "The Rolling Stones",
    anoFundacion: 1962,
    estaActivo: true,
    genero: "Rock",
}

console.log(`%c ${grupo1.grupo}`, title);
console.log(`%c ${grupo2.grupo}`, title);
console.log(`%c ${grupo3.grupo}`, title);
console.log(`%c ${grupo4.grupo}`, title);
console.log(`%c ${grupo5.grupo}`, title);