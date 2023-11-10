const calculatePrice = require('./calculatePrice');

describe('Test age restriction', () => {
test('Test underageuser cant buy product A', () => {
  expect(calculatePrice.calculateProductPrice(20, 'A', false, false)).toBe('Customer does not meet the purchase requirements.');
});

test('Test user buying product A', () => {
  expect(calculatePrice.calculateProductPrice(21, 'A', false, false)).toBe(20);
});

test('Test user buying product B', () => {
  expect(calculatePrice.calculateProductPrice(25, 'B', false, false)).toBe(40);
});

test('Test user age 25 cant buy product C', () => {
  expect(calculatePrice.calculateProductPrice(25, 'C', false, false)).toBe('Customer does not meet the purchase requirements.');
});

test('Test user age 21 cant buy product D', () => {
  expect(calculatePrice.calculateProductPrice(21, 'D', false, false)).toBe('Customer does not meet the purchase requirements.');
});
});

describe('Test boundarys', () => {
  test('Test underageuser cant buy product A', () => {
    expect(calculatePrice.calculateProductPrice(20, 'A', false, false)).toBe('Customer does not meet the purchase requirements.');
  });
});

test('handles minimum customer age at the lower boundary', () => {
  expect(calculatePrice.calculateProductPrice(0, 'B', false, false)).toBe('Customer does not meet the purchase requirements.');
});

test('handles maximum customer age at the upper boundary', () => {
 
  expect(calculatePrice.calculateProductPrice(150, 'B', false, false)).toBe('Customer does not meet the purchase requirements.');
});

test('handles maximum product price at the upper boundary', () => {
  
  expect(calculatePrice.calculateProductPrice(30, 'B', false, false)).toBe('Maximum price exceeded: $2000');
});