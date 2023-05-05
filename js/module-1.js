const counter = {
  value: 0,
  increment(value) {
    this.value += value;
  },
  decriment(value) {
    this.value += value;
  },
};

const updateCounter = function (value, operation) {
  operation(value);
};

// console.log(updateCounter(10, counter.increment));
// console.log(updateCounter(5, counter.decriment));
