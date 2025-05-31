export class Calculator {
  private currentValue: number = 0;

  constructor(initialValue: number = 0) {
    this.currentValue = initialValue;
  }

  add(value: number): this {
    this.currentValue += value;
    return this;
  }

  subtract(value: number): this {
    this.currentValue -= value;
    return this;
  }

  multiply(value: number): this {
    this.currentValue *= value;
    return this;
  }

  divide(value: number): this {
    if (value === 0) {
      throw new Error('Cannot divide by zero.');
    }
    this.currentValue /= value;
    return this;
  }

  clear(): this {
    this.currentValue = 0;
    return this;
  }

  value(): number {
    return this.currentValue;
  }
}
