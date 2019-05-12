const request = require('request')

const url = 'https://api.darksky.net/forecast/ddb7333ef809753d00ef99196470edcf/37.8267,-122.4233?units=si'

request({ url : url, json : true}, (error, response) => {
    //console.log(response.body.currently)
    console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out there. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
})