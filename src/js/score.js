export default class Score {
  constructor() {
    this.value = 0;
    this.el = document.createElement("div");
    this.el.id = "score";
    this.el.style.color = "#fff";
    this.el.style.fontSize = "24px";
    this.el.style.marginBottom = "20px";
    this.update();
    document.body.insertBefore(this.el, document.getElementById("game-field"));
  }

  increment() {
    this.value++;
    this.update();
  }

  reset() {
    this.value = 0;
    this.update();
  }

  update() {
    this.el.textContent = `Счёт: ${this.value}`;
  }
}
