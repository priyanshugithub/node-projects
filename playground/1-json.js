const fs =  require('fs')
/*const book = {
    title : 'Ego is the enemy' ,
    author : 'Ryan Holiday'
}

const bookjson = JSON.stringify(book)
//console.log(bookjson)
fs.writeFileSync('1-json.json', bookjson)
//const parseddata = JSON.parse(bookjson)
//console.log(parseddata)
*/
const databuffer = fs.readFileSync('1-json.json')
const dataJSON = databuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)