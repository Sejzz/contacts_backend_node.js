const express = require('express');
const body_parser = require('body-parser')
const userRoute = require('./routes/user.route')
const contactsRoute = require('./routes/contacts.route')

const app = express()

app.use(body_parser.json());

app.use('/', userRoute);
app.use('/', contactsRoute);

module.exports = app