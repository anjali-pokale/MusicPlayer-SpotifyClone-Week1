const jwt=require("jsonwebtoken");

exports={}

exports.getToken=async ()=>{
    const token=jwt.sign({identifier:user._id},"thisKeyIsSupposedToBeSecret");
    return token;
};

module.exports=exports