import { pokemonArray } from "./data/pokemon.js";

const cardContainer = document.querySelector(".card-container");
const searchBar = document.querySelector("#search-bar");

const renderPokemonCards = (pokemonArray) => {
  let htmlString = "";

  pokemonArray.forEach((element) => {
    htmlString += `
        <section class="card-container">
        <div class="card">
            <img src=${element.sprite} alt="Pokemon" card="card__image">
            <div class="card__content" >
                <h2 class="card__heading">${
                  element.name.charAt(0).toUpperCase() + element.name.slice(1)
                }</h2>
                <p class="card__text">${
                  element.name.charAt(0).toUpperCase() + element.name.slice(1)
                } (#${element.id}) is a ${element.types.join(
      " & "
    )} type pokemon.</p>
            </div>
            </div>
    </section>
        `;
  });
  cardContainer.innerHTML = htmlString;
};
renderPokemonCards(pokemonArray);

const getUserSearchName = (event) => {
  const userSearchInput = event.target.value;
  const filteredSearch = pokemonArray.filter((element) => {
    return pokemonArray.name.includes(userSearchInput);
  });
  console.log(filteredSearch);
};

searchBar.addEventListener("input", getUserSearchName);
