// Last time I was being dumb with the .map() thing it's just iterating like anything else so if you alter the object it's going to change the object. It's only what get's RETURNED that will be a new array.

// Window Binding (default)

// The window object is supported by all browsers. It represents the browser's window.

// All global JavaScript objects, functions, and variables automatically become members of the window object.

// function logger(param) {
//   console.log(this)
// }
// logger();


// Implicit Binding (left of the dot)

// const hobbit = {
//   name: 'Samwise',
//   age: 47,
//   food: 'taters',
//   cook () {
//     return `${this.name} loves to cook ${this.food}`
//   },
//   friend: {
//     name: 'Frodo',
//     speak() {
//       return `Hello ${this.name}`
//     }
//   }
// }

// console.log(hobbit.friend.speak())

// Explicit Binding (call, apply, bind)

const cam = {
    name: 'Cam'
  }
  
  // const skills = ['HTML', 'CSS', 'JS']
  
  // function introduce(skills1, skills2, skills3) {
  //   console.log(`Hello! my name is: ${this.name} and these are my skills: ${skills1}, ${skills2}, and ${skills3}`)
  // }
  
  // introduce.call(cam, skills[0], skills[1], skills[2])
  
  // introduce.apply(cam, skills)
  
  // const introduceCam = introduce.bind(cam, ...skills);
  
  // introduceCam();
  
  // const videoGames = ['Sekiro', 'Final Fantasy XIV', 'Mortal Kombat']
  
  // function myFavoriteGames (game1, game2, game3) {
  //   console.log(`My name is ${this.name} and my favorite games are ${game1}, ${game2}, and ${game3}`)
  // }
  
  // myFavoriteGames.call(cam, videoGames[0], videoGames[1], videoGames[2])
  // myFavoriteGames.apply(cam, videoGames)
  
  // Constructor Functions
  // function Animal(food) {
  //   this.food = food
  //   this.color = 'white and brown'
  //   this.eat = function () {
  //     console.log(`This animal likes to eat ${this.food}`)
  //   }
  // }
  
  // const zebra = new Animal('grass')
  // console.log(zebra)
  // New Binding (contructor function) {}
  // Binds to the NEW object
  
  
  // PROTOTYPES
  
  // function Person(first, last, age) {
  //   this.firstName = first;
  //   this.lastName = last;
  //   this.age = age;
  // }
  
  // Person.prototype.description = function () {
  //   console.log(`${this.firstName} ${this.lastName} is ${this.age} years old`)
  // }
  
  // const myWife = new Person('Jodi', 'Pope', 30)
  // const myself = new Person('Cameron', 'Pope', 31)
  
  // myWife.description()
  
  function Animal(name) {
    this.name = name
  }
  
  Animal.prototype.getName = function () {
    return this.name
  }
  
  const emu = new Animal('emu')
  
  function Mammal(name, hasHair) {
    Animal.call(this, name)
    this.hasHair = hasHair
  }
  // CREATES A LINK FOR METHODS
  Mammal.prototype = Object.create(Animal.prototype)
  
  Mammal.prototype.getHasHair = function () {
    return this.hasHair
  }
  
  const whale = new Mammal('Whale', true)
  
  function Dog(name, breed) {
    Mammal.call(this, name, true)
    this.breed = breed
  }
  
  Dog.prototype = Object.create(Mammal.prototype)
  
  Dog.prototype.getBreed = function () {
    return this.breed
  }
  
  const dog = new Dog('fido', 'lab')
  
  console.log(dog)