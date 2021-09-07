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



//Get all names  in the array and turn into another array
const nameArray = characters.map((character) => {
    return character.name
})

console.log(nameArray)

//Get array of all height 
const heightArray = characters.map((character) => {
    return character.height
})

console.log("Height array is ")
console.log(heightArray)

//Get an array of object containing the names and height od each character 

const nameHeight = characters.map((character) => {
    return {
        name: character.name,
        height: character.height
    }
})

console.log("name and height array")
console.log(nameHeight);


//Get all the array of the firstname fro the name of each character 

const firstName = characters.map((character) => { return character.name.split(' ')[0] })

console.log("firstName array")
console.log(firstName)

//Get all the array of the lastname fro the name of each character 

const lastName = characters.map((character) => { return character.name.split(' ')[1] })
console.log("lastName array")
console.log(lastName)