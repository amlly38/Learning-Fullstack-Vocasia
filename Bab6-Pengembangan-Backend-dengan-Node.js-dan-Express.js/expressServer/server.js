import express from 'express'
//import bodyParser from 'body-parser'
const app = express()
const port = 3000

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const headerMiddleware = function (req, res, next) {
  try {
    console.log(req.headers);
    next();
  } catch (error) {
    throw error;
  }
}

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/contact', headerMiddleware, (req, res) => {
  res.send('<h1>Contact Me</h1>')
})

app.post('/submit', (req, res) => {
  console.log(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})