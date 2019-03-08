const express = require('express')
const app = express()

const hostname = '0.0.0.0'   // set constants
const port = 3002

app.get('/', function (req, res) {
  res.send('Welcome home!')
})

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/big',  (req, res) =>{
  res.send('<h1>Hello World!</h1>')
})

app.get('/greeting/:id',  (req, res) =>{
  res.send('<h2> Hello! The given parameter id was ' +req.params.id+'</h2>'+
  '<br> <h2> The given id multiplied by 100 gives ' + req.params.id*100+'</h2>'+
  '<br> <h2> The given id square value gives ' + req.params.id*req.params.id+'</h2>'+
  '<br> <h2> The given id cube value gives ' + req.params.id*req.params.id*req.params.id+'</h2>'
 )
})

app.get('/yo/:buddy',  (req, res) =>{
  res.send('<h1>Yo, ' + req.params.buddy + '!</h1>')
})

app.use(express.static('public'));

app.get('/images/background.jpg', function (req, res) {
   res.send(' ')
})

// handle non-existant routes
app.use((req, res, next) => {
  res.status(404).send('status 404 - that page was not found');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}/`)
  console.log('Hit CTRL-C CTRL-C to stop\n')
})

