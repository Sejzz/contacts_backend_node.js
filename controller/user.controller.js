const UserService = require("../services/user.services")

exports.register = async (req, res, next) =>{
     try{
        const {email,password} = req.body;

        const successRes = await UserService.registerUser(email,password);
        res.json({status: true, success: "User Registered Successfully"});
     }catch(error){
        throw error
     }
}

exports.login = async (req, res, next) =>{
    try{
       const {email,password} = req.body;
       console.log("------",password);
     
const user = await UserService.checkuser(email);
console.log("-------user-------",user)
if(!user){
    throw new Error('User dont exist')
}
const isMatch = await user.comparePassword(password);
console.log("-------p------",password);
console.log("-------------",isMatch);

if(isMatch === false){
    throw new Error('Wrong Password')
}

let tokenData = {_id:user._id, email: user.email};
const token = await UserService.generationToken(tokenData, "secretKey", '4h')

res.status(200).json({status:true, token: token})
    }catch(error){
       throw error
       next(error)
    }
}