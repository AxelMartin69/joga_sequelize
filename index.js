const express = require("express")
const app = express()
const port = 3000

// parse requests of content-type - application/json
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get('/', (req, res)  => {
    res.json({ message: 'Welcome to sequelize application'})
});

// listen requests
app.listen(port, () => {
    console.log(`Now listening on port http://localhost:${port}`);
})