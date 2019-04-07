/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - All global items are a part of the base window object. Thus a "this" reference would actually reference the Window object which would be their parent.
* 2. Implicit Binding - "this" references whatever item is "left of the dot". In other words if you call a method you would use object.method(). The object to the left of the '.' is what would actually be referenced.
* 3. New Binding - "this" references whatever item you are creating using the new keyword.
* 4. Explicit Binding - "this" references whatever you tell it to using .call() .apply() or .bind().
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(`WINDOW BINDING EXAMPLE:\n`, this.name);


// Principle 2
// code example for Implicit Binding
const parrot = {
    name: `Polly`,
    favWord: `cracker`,
    speak (word) {
        if(word) return word;
        else return `SQUAWK!!! ${this.name} wants a ${this.favWord}!`;
    }
};
console.log(`IMPLICIT BINDING EXAMPLE:\n`, parrot.speak(), `\n`, parrot.speak(`Bird!`));


// Principle 3
// code example for New Binding
function Building(purpose, buildYear) {
    this.purpose = purpose;
    this.buildYear = buildYear;
    this.info = function() {
        return `This building was built for ${this.purpose} and its construction was finished on the year of ${this.buildYear}.`;
    }
};
const library = new Building(`borrowing and reading books`, 1989);
console.log(`NEW BINDING EXAMPLE:\n`, library.info());


// Principle 4
// code example for Explicit Binding
const person = { firstName: `Eric`, lastName: `SarragaLugo`, age: 29 };
const favGames = [`Dark Souls`, `FF VIII`, `FF Tactics`, `The Last of Us`];
const languages = [`English`, `Spanish`];
const dev = [`HTML`, `CSS`, `JavaScript`];
const info = [...favGames, ...languages, ...dev];

function shortBio(favGame1, favGame2, favGame3, favGame4, lang1, lang2, dev1, dev2, dev3) {
    one = `Hi I'm ${this.firstName} ${this.lastName}!\n`;
    two = `I'm ${this.age} years old.\n`;
    three = `My favorite games are ${favGame1}, ${favGame2}, ${favGame3}, and ${favGame4}.\n`;
    four = `I can speak, read, and write ${lang1} and ${lang2} fluently.\n`;
    five = `I love working with and learning more about ${dev1}, ${dev2}, and ${dev3}.\n`;
    six = `Nice to make your aquaintance!`;
    result = ``.concat(one, two, three, four, five, six);
    return result;
}

const bioCall = shortBio.call(person, favGames[0], favGames[1], favGames[2], favGames[3], languages[0], languages[1], dev[0], dev[1], dev[2]);
console.log(`EXPLICIT BINDING EXAMPLE [ .call(individual) ]:\n`, bioCall);
const bioCall2 = shortBio.call(person, ...favGames, ...languages, ...dev);
console.log(`EXPLICIT BINDING EXAMPLE [ .call(spread) ]:\n`, bioCall2);
const bioApply = shortBio.apply(person, info);
console.log(`EXPLICIT BINDING EXAMPLE [ .apply() ]:\n`, bioApply);

const eric = {
    firstName: `Eric`, lastName: `SarragaLugo`, age: 29,
    speak: function() {
        return `Hi I'm ${this.firstName} ${this.lastName}! I'm ${this.age} years old.`;
    }
}
const dumbEric = eric.speak;
console.log(`EXPLICIT BINDING EXAMPLE [ .bind(unbound) ]:\n`, dumbEric());
const smartEric = eric.speak.bind(eric);
console.log(`EXPLICIT BINDING EXAMPLE [ .bind(bound) ]:\n`, smartEric());