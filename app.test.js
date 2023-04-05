const { add, subtract, multiply, divide} = require('./app');

describe('Calculator functions', () => {

  describe('add', () => {

    it('should return the sum of two numbers', () => {

      expect(add(2, 3)).toBe(5);
      expect(add(0, 0)).toBe(0);
      expect(add(-2, -3)).toBe(-5);

    });

    it('should handle invalid input', () => {

      expect(add('hello', 'world')).toBe('Invalid input');
      expect(add(2, 'world')).toBe('Invalid input');

    });
  });

  describe('subtract', () => {

    it('should return the difference of two numbers', () => {

      expect(subtract(5, 3)).toBe(2);
      expect(subtract(0, 0)).toBe(0);
      expect(subtract(3, 5)).toBe(-2);

    });

    it('should handle invalid input', () => {

      expect(subtract('hello', 'world')).toBe('Invalid input');
      expect(subtract(2, 'world')).toBe('Invalid input');

    });
  });

  describe('multiply', () => {

    it('should return the product of two numbers', () => {

      expect(multiply(2, 3)).toBe(6);
      expect(multiply(0, 0)).toBe(0);
      expect(multiply(-2, -3)).toBe(6);

    });

    it('should handle invalid input', () => {

      expect(multiply('hello', 'world')).toBe('Invalid input');
      expect(multiply(2, 'world')).toBe('Invalid input');

    });
  });

  describe('divide', () => {

    it('should return the quotient of two numbers', () => {

      expect(divide(6, 3)).toBe(2);
      expect(divide(0, 1)).toBe(0);
      expect(divide(-6, -3)).toBe(2);

    });

    it('should handle division by zero', () => {

      expect(divide(2, 0)).toBe('Cannot divide by zero');

    });

    it('should handle invalid input', () => {

      expect(divide('hello', 'world')).toBe('Invalid input');
      expect(divide(2, 'world')).toBe('Invalid input');

    });
  });
});