const express = require('express');
const port = process.env.PORT || 5999;
const path = require('path');

const nav = [
    // {
    //     link:'/index',
    //     name:'Home'
    // },
    {
        link:'/books',
        name:'Books'
    },
    {
        link:'/authors',
        name:'Authors'
    },
    {
        link:'/login',
        name:'Login'
    },
    {
        link:'/signup',
        name:'Signup'
    },
    {
        link:'/adminBook',
        name:'Add Book'
    },
    {
        link:'/adminAuthor',
        name:'Add Author'
    }
];

const indexRouter = require('./src/routes/indexRouter')(nav);
const booksRouter = require('./src/routes/booksRouter')(nav);
const authorsRouter = require('./src/routes/authorsRouter')(nav);
const loginRouter = require('./src/routes/loginRouter')(nav);
const signupRouter = require('./src/routes/signupRouter')(nav);
const adminRouter = require('./src/routes/adminRouter')(nav);


const app = new express();

app.use(express.urlencoded({ extended:true}));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, './src/views'));

app.use('/', indexRouter);
app.use('/books', booksRouter);
app.use('/authors', authorsRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/adminBook', adminRouter);


app.get('/', function(req,res){
    res.render('index',
    {
        nav,
        title:'Library'
    });
});

app.listen(port);