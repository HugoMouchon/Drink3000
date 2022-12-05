
// Partie Javascript du carousel d'images
//---------------------------------------------------------

import Boisson from "./modules/boisson.js";
import { newBoisson } from "./modules/fonction.js";


const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

//------------------------------------------------

// Condition pour rendre visible le header lors du scroll de l'utilisateur
//---------------------------------------------------------

const hiddenHeader = document.querySelector("header");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 200) {
    hiddenHeader.style.display = '';
  } else {
    hiddenHeader.style.display = 'none';
  }
});

//--------------------------------------------------

// Décalaration du tableau numérique d'objets.

const boissonTableau = [];

// Instanciation de 3 objets "Boisson" sur le tableau "boissonTableau".

boissonTableau.push(new Boisson("Original", "Energissante"));
boissonTableau.push(new Boisson("Mojito", "Energissante"));
boissonTableau.push(new Boisson("Tropical", "Désaltérante"));

console.table(boissonTableau);

// Récupération des choix de boissons de l'utilisateur via les écouteurs d'évenements et affichage du message correspondant.


// let choixBoissons = document.querySelectorAll(".select");
// let message = document.querySelector(".selection");
// // const affichageMessage = document.querySelector('#selection');
// for (const choixBoisson of choixBoissons) {

//   choixBoisson.addEventListener("click", (e) => {
//     let paragrapheSelection = document.querySelector(".paragrapheSelection");

//     let comparaison = boissonTableau.find(choixBoisson => choixBoisson.index === boissonTableau.index)
//     let index = boissonTableau.indexOf(nom);

//     do {
//       if (comparaison) {
//         message = document.createElement("p");
//         message.textContent = `coucou`
//         paragrapheSelection.appendChild(message);
//       }
//     } while (0);
//   });
// }


// const cards = document.querySelectorAll('.select');

// for (const card of cards) {
//   card.addEventListener('click', handleClick);
// }


