//Require a model that points to a User collection.
var User = require('../models/user.model');
/**
 * @param router -  Instance of express Router passed from the server.js require.
 */
module.exports = function (router) {
    
    //Global variables to provide accessibility of res and req object to the queryCallback()
    var req_access = '';
    var res_access = '';

    //Route logic for /api/auth/. This route expects an emailid and its corresponding password for user authentication.
    router.post('/auth', function (req, res) {
        req_access = req;
        res_access = res;
        //Find a user with the specified email id.
        User.findOne({
            email: req.body.email
        }).select('email password name')
            .exec(queryCallback)
    });

    function queryCallback(err, user) {
        if (err) throw err;
        //validate if a user with the specified userid exists.
        if (!user) {
            res_access.json({
                success: false,
                message: 'Unregistered Email'
            });
        } else if (user) {
            //Validate the password provided by the user in req object.
            if (req_access.body.password) {
                //Refer to comparePassword in app/models/user.model.js.
                if (!user.comparePassword(req_access.body.password)) {
                    res_access.json({
                        success: false,
                        message: 'Invalid Password'
                    });
                } else {
                    res_access.json({
                        success: true,
                        message: 'Successful Login'
                    });
                }
            } else {
                res_access.json({
                    success: false,
                    message: 'No password provided'
                });
            }
        }
    }
    return router;
}