/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.
  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(args) {
  this.createdAt = args.createdAt;
  this.name = args.name;
  this.dimensions = args.dimensions;
}
GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(args) {
  GameObject.call(this, args);
  this.healthPoints = args.healthPoints;
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid(args){
  CharacterStats.call(this, args);
  this.team = args.team;
  this.weapons = args.weapons;
  this.language = args.language;
} 
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:
/* const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
}); */

/* const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
}); */

/* const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
}); */

// console.log(mage.createdAt);
// console.log(archer.dimensions);
// console.log(swordsman.healthPoints);
// console.log(mage.name);
// console.log(swordsman.team);
// console.log(mage.weapons);
// console.log(archer.language);
// console.log(archer.greet());
// console.log(mage.takeDamage());
// console.log(swordsman.destroy());


// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!
function ClassUpgrade(args) {
  Humanoid.call(this, args);
  this.alignment = args.alignment;
  this.damage = args.damage;
  this.defense = args.defense;
}
ClassUpgrade.prototype = Object.create(Humanoid.prototype);
ClassUpgrade.prototype.attack = function(args) {
  args.healthPoints -= (this.damage - args.defense);
  return `${this.name} attacks ${args.name}!\n
  ${args.takeDamage()}\n
  ${args.name} is now at ${args.healthPoints} health.`;
}

function Villain(args) {
  ClassUpgrade.call(this, args);
  this.alignment = `Evil`;
}
Villain.prototype = Object.create(ClassUpgrade.prototype);
Villain.prototype.speak = function() {
  if (this.language === `Common Tongue`) { return `${this.name} yells "PREPARE YOURSELF! I WILL DESTROY YOU!"`; }
  else { return `${this.name} yells something in ${this.language}! Although you weren't able to understand it, you get the feeling it wasn't something good.`; }
}

function Hero(args) {
  ClassUpgrade.call(this, args);
  this.alignment = `Good`;
}
Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.attack = function(args) {
  if(args.alignment===`Evil` && this.damage>args.defense) { 
    args.healthPoints -= (this.damage - args.defense);
    return `${this.name} attacks ${args.name}!\n
    ${args.takeDamage()}\n
    ${args.name} is now at ${args.healthPoints} health.`;
  }
  else if (this.alignment.damage<=args.defense) {
    return `${this.name} is too scared to move.`;
  }
  else {
    return `I refuse to attack anyone who isn't evil!`;
  }
}
Hero.prototype.speak = function() {
  if (this.language === `Common Tongue`) { return `${this.name} yells "JUSTICE WILL ALWAYS PREVAIL!"`; }
  else { return `${this.name} yells something in ${this.language}! Although you weren't able to understand it, you get the feeling ${this.name} is good and you have nothing to fear.`; }
}

const dwarfKnight = new Hero({
  createdAt: new Date(),
  dimensions: { length: 2, width: 2, height: 3, },
  healthPoints: 20, damage: 5, defense: 5,
  name: 'Hajime', team: 'Dwarven Guard', language: 'Common Tongue',
  weapons: [ 'Bow', 'Short Sword', ],
});

const goblin = new Villain({
  createdAt: new Date(),
  dimensions: { length: 1, width: 1, height: 3, },
  healthPoints: 15, damage: 8, defense: 1,
  name: 'Skrull', team: 'Goblin Army', language: 'Goblinese',
  weapons: [ 'Dagger', ],
});

const battle = function(p1, p2) {
  this.i = 0;
  console.log(
    p1.greet(),`\n`, p2.greet(), `\n`,
    `...There is a brief pause as tension suddenly escalates!\n`,
    p1.speak(), `\n`, p2.speak()
  );
  do {
    this.i++
    console.log(`ROUND ${this.i}! FIGHT!\n`, p1.attack(p2), `\n`, p2.attack(p1));
    if (p1.healthPoints<=0) { p1.destroy(); }
    if (p2.healthPoints<=0) { p2.destroy(); }
  } while (p1.healthPoints>0 && p2.healthPoints>0);
  if(p1.healthPoints>0 && p2.healthPoints>0) { console.log(`DRAW!`); }
  else if(p1.healthPoints<=0) { console.log(`${p2.name} WINS!`); }
  else if(p2.healthPoints<=0) { console.log(`${p1.name} WINS!`); }
}

battle(dwarfKnight, goblin);