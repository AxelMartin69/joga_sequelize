const express = require("express");
const { getAllArticles } = require("./controllers/article");
const app = express()
const port = 3000

// parse requests of content-type - application/json
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//connect to database
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

// testing connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Connected to database');
    })
    .catch(err => {
        console.log('Unable to connect to database:', err);
    })

// using routes and controllers
const articleRouter = require('./routes/article')
app.use('/', articleRouter)
app.use('/article', articleRouter)


// listen requests
app.listen(port, () => {
    console.log(`Now listening on port http://localhost:${port}`);
})