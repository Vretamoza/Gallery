const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(express.json())

app.set('port', process.env.PORT || 8080)

app.use(cors())

mongoose.connect(process.env.MONGODB, { useNewUrlParser: true }).then(() => {
  console.log('Conectado a MongoDB')}).catch((err) => {
  console.log('Error al conectar a MongoDB', err)
})

app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`)
});
