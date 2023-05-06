const counter = {
  value: 0,
  increment(value) {
    this.value += value;
  },
  decriment(value) {
    this.value -= value;
  },
};

const updateCounter = function (value, operation) {
  operation(value);
};

console.log(updateCounter(10, counter.increment.bind(counter)));
console.log(updateCounter(5, counter.decriment.bind(counter)));
console.log(counter);

// const showThis = function () {
//   console.log('showThis -> this', this);
// };

// const objA = {
//   a: 5,
//   b: 10,
// };

// showThis.call(objA);
// showThis.apply(objA, [1, 5, 11, 3]);

// const changeColor = function (color) {
//   console.log('changeColor -> this', this);
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// const sweater = {
//   color: 'green',
// };

// changeColor.call(hat, 'orange');
// console.log(hat);

// changeColor.call(sweater, 'blue');
// changeColor.apply(sweater, ['green']);
// console.log(sweater);

// const changeHatColor = changeColor.bind(hat);
// // console.log(changeHatColor());
