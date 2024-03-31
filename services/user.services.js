const UserModel = require("../model/user.model");
const jwt = require("jsonwebtoken");

class UserServices{
 
    static async registerUser(email,password){
        try{
                console.log("-----Email --- Password-----",email,password);
                
                const createUser = new UserModel({email,password});
                return await createUser.save();
        }catch(err){
            throw err;
        }
    }

    
}

module.exports = UserServices;