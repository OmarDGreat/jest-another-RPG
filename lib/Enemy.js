const Character = require('./Character');
const Potion = require("./Potion");


class Enemy extends Character{
  constructor(name, weapon) {

    // call parent class constructor
    super(name);

    this.weapon = weapon;
    this.potion = new Potion();

  }

  getStats() {
    return {
      health: this.health,
      strength: this.strength,
      agility: this.agility
    };
  }

  getDescription() {
    return `${this.name} is a ${this.weapon}`;
  }

}

module.exports = Enemy;
