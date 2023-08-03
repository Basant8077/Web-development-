const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')

connectToMongo();

const app = express()
const port = 5000
app.use(cors())

//midewares
app.use(express.json())

//available routes
app.use('/api/auth',require('./routes/auth'));

app.use('/api/notes',require('./routes/notes'));

app.get('/', (req, res) => {
  res.send('Hello Basant joshi')
})

app.listen(port, () => {
  console.log(`INotes backend listening at http://localhost:${port}`)
})