const express = require('express')
const app = express()

const hostname = '0.0.0.0'   // set constants
const port = 3002

app.get('/', function (req, res) {
  console.log('POST request')
  res.send('Welcome home!')
})

app.use(function (req, res, next) {
  console.log('logged')
  next()
})
app.get('/hello', (req, res) => {
  console.log('GET request')
  res.send('Hello World!')
})

app.get('/big',  (req, res) =>{
  console.log('GET request')
  res.send('<h1>Hello World!</h1>')
})
app.get('/small') (req, res) =>{
  console.log('GET request')
  res.send('<h4>chatur</h4>')
})

app.get('/greeting/:id',  (req, res) =>{
  console.log('GET request')
  res.send('<h2> Hello! The given parameter id was ' +req.params.id+'</h2>'+
  '<br> <h2> The given id multiplied by 58 gives ' + req.params.id*58+'</h2>'+
  '<br> <h2> The given id square value gives ' + req.params.id*req.params.id+'</h2>'+
  '<br> <h2> The given id cube value gives ' + req.params.id*req.params.id*req.params.id+'</h2>'
 )
})

app.get('/yo/:buddy',  (req, res) =>{
  console.log('GET request')
  res.send('<h1>Yo, ' + req.params.buddy + '!</h1>')
})

app.use(express.static('public'));
console.log('GET request')
app.get('/img_0305_.jpg/background.img', function (req, res) {
   res.send(' ')
})

// handle non-existant routes
app.use((req, res, next) => {
  res.status(500).send('status 500 - that Internal Server Error');
})

app.use((req, res, next) => {
  res.status(404).send('status 404 - that page was not found');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}/`)
  console.log('Hit CTRL-C CTRL-C to stop\n')
})

