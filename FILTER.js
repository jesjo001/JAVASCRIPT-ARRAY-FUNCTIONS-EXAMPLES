const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];


//Get items with mass > 100 
const greaterThan100 = characters.filter((character) => {
    return character.mass > 100;
})

console.log(greaterThan100)

//Get character with height < 200  
const characterShorterThan200 = characters.filter((character) => {
    return character.height < 200;
})

console.log("Characters shorter than 200")
console.log(characterShorterThan200)

//Get all female characters

const femaleCharacters = characters.filter((character) =>
    character.gender === 'female'
)

console.log("female characters")
console.log(femaleCharacters)