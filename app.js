const express = require("express");
const path = require("path");
const app = express();
const port = 80;

app.use('/static', express.static('static'))
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    const params = { }
    res.render('home.pug', params);
});

app.get('/about', (req, res) => {
    const params = { }
    res.render('about.pug', params);
});

app.get('/news', (req, res) => {
    const params = { }
    res.render('news.pug', params);
});

app.get('/lessons', (req, res) => {
    const params = { }
    res.render('lessons.pug', params);
});

app.get('/contact', (req, res) => {
    const params = { }
    res.render('contact.pug', params);
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});