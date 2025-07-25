import goblinImg from "../img/goblin.png";

export default class Goblin {
  constructor(field, onHit, onMiss) {
    this.field = field;
    this.onHit = onHit;
    this.onMiss = onMiss;
    this.currentIdx = null;
    this.timer = null;
    this.goblin = document.createElement("img");
    this.goblin.src = goblinImg;
    this.goblin.className = "goblin";
    this.goblin.style.width = "80px";
    this.goblin.alt = "";
    this.goblin.addEventListener("click", () => this.hit());
    this.missed = false;
  }

  show() {
    this.missed = true;
    const { cell, idx } = this.field.getRandomCell(this.currentIdx);
    this.field.clear();
    cell.append(this.goblin);
    this.currentIdx = idx;
    this.timer = setTimeout(() => this.miss(), 1000);
  }

  hide() {
    if (this.goblin.parentNode) {
      this.goblin.remove();
    }
    clearTimeout(this.timer);
  }

  hit() {
    if (!this.missed) return;
    this.missed = false;
    this.hide();
    if (this.onHit) this.onHit();
  }

  miss() {
    if (!this.missed) return;
    this.missed = false;
    this.hide();
    if (this.onMiss) this.onMiss();
  }

  stop() {
    this.hide();
    clearTimeout(this.timer);
  }
}
