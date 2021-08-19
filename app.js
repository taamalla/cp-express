const express = require('express');

// const mongoose = require('mangoose')
const app = express();

// const dbURI = 'mongodb+srv://hamza:test1234@cluster0.74uds.mongodb.net/node-proj?retryWrites=true&w=majority'
// mongoose.connect(dbURI)
// view engine
app.set('view engine', 'ejs');

// listening for request
app.listen(3000);

// middleware and static files

app.use(express.static('public'));

app.get('/', (req, res) => {
    const blogs= [
        {title: 'hamza finds eggs', snippet: 'learn node js and become a ninja'},
        {title: 'khaled finds stars', snippet: 'learn node js and become a ninja'},
        {title: 'how to defeat browser', snippet: 'learn node js and become a ninja'}
    ];
    // res.send('<p>home page</p>');
    // res.sendFile('./views/index.html',{root : __dirname})
    res.render('index', {title: 'Home', blogs});
});

app.get('/about', (req, res) => {
    // res.send('<p>about page</p>');
    // res.sendFile('./views/about.html', {root : __dirname})
    res.render('about', {title: 'about'});
});

app.get('/blogs/create', (req, res) =>{
    res.render('create', {title: 'create a new blog'} );
});
// redirects
// app.get('/about-me', (req, res) =>{
//     res.redirect('/about');
// });

// 404
app.use((req, res)=>{
    // res.status(404).sendFile('./views/404.html', {root : __dirname});
    res.status(404).render('404', {title: '404'});
})