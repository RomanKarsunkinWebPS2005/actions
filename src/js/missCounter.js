export default class MissCounter {
  constructor(onGameOver, maxMisses = 5) {
    this.value = 0;
    this.maxMisses = maxMisses;
    this.onGameOver = onGameOver;
    this.el = document.createElement("div");
    this.el.id = "misses";
    this.el.style.color = "#fff";
    this.el.style.fontSize = "20px";
    this.el.style.marginBottom = "10px";
    this.update();
    document.body.insertBefore(this.el, document.getElementById("game-field"));
  }

  increment() {
    this.value++;
    this.update();
    if (this.value >= this.maxMisses) {
      if (this.onGameOver) this.onGameOver();
    }
  }

  reset() {
    this.value = 0;
    this.update();
  }

  update() {
    this.el.textContent = `Промахи: ${this.value}/5`;
  }
}
