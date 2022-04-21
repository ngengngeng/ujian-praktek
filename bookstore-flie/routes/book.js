const { Router } = require('express')
const router = Router()

const BookController = require('./controllers/BookController')

router.get('/', BookController.getBook)
router.get('/add', BookController.addFormBook)
router.post('/add', BookController.addBook)
router.get('/edit', BookController.editFromBook)
router.post('/edit', BookController.editBook)
router.get('/delete', BookController.deleteBook)

module.exports = router