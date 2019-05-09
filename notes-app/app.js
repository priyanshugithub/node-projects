const validator = require('chalk')
const notes = require('./notes.js')

const command = process.argv[2]

if(command === 'add') {
    console.log('Adding note')
}