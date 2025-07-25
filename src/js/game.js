import GameField from "./gameField";
import Goblin from "./goblin";
import Score from "./score";
import MissCounter from "./missCounter";
import HammerCursor from "./hammerCursor";

export default class Game {
  constructor() {
    this.field = new GameField();
    this.field.onEmptyCellClick = () => {
      if (!this.isGameOver) {
        this.missCounter.increment();
        this.nextTurn();
      }
    };
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
      showModal(`Игра окончена! Ваш счёт: ${this.score.value}`, () => {
        this.start();
      });
    }, 100);
  }
}

function showModal(message, onClose) {
  const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modal-message');
  const modalClose = document.getElementById('modal-close');
  modalMessage.textContent = message;
  modal.classList.add('show');
  function closeModal() {
    modal.classList.remove('show');
    modalClose.removeEventListener('click', closeModal);
    modal.removeEventListener('click', outsideClick);
    if (typeof onClose === 'function') onClose();
  }
  function outsideClick(e) {
    if (e.target === modal) closeModal();
  }
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', outsideClick);
}
