const UserServices = require('../services/user.services');

exports.register = async (req, res, next) => {
    try {
        console.log("---req body---", req.body);
        const { email, password } = req.body;
        
        const response = await UserServices.registerUser(email, password);

        res.json({ status: true, success: 'User registered successfully' });


    } catch (err) {
        console.log("---> err -->", err);
        next(err);
    }
}

