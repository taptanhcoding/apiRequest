const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

const route = require('./routes')
const db = require('./config/db')

app.use(express.static(path.join(__dirname, 'public/')));

app.use(morgan('combined')) 

app.engine('hbs',handlebars.engine({extname: 'hbs'}) )

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname,'resource','views'));
console.log(__dirname)


route(app)  

//Connect db

db.connect()

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})