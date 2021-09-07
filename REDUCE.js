// RREDUCE
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

// Get the totlal mass of all characters 
const totalmass = characters.reduce((acc, cur) => {
    return acc + cur.mass;
}, 0);
console.log("Total mass is :", totalmass);

const totalmass2 = characters.reduce((acc, cur) => acc + cur.mass, 0);
console.log("Total mass is :", totalmass2);

// Get the total height of all characters 
const totalheight = characters.reduce((acc, cur) => {
    return acc + cur.height
}, 0)
console.log("Total height is :", totalheight);

//  total number of characters by eye color
const characterByEyeColor = characters.reduce((acc, cur) => {
    const color = cur.eye_color;
    if (acc[color]) {
        acc[color]++;
    } else {
        acc[color] = 1
    }

    return acc;
}, {})
console.log(characterByEyeColor)


//Get the total number of characters i all the character names
const totalCharactersInName = characters.reduce((acc, cur) => acc + cur.name.length, 0);
console.log(totalCharactersInName)

