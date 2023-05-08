const CounterPlugin = function ({
  rootSelector,
  initialValue = 0,
  step = 1,
} = {}) {
  this._value = initialValue;
  this._step = step;

  this._refs = this._getRefs(rootSelector);

  this._bindEvents();
  this._udateValueUI();
};

CounterPlugin.prototype._getRefs = function (rootSelector) {
  console.log(rootSelector);

  const refs = {};
  refs.container = document.querySelector(rootSelector);
  refs.incrementBtn = refs.container.querySelector('[data-increment]');
  refs.decrementBtn = refs.container.querySelector('[data-decrement]');
  refs.value = refs.container.querySelector('[data-value]');
  //   console.log(refs.container);
  //   console.log(refs.incrementBtn);

  return refs;
};

CounterPlugin.prototype._bindEvents = function () {
  this._refs.incrementBtn.addEventListener('click', () => {
    // console.log(this);
    this.increment();
    this._udateValueUI();
  });

  this._refs.decrementBtn.addEventListener('click', () => {
    // console.log(this);
    this.decrement();
    this._udateValueUI();
  });
};

CounterPlugin.prototype._udateValueUI = function () {
  this._refs.value.textContent = this._value;
};

CounterPlugin.prototype.increment = function () {
  this._value += this._step;
};

CounterPlugin.prototype.decrement = function () {
  this._value -= this._step;
};

const counter1 = new CounterPlugin({
  rootSelector: '#counter-1',
  step: 10,
  initialValue: 100,
});
// console.log(counter1);

const counter2 = new CounterPlugin({ rootSelector: '#counter-2', step: 2 });
// console.log(counter2);
