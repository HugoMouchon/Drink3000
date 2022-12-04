
// Partie Javascript du carousel d'images
//---------------------------------------------------------

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

const hiddenHeader = document.querySelector ("header");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 200) {
    hiddenHeader.style.display = '';
  } else {
    hiddenHeader.style.display = 'none';
  }
});

//--------------------------------------------------

