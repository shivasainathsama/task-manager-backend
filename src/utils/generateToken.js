const loginToken = require("jsonwebToken");
const generateToken = (id) =>{
    return loginToken.sign({id},process.env.JWT_SECRET,{
        expiresIn:"7d"
    });
};
module.exports=generateToken;