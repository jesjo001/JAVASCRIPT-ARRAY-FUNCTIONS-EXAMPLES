/*SOME */
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
/*SOME */

// Is there at least one male character in
const oneMaleCharacter = characters.some((character) => character.gender === 'male')
console.log(oneMaleCharacter)

// Is there at least one character with ble eyes

const aBlueEyeExists = characters.some((character) => character.eye_color === 'blue')
console.log(aBlueEyeExists)