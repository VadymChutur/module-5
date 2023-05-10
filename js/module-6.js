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

class Car1 {
  constructor({ brand, model, price } = {}) {
    this._brand = brand;
    this._model = model;
    this._price = price;
  }

  //   changePrice(newPrice) {
  //     this.price = newPrice;
  //   }

  //   setModel(newModel) {
  //     this.model = newModel;
  //   }

  //   getModel() {
  //     return this.model;
  //   }
  get model() {
    return this._model;
  }

  set model(newModel) {
    this._model = newModel;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  get brand() {
    return this._brand;
  }

  set brand(newBrand) {
    this._brand = newBrand;
  }
}

const carInstasnce = new Car1({
  brand: 'Audi',
  model: 'Q3',
  price: 35000,
});

console.log(carInstasnce);

// carInstasnce.setModel('Q4');
carInstasnce.model = 'X6';
carInstasnce.brand = 'BMW';
carInstasnce.price = 75000;

console.log(carInstasnce);
