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
                        message: 'Signedup successfully'
                    });
                }
            });
        }
    });
    return router;
}