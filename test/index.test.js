const { add, subtract, multiply, divide } = require('../src/index');

describe('Calculator Functions', () => {
  describe('add', () => {
    test('adds two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('adds positive and negative numbers', () => {
      expect(add(5, -3)).toBe(2);
    });

    test('adds two negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });
  });

  describe('subtract', () => {
    test('subtracts two positive numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    test('subtracts negative from positive', () => {
      expect(subtract(5, -3)).toBe(8);
    });
  });

  describe('multiply', () => {
    test('multiplies two positive numbers', () => {
      expect(multiply(3, 4)).toBe(12);
    });

    test('multiplies by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    test('multiplies negative numbers', () => {
      expect(multiply(-2, -3)).toBe(6);
    });
  });

  describe('divide', () => {
    test('divides two positive numbers', () => {
      expect(divide(6, 3)).toBe(2);
    });

    test('divides with decimal result', () => {
      expect(divide(5, 2)).toBe(2.5);
    });

    test('throws error when dividing by zero', () => {
      expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
    });
  });
});
