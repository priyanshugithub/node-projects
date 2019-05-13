setTimeout(() => {
    console.log('Two seconds are up!')
},2000)

const names = ['James', 'Charles', 'Drew', 'Scott']
const shortNames = names.filter((name) => {
    return name.length <= 4
})

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
        latitude : 0,
        longtitude : 0
    }
    callback(data) 
    }, 2000)
}

geocode('Philadelphia', (data) => {
    console.log(data)
})

// Creating add function that accepts correct arguments and use setTimeout to simulate a 2 second delay
//After 2 seconds are up call the callback function with sum

const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}

add (1, 4, (sum) => {
    console.log(sum)
})