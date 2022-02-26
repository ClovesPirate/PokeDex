// target elements
const detailsContainer = document.querySelector(".poke-container");
const title = document.querySelector("title");

//get querystring
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("name");


// url for API
const url = "https://pokedex2.p.rapidapi.com/pokedex/uk/" + id;

const options = { "headers": {
  "x-rapidapi-host": "pokedex2.p.rapidapi.com",
  "x-rapidapi-key": "9f4abe256cmshb615b7eda81776cp17607ajsn94b7372ba1af"
}};


//API call
async function fetchPokemon() {
  try {
  const response = await fetch(url, options);
  const pokemon = await response.json();

  console.log(pokemon);
 
  detailsContainer.innerHTML = "";
  createHtml(pokemon); //content to be displayed

  } catch(error) { //displaying that an error has occured
    detailsContainer.innerHTML = displayError();
    console.log(error);
  }
};

fetchPokemon();


// HTML to be created up execution of fetchPokemon()
function createHtml(pokemon) {

  title.innerHTML = pokemon[0].name;

  detailsContainer.innerHTML = 
  `<div class="details-card">
    <div class="details-image"><img src="${pokemon[0].thumbnailimage}" alt="${pokemon[0].name}"></div>
    <div class="details-content">
      <h2 id="pokename">${pokemon[0].name}</h2>
      <div class="stats">
        <div><p class="bold">Type:</p> ${pokemon[0].type.join(" & ")}</div>
        <div><p class="bold">Weaknesses:</p> ${pokemon[0].weaknesses.join(" & ")}</div>
        <div><p class="bold">Height:</p> ${pokemon[0].height}</div>
        <div><p class="bold">Weight:</p> ${pokemon[0].weight}</div>
      </div>
    </div>
  </div>`
}