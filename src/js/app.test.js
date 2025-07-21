test('Dummy test', () => {
  document.body.innerHTML = '<div id="game-field"></div>';
  const field = document.getElementById('game-field');
  expect(field).not.toBeNull();
});