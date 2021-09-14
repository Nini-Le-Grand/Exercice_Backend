const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("test 1");
    next();
});

app.use((req, res, next) => {
    res.status(201);
    next();
})

app.use((req, res, next) => {
    res.json({ message: 'Votre requête à bien été reçu. For sure he!'});
    next();
});

app.use((req, res, next) => {
    console.log('test 2');
})



module.exports = app;