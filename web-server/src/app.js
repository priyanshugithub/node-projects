const path = require('path')
const express =  require('express')

const app = express()
const publicDirectory = path.join(__dirname, '../public')
const viewsPath =  path.join(__dirname, '../templates')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use(express.static(publicDirectory))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Priyanshu Tyagi'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        name: 'Priyanshu Tyagi'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'HELP!!!'
    })
})
app.get('/weather', (req, res) => {
    res.send ({
        forecast: 'Forecast',
        location: 'Location'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000!')
})