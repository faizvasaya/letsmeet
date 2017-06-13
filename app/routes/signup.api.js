var User = require('../models/user.model');
module.exports = function (router) {

    router.post('/signup', function (req, res) {
        var user = new User();
        user.name = req.body.name;
        user.password = req.body.password;
        user.email = req.body.email;
        if (user.name == null || user.name == '' || user.password == null || user.password == '' || user.email == null || user.email == '') {
            res.json({
                        success: false,
                        message: 'Feilds missing error'
                    });
        } else {
            user.save(function (err) {
                if (err) {
                    res.json({
                        success: false,
                        message: 'Email already exists'
                    });
                } else {
                    res.json({
                        success: true,
                        message: 'Signed up successfully'
                    });
                }
            });
        }
    });

    router.post('/auth', function (req, res) {
       User.findOne({
           email: req.body.email
        }).select('email password name')
          .exec(function (err, user){
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
    }) 
    });

    return router;
}