const express = require('express')
const { route } = require('./routes')
const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', route)

const routes = require('./routes')
app.use(routes)

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`)
})