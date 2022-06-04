

const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()


const app = express()

app.use(cors())

app.get('/', (req, res) => {
  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').
  then( results => {
     res.json(results.data);
  } )
})

app.get('/users', (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/albums')
    .then(result => {
        res.json(result.data);
    })
})



app.get('/arrs', (req, res) => {
    let x = 5;
    let y = 4;
    if ( x + y === 10 ) {
      res.send('This is 10')
    } else {
      res.send('This is less 10')
    }
})



app.listen(process.env.PORT || PORT)
