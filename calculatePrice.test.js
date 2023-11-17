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

test('Test user age 25 cant buy product D', () => {
  expect(calculatePrice.calculateProductPrice(25, 'D', false, false)).toBe('Customer does not meet the purchase requirements.');
});

});

describe('Test product D is 20% more expensive', () => {

test('Product D is 20% more expensive', () => {
  expect(calculatePrice.calculateProductPrice(26, 'A', false, false)).toBe(20);
});

test('Product D is 20% more expensive', () => {
  expect(calculatePrice.calculateProductPrice(26, 'D', false, false)).toBe(50);
});
});

describe('Test maximum product price', () => {
test('maximum product price at the upper boundary', () => {
  expect(calculatePrice.calculateProductPrice(2000, 'B', false, false)).toBe('Maximum price exceeded: $2000');
});
});

describe('Test user has made any returns in past, the price is increased by $150', () => {
  test('maximum product price at the upper boundary', () => {
    expect(calculatePrice.calculateProductPrice(21, 'A', true, false)).toBe(170);
  });
});

describe('Test loyalty members receive a 10% discount.', () => {
    test('loyalty members receive a 10% discount.', () => {
      expect(calculatePrice.calculateProductPrice(21, 'A', false, true)).toBe(18);
    });
});