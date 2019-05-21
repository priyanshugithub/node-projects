//CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongo.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        console.log('Unable to connect to database!')
    }

    console.log('Connected correctly!')
})