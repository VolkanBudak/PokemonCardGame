import * as React from "react";
import "./App.css";

const pokemons = [
  { id: 4, name: "Charmander", type: "Fire", base_experience: 62 },
  { id: 7, name: "Squirtle", type: "Water", base_experience: 63 },
  { id: 11, name: "Metapod", type: "Bug", base_experience: 72 },
  { id: 12, name: "Butterfree", type: "Bug/Flying", base_experience: 178 },
  { id: 25, name: "Pikachu", type: "Electric", base_experience: 112 },
  { id: 39, name: "Jigglypuff", type: "Normal", base_experience: 95 },
  { id: 94, name: "Gengar", type: "Ghost/Poison", base_experience: 225 },
  { id: 133, name: "Eevee", type: "Normal", base_experience: 65 },
];

function App() {
  return (
    <div className="App">
      <h1>Pokemon Game</h1>
      <PokeGame pokeGame={pokemons} />
    </div>
  );
}

function PokeGame({ pokeGame }) {
  const shuffled = pokeGame.sort(() => Math.random() - 0.5);
  const split = Math.ceil(shuffled.length / 2);
  const p1 = pokeGame.slice(0, split);
  const p2 = pokeGame.slice(-split);

  let p1Exp = p1.reduce((accumulator, exp1) => {
    return accumulator + exp1.base_experience;
  }, 0);

  let p2Exp = p2.reduce((accumulator, exp1) => {
    return accumulator + exp1.base_experience;
  }, 0);

  return (
    <div>
      <Pokedex
        playerHand={p1}
        exp={p1Exp}
        isWinner={p1Exp > p1Exp ? "P1 win" : "P2 win"}
      />
      <Pokedex
        playerHand={p2}
        exp={p2Exp}
        isWinner={p2Exp > p1Exp ? "P2 win" : "P1 win"}
      />
    </div>
  );
}

//pokemons betyder samma som const pokemons = props.pokemons
function Pokedex({ playerHand, exp, isWinner }) {
  return (
    <div>
      {playerHand.map((pokemon) => {
        return (
          <Pokecard
            key={pokemon.id}
            pokemonCard={pokemon}
            exp={exp}
            isWinner={isWinner}
          />
        );
      })}
    </div>
  );
}

//{pokemon} betyder samma som const pokemon = props.pokemon
function Pokecard({ pokemonCard, exp, isWinner }) {
  console.log(isWinner);
  return (
    <div className="card">
      <ul>
        <li>
          <h2>{pokemonCard.name}</h2>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonCard.id}.png`}
          />
          <p>{pokemonCard.type}</p>
          <p>{pokemonCard.base_experience}</p>
        </li>
      </ul>
      <h2>{exp}</h2>
      <h2>{isWinner}</h2>
    </div>
  );
}

export default App;
