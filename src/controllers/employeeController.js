const User = require('../../src/models/employee');
const { sendSuccessResponse, sendErrorResponse } = require('../../helpers/responseHelper');
exports.create = function(req, res) {
   res.send(req.body.name);
}

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.getAll();
        sendSuccessResponse(res,users)
       
    } catch (err) {
        sendErrorResponse(res, err.message);
    }
};

exports.getUserById = async(req,res)=>{
    try{
       const user = await User.getUserById(req.params.id); 
       console.log(user)
       if(!user.id){
        sendErrorResponse(res,"User not found");
       }
       sendSuccessResponse(res,user)
    }catch(err){
        sendErrorResponse(res, err.message);
    }
}

exports.createUser = async(req,res)=>{
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };
    try {
        const userId = await User.create(newUser);
        newUser.id = userId;
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}