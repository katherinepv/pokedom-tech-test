import { pokemonArray } from "./data/pokemon.js";

const cardContainer = document.querySelector(".card-container");

console.log(pokemonArray);

const renderPokemonCards = (pokemonArray) => {
  let htmlString = "";

  pokemonArray.forEach((element) => {
    htmlString += `
        <section>
            <img src=${element.sprite}>
            <h2>${
              element.name.charAt(0).toUpperCase() + element.name.slice(1)
            }</h2>
            <p>${
              element.name.charAt(0).toUpperCase() + element.name.slice(1)
            } (#${element.id}) is a ${element.types} type pokemon.</p>
        </section>
        `;
  });
  cardContainer.innerHTML = htmlString;
};

renderPokemonCards(pokemonArray);
