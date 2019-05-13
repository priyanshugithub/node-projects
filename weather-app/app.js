const request = require('request')

const url = 'https://api.darksky.net/forecast/ddb7333ef809753d00ef99196470edcf/37.8267,-122.423?units=si'

request({ url : url, json : true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather services!')
    } else if (response.body.error) {
        console.log('Unable to find location!')
    }


    else {
        console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out there. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
    }
    //console.log(response.body.currently)
})

//Geocoding
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/New%20York.json?access_token=pk.eyJ1IjoicHJpeWFuc2h1dHlhZ2kiLCJhIjoiY2pqNm9tcGRjMGpzZjNxbWc5cXE3ZGdwcCJ9.GcVUIBv7QXYvdlj15DuVEw'

request({ url:geocodeURL, json:true }, (error, response) => {
    if(error) {
        console.log('Unableto connect to location services!')
    }
    else if (response.body.features.length === 0) {
        console.log('unable to find location. Try another search!!')
    }

    else {
        const latitude = response.body.features[0].center[1]
        const longtitude = response.body.features[0].center[0]
        console.log(latitude, longtitude)
    }
})
