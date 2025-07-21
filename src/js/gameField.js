export default class GameField {
  constructor(size = 4) {
    this.size = size;
    this.field = document.getElementById("game-field");
    this.cells = [];
    this.render();
  }

  render() {
    this.field.innerHTML = "";
    this.cells = [];
    for (let i = 0; i < this.size * this.size; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      this.field.appendChild(cell);
      this.cells.push(cell);
    }
  }

  getRandomCell(excludeIndex = null) {
    let idx;
    do {
      idx = Math.floor(Math.random() * this.cells.length);
    } while (idx === excludeIndex);
    return { cell: this.cells[idx], idx };
  }

  clear() {
    this.cells.forEach((cell) => (cell.innerHTML = ""));
  }
}
