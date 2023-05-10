class Hero {
  constructor({ name = 'Hero', xp = 0 } = {}) {
    this.name = name;
    this.xp = xp;
  }

  gainXp(amount) {
    console.log(`${this.name} recives ${amount} expiriens`);
    this.xp += amount;
  }
}

class Warrior extends Hero {
  constructor({ weapon = 'Fist', ...restProps } = {}) {
    super(restProps);

    this.weapon = weapon;
  }

  attack() {
    console.log(`${this.name} attacking with ${this.weapon}`);
  }
}

class Mage extends Hero {
  constructor({ spell = 'FireBall', ...restProps } = {}) {
    super(restProps);

    this.spell = spell;
  }

  attack() {
    console.log(`${this.name} casting ${this.spell}`);
    console.log(`${this.name} attacked with${this.spell}`);
  }
}

class Berserk extends Warrior {
  constructor({ warcry, ...restProps } = {}) {
    super(restProps);

    this.warcry = warcry;
  }

  babyRage() {
    console.log(this.warcry);
  }
}

// const mango = new Hero({ name: 'Mango', xp: 1000 });
const mango = new Warrior({ name: 'Mango', xp: 1000, weapon: 'Long Sword' });
const poly = new Mage({ name: 'Poly', xp: 2000, spell: 'Ice Sword' });
const kiwi = new Berserk({
  name: 'Kiwi',
  xp: 500,
  weapon: 'Big two handed sword',
  warcry: 'WAAAAAR',
});

console.log(poly);

console.log(mango);

mango.gainXp(1000);
poly.attack();
poly.gainXp(1000);

console.log(mango);
console.log(poly);

console.log(kiwi);
kiwi.babyRage();
kiwi.attack();
kiwi.gainXp(2000);
console.log(kiwi);
