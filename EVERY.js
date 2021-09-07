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


// checks if all items in the array with eye_color === 'blue'
const allBlueEyes = characters.every((character) => {
    return character.eye_color === 'blue';
})

console.log(allBlueEyes)

const allMassMoreThan40 = characters.every((character) => {
    return character.mass > 40;
})

console.log(allMassMoreThan40)

const CheckEveryCharacter = characters.every((character) => {
    return character.gender === 'male'
})

console.log(CheckEveryCharacter)