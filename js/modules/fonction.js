import Boisson from "./boisson.js";

// fonction permetant de d'instancier automatiquement une boisson avec pour paramètre "nom" et "filtre".
export function newBoisson (nom, filtre) {
    let boisson = new Boisson(nom, filtre);
    return (boisson);
}

// fonction permettant de selection une boisson et de l'afficher.
// const selection = document.querySelector('#selection');
// let boissonChoisie = document.querySelectorAll(".title h2");
// let selection1 = document.querySelector(".card .title h2")

// export function handleClick() {
//     for (const boisson of boissonChoisie) {
//         console.log(boisson);
//         // selection.textContent += `${boissonChoisie.textContent}\n`;
//     }
//   }


