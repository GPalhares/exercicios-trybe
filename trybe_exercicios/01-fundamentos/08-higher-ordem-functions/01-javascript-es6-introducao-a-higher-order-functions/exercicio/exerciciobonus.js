const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const calculaDanoDragon = () => {
  const danoDragonMin = 15;
  const danoDragonMax = Math.floor(Math.random() * dragon.strength);
  const danoDragon =
    danoDragonMax > danoDragonMin ? danoDragonMax : danoDragonMin;

  return danoDragon;
};
console.log(calculaDanoDragon());

const calculaDanoWarrior = () => {
  const danoWarrior = Math.floor(
    Math.random() * (warrior.strength - warrior.strength * warrior.weaponDmg) +
      warrior.strength
  );
  return danoWarrior;
};
console.log(calculaDanoWarrior());
