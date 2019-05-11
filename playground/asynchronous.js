console.log('starting')

setTimeout(() => {
    console.log('2 second timer')
}, 2000)

setTimeout(() => {
    console.log('0 second timer')
}, 0)
console.log('stopping')

//Output
starting
stopping
0 second timer
2 second timer

// example 2
console.log('starting')

setTimeout(() => {
    console.log('2 second timer')
}, 2000)

console.log('stopping')
//Output
starting
stopping
2 second timer