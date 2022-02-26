const url = "https://pokedex2.p.rapidapi.com/pokedex/uk";

const options = { "headers": {
		"x-rapidapi-host": "pokedex2.p.rapidapi.com",
		"x-rapidapi-key": "9f4abe256cmshb615b7eda81776cp17607ajsn94b7372ba1af"
}};

const container = document.querySelector(".container");

async function callPokedex() { //api call
  try {
    const response = await fetch(url, options);
    const pokemon = await response.json();

    renderPokemon(pokemon); //function for HTML to be displayed
    searchPokemon(pokemon); //filter (by type)

  } catch(error) { //displaying that an error has occured
    container.innerHTML = displayError();
    console.log(error); 
  }
}

callPokedex();

function renderPokemon(pokemonToRender) { //function for HTML to be displayed
  container.innerHTML = "";

  const pokemon = pokemonToRender;

  for(let i = 0; i < pokemon.length; i++) {

    if (i === 50) { // change value to display more Pokemon.
      break;
    }

    const newNumber = +pokemon[i].number; //removes 0´s in front

    container.innerHTML +=`<div class="card">
                            <a href="details.html?name=${pokemon[i].name}">
                            <div class="image"><img src="${pokemon[i].ThumbnailImage}" alt="${pokemon[i].name}"></div>
                              <div class="content">
                                <h3 class="name">${pokemon[i].name}</h3>
                                <span class="number">${newNumber}</span>
                              </div>
                            </a>
                          </div>`;
  }
};

function searchPokemon(searching) { // function for filtering
  const search = document.querySelector("#search");

  search.onkeyup = function (event) { 
    const searchValue = event.target.value.trim().toLowerCase();

    const filterByType = searching.filter(function (pokemon) { //filter by type (e.g fire, water)
      if (pokemon.type[0].toLowerCase().startsWith(searchValue)) {
        return true;
      }
    });

    renderPokemon(filterByType);
  };
}


