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
    return data 
},2000)
}

const data = geocode('Philadelphia')
console.log(data)