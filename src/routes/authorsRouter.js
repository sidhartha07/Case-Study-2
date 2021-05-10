const express = require('express');
const authorsRouter = express.Router();

function router(nav){
    var authors = [
        {
            name: 'J K Rowling',
            novels: 'Harry Potter, fantastic Beasts etc..',
            Image: "/jkrowling.jpg"
        },
        {
            name: 'Arthur Conan Doyle',
            novels: 'Sherlock Holmes, The Adventure of the Final Problem etc..',
            Image: "/conandoyle.jpg"
        },
        {
            name: 'Stephen King',
            novels: 'The Green Mile, The Stand etc..',
            Image: "/stephen.jpg"
        }
    ];

    authorsRouter.get('/',function(req,res){
        res.render("authors",
        {
            nav,
            title:'Authors',
            authors
        });
    });

    authorsRouter.get('/:id',function(req,res){
        res.render("author",
        {
            nav,
            title:'Author',
            author: authors[req.params.id]
        });
    });

    return authorsRouter;
}

module.exports = router;