require('dotenv').config();
const express = require('express');
const url = require('url');
const request = require('request');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// Mongoose Stuff here
const Schema = mongoose.Schema;
const User = require('./models/User');

// Import Controllers
const userController = require('./controllers/User')
console.log(userController)

const PORT = process.env.PORT || 9001
const DB_URL = process.env.MONGODB_URI;
mongoose.connect(DB_URL);

// Import the models
const app = express();
app.use(require('express-status-monitor')()); // Monitor at /status
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('user', (req, res) => userController.createUser(req, res))

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
