const request = require('request')

const url = 'https://api.darksky.net/forecast/ddb7333ef809753d00ef99196470edcf/37.8267,-122.4233'

request({ url : url, json : true}, (error, response) => {
    console.log(response.body.currently)
})