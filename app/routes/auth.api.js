var User = require('../models/user.model');
module.exports = function (router) {

    router.post('/auth', function (req, res) {
       User.findOne({
           email: req.body.email
        }).select('email password name')
          .exec(queryCallback) 
    });

    function queryCallback(err, user){
        if(err) throw err;
        if(!user){
            res.json({
                success: false,
                message: 'Unregistered Email'
            });
        } else if(user) {
            if(req.body.password) {
                if(!user.comparePassword(req.body.password)){
                    res.json({
                        success: false,
                        message: 'Invalid Password'
                    });
                } else {
                    res.json({
                           success: true,
                           message: 'Successful Login'
                    });
                }
            } else {
                 res.json({
                            success: false,
                            message: 'No password provided'
                });
            }
        }
    }
    return router;
}