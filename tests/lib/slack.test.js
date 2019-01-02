const slack = require('../../app/lib/slack');

test('adds 1 + 2 to equal 3', () => {
  const message = 'Mensagem teste';
  expect(slack.sendMessage(message)).toBe(true);
});
