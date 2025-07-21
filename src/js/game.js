import GameField from "./gameField";
import Goblin from "./goblin";
import Score from "./score";
import MissCounter from "./missCounter";
import HammerCursor from "./hammerCursor";

export default class Game {
  constructor() {
    this.field = new GameField();
    this.score = new Score();
    this.missCounter = new MissCounter(this.endGame.bind(this));
    this.goblin = new Goblin(
      this.field,
      () => {
        this.score.increment();
        this.nextTurn();
      },
      () => {
        this.missCounter.increment();
        this.nextTurn();
      },
    );
    this.hammer = new HammerCursor();
    this.isGameOver = false;
  }

  start() {
    this.isGameOver = false;
    this.score.reset();
    this.missCounter.reset();
    this.nextTurn();
  }

  nextTurn() {
    if (this.isGameOver) return;
    this.goblin.show();
  }

  endGame() {
    this.isGameOver = true;
    this.goblin.stop();
    setTimeout(() => {
      alert(`Игра окончена! Ваш счёт: ${this.score.value}`);
      this.start();
    }, 100);
  }
}
