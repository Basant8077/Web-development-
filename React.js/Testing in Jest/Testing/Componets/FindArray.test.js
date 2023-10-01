const giveArray = require('./FindArray')
const Array = [1,2,3 ,4];
test('Matches', () => {
  expect(giveArray([1,2,3 ,4])).toEqual([1,2,3 ,4]);
})
