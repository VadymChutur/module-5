// const Car = function ({ brand, model, price } = {}) {
//   //   const { brand, model, price } = config;

//   this.brand = brand;
//   this.model = model;
//   this.price = price;

//   console.log(this.__proto__);
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// const myCar = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 35000,
// });

// myCar.changePrice(40000);

// console.log(myCar);

// const myCar2 = new Car({
//   brand: 'BMW',
//   model: 'X6',
//   price: 50000,
// });

// console.log(myCar2);

// const myCar3 = new Car({
//   brand: 'Audi',
//   model: 'A6',
//   price: 65000,
// });

// console.log(myCar3);

const User = function ({ email, password } = {}) {
  this.email = email;
  this.password = password;
};

User.prototype.changeEmail = function (newEmail) {
  this.email = newEmail;
};

const mango = new User({
  email: 'mango@gmail.com',
  password: 123131414,
});
mango.changeEmail('newMango@gmail.com');
console.log(mango);

User.logInfo = function (obj) {
  console.log(obj);
};

User.logInfo(mango);

console.dir(User);
