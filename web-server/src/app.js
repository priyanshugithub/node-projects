const path = require('path')
const express =  require('express')

const app = express()
const publicDirectory = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectory))

app.get('', (req, res) => {
    res.render('index')
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