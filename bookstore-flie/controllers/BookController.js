const { Book } = require('../models')

class BookController {
    static getBook (req, res){
    Book.findAll()
    .then(book=>{
        res.json(book)
    })
    .catch(err =>{
        res.json(err)
    })
 }

 static addFormBook(req, res){
     res.render('addBook.ejs');
 }

 static addBook(req, res){
      const {id, title, author, release_date, pages, genre} = req.body
      Book.create({
          id,
          title,
          author,
          release_date,
          pages,
          genre
      })
      .then(result => {
          res.redirect('/book')
      })
      
      .catch(err =>{
          res.json(err)
      })
 }

 static editFormBook(req, res){
     const id = req.params.id;
     Book.findOne({
         where : { id }
     })
     .then(result=>{
         res.render('editBook.ejs', { book: result})
     })
     .catch(err=>{
         res.json(err)
     })
   }

     static editBook(req, res) {
        const id = req.params.id;
        const { task,status } = req.body;
        
        Book.update({
            id,
            title

        }, {
            where: { id }
        })
            .then(result => {
                if (result[0] === 1) {
                    res.redirect('/Books')
                } else {
                    res.json('Update not done!')
                }
                
            })
            .catch(err => {
                res.json(err)
            })
    }
 

 static deleteBook(req, res){
      const id = req.params.id;
      Book.destroy({
          where : { id }
      })
      then((result) => {
        if(result === 1){
            res.redirect('/books')
        }else{
            throw { message : "Id is not found!"}
            
        }
      
    })
    .catch(err => {
        res.json(err)
    })
 }

}

module.exports = BookController;