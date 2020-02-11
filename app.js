const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generatePassword = require('./generate_password')
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const suggestPassword = generatePassword(options)

  res.render('index', ({ password: suggestPassword, options: options }))
})

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})