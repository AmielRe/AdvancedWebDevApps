const express = require('express');
const app = express();
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
const http = require('http').Server(app);
require('dotenv/config');

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))

// Routers
const productsRoute = require('./routes/products')

app.use('/products', productsRoute)

mongoose.connect(`mongodb${process.env.prod}://${process.env.dbUser}:${process.env.dbPass}@${process.env.dbHost}`)
http.listen(process.env.PORT);