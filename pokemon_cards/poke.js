const ability = document.querySelector("#ability");
const move = document.querySelector("#move");
const weightTXT = document.querySelector("#weight");
const hp = document.querySelector("#hp");
const pokeNAME = document.querySelector("#name");
const img = document.querySelector("#img");
const button = document.querySelector("button");
const input = document.querySelector("input");

let abilityTXT = "";
let search = "";
let id = 1;
/**/
async function getPokemon(path) {
  let search = await fetch(`https://pokeapi.co/api/v2/pokemon/${path}`);
  let result = await search.json();
  let {
    name,
    id,
    height,
    weight,
    abilities: [
      {
        ability: { name: first_ability },
      },
    ],
    moves: [
      {
        move: { name: first_move },
      },
    ],
    sprites: {
      other: {
        // dream_world: { front_default: dream_world },
        home: { front_default: front },
      },
    },
  } = result;
  // console.log(name, id, height, weight, first_ability, first_move, dream_world);
  abilityTXT = "hello";
  ability.innerText = "Ability: " + first_ability;
  move.innerText = "Move: " + first_move;
  weightTXT.innerText = "Weight:" + weight + " lbs";
  hp.innerText = "HP: " + weight;
  pokeNAME.innerText = name;
  img.src = front;
}

function haha() {
  abilityTXT = "hello";

  abilityTXT = "hello";
  ability.innerText = "hello";
}

getPokemon(id);
haha();

console.log(abilityTXT);

button.addEventListener("mouseover", (event) => {
  event.target.style.color = "orange";
});


button.addEventListener("click", function () {
  id = parseInt(input.value);
  getPokemon(id);
});
