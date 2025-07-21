import "../css/style.css";
import gnome from "../img/goblin.png";

const field = document.getElementById("game-field");

const cells = [];

for (let i = 0; i < 16; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  field.appendChild(cell);
  cells.push(cell);
}

const character = document.createElement("img");
character.src = gnome;
character.style.width = "80px";

let currentIndex = Math.floor(Math.random() * 16);
cells[currentIndex].appendChild(character);

setInterval(() => {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * 16);
  } while (newIndex === currentIndex);

  cells[newIndex].appendChild(character);
  currentIndex = newIndex;
}, 1000);
