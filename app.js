const express = require('express')
const app = express();
const postRouter = require('./app/routes/postRouter')
const bodyParser = require('body-parser')

app.set("view engine", "ejs");
// app.set("views", "./app/views")
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json());
app.use('/posts', postRouter);

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});



app.listen(3000, () => console.log('Porta escutando na 3000...'));