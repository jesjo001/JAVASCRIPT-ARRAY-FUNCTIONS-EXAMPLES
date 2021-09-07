const intersection = (array1, array2, array3, array4) => {

    //declare final array as empty 
    let finalArray = []

    //map through array and push comon items into the final array
    const commomItems = array1.map((item) => {
        if (array2.includes(item) && array3.includes(item) && array4.includes(item)) {
            finalArray.push(item)
        }
    })

    // Display the common items
    console.log("Common items are :", finalArray)

}

intersection([1, 5, 9],
    [1, 3, 5],
    [1, 5, 8],
    [100, 150, 300, 500, 1, 5]);