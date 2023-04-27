const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const database = require('../configurations/database');

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
});

userSchema.pre('save', async function(){
    var user = this;
     try{
      
       const salt = await bcrypt.genSalt(10);
       const hash = await bcrypt.hash(user.password, salt);
       user.password = hash
       console.log('----user- password', user.password);
     }catch(error){
        throw error;
     }
});
userSchema.methods.comparePassword = async function(userPassword){
    try {
        console.log('----no password', this.password);
        console.log('----password', userPassword)
        const isMatch = await bcrypt.compare(userPassword,this.password);
        console.log('----ismatch', isMatch)
        return isMatch;
        
    } catch (error) {
        throw error
    }
}
const UserModel = database.model('user', userSchema);

module.exports = UserModel