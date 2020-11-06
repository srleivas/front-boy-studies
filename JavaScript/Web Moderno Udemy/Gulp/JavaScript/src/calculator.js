const Calculator = {
  _result: 0,
  get result() {
    return this._result;
  },
  add(a, b = 0) {
    const add = a + b;
    this._result += add;
    return this;
  },
  power(a, b) {
    const power = a ** b;
    this._result += power;
    return this;
  },
  reset() {
    this._result = 0
    return this;
  },
  log() {
    console.log(this._result);
  }
}