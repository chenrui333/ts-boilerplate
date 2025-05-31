import { Calculator } from '@src/Calculator';
import { beforeEach, describe, expect, test } from 'vitest';

describe('Calculator', () => {
  let calc: Calculator;

  beforeEach(() => {
    calc = new Calculator();
  });

  test('initial value defaults to zero', () => {
    expect(calc.value()).toBe(0);
  });

  test('adds numbers correctly', () => {
    expect(calc.add(5).value()).toBe(5);
  });

  test('subtracts numbers correctly', () => {
    expect(calc.add(10).subtract(4).value()).toBe(6);
  });

  test('multiplies numbers correctly', () => {
    expect(calc.add(2).multiply(3).value()).toBe(6);
  });

  test('divides numbers correctly', () => {
    expect(calc.add(10).divide(2).value()).toBe(5);
  });

  test('handles division by zero gracefully', () => {
    expect(() => calc.divide(0)).toThrow('Cannot divide by zero.');
  });

  test('clears correctly', () => {
    expect(calc.add(10).clear().value()).toBe(0);
  });
});
