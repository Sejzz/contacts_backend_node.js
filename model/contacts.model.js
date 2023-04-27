const database = require('../configurations/database');
const mongoose = require('mongoose');
const UserModel = require("../model/user.model")

const { Schema } = mongoose;

const contactsSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref:UserModel.modelName
    },
    name: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    }
});

const ContactsModel = database.model('contacts', contactsSchema);

module.exports = ContactsModel