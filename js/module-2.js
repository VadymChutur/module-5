const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const decrimentBtn = document.querySelector('.js-decrement');
const incrementBtn = document.querySelector('.js-increment');
const valueEl = document.querySelector('.js-value');

console.log(decrimentBtn);
console.log(incrementBtn);
console.log(valueEl);

decrimentBtn.addEventListener('click', function () {
  console.log('reduse');
  counter.decrement();
  console.log(counter);

  valueEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', function () {
  console.log('incrase');
  counter.increment();
  console.log(counter);

  valueEl.textContent = counter.value;
});
