const UserModel = require('../model/user.model')
const jwt = require('jsonwebtoken');

class UserService{
      static async registerUser(email,password){
        try{
            console.log("-----Email --- Password-----",email,password)
            const createuser = new UserModel({email, password});
            return await createuser.save();
        }catch(err){
            throw err;
        }
      }

      static async checkuser(email){
        try{
           return await UserModel.findOne({email})
        }catch(error){
            throw error;
        }
      }

      static async generationToken(tokenData, secretKey, jwt_expire){
        return jwt.sign(tokenData,secretKey,{expiresIn:jwt_expire});

      }
}

module.exports = UserService;