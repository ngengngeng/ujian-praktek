const { Router } = require('express')
const router = Router()

const BookRoute = require('./book')

router.get('/', (req, res) =>{
    res.render('index.ejs', {message : "This is a Home Page"})
})

router.use('/books', BookRoute)

module.exports = router