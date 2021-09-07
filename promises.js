
//resolve senerio
const onFulfillement = (result) => {
    console.log(result)
    console.log("Fulfillment func has finished executoion")
}

const onRejection = (error) => {
    console.log(error)
    console.log("Rejection func has finished execution")
}

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // Foom teuck found
        //change status from peing to fulfiled

        resolve(" Completed Sucessfully");
    }, 3000)
})

const newProm = new Promise((resolve, reject) => {
    setTimeout(() => {

        reject("Failed")

    }, 5000) //
})

promise.then(onFulfillement)
promise.then(onRejection)

