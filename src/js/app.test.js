import GameField from "./gameField";
import Goblin from "./goblin";
import Score from "./score";
import MissCounter from "./missCounter";

describe("GameField", () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="game-field"></div>';
  });

  test("создаёт поле с 16 ячейками", () => {
    const field = new GameField();
    expect(field.cells.length).toBe(16);
    expect(document.querySelectorAll(".cell").length).toBe(16);
  });
});

describe("Goblin", () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="game-field"></div>';
  });

  test("гоблин появляется в ячейке", () => {
    const field = new GameField();
    const goblin = new Goblin(field);
    goblin.show();
    expect(document.querySelector(".goblin")).not.toBeNull();
  });
});

describe("Score", () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="game-field"></div>';
  });

  test("увеличивает счёт", () => {
    const score = new Score();
    score.increment();
    expect(score.value).toBe(1);
    expect(score.el.textContent).toContain("1");
  });
});

describe("MissCounter", () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="game-field"></div>';
  });

  test("увеличивает промахи и вызывает onGameOver", () => {
    const onGameOver = jest.fn();
    const miss = new MissCounter(onGameOver, 2);
    miss.increment();
    expect(miss.value).toBe(1);
    miss.increment();
    expect(onGameOver).toHaveBeenCalled();
  });
});
