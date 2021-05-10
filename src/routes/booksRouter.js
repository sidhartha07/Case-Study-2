const express = require('express');
const booksRouter = express.Router();

const Bookdata = require('../model/bookData');

function router(nav){
    // var books = [
    //     {
    //         title: 'Tom and Jerry',
    //         author: 'Joseph Barbera',
    //         genre: 'Cartoon',
    //         Image: "tom.jpg"
    //     },
    //     {
    //         title: 'Harry Potter',
    //         author: 'J K Rowling',
    //         genre: 'Fantasy',
    //         Image: "harry.jpg"
    //     },
    //     {
    //         title: 'Paathumayude Aadu',
    //         author: 'Basheer',
    //         genre: 'Drama',
    //         Image: "basheer.jpg"
    //     }
    // ];

    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",
            {
                nav,
                title:'Books',
                books
            });
        });
    });

    booksRouter.get('/:id',function(req,res){
        Bookdata.findOne({_id: req.params.id})
        .then(function(book){
            res.render("book",
            {
                nav,
                title:'Book',
                book
            });
        })
    });

    return booksRouter;
}

module.exports = router;