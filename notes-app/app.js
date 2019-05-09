const chalk = require('chalk')
const yargs =  require('yargs')
const notes = require('./notes.js')

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: function () {
        console.log('Removing a new note!')
    }
})

//Create Add Command
yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title : {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler : function (argv) {
        console.log('Adding a note!', argv)
    }
})

//add, remove, read, list

console.log(yargs.argv)