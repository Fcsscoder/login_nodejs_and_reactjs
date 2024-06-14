const express = require('express');
const router = require('./routes')
const cors = require('cors');
const app = express()

const port = 3000

app.use(express.json())
app.use(cors())
app.use(router)

app.get('/', (req, res) => {
    res.send('Opa')
})

app.listen(port)



