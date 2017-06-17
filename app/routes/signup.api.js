//Require a model that points to a User collection.
var User = require('../models/user.model');
/**
 * @param router -  Instance of express Router passed from the server.js require.
 */
module.exports = function (router) {

    //Route logic for /api/signup. This route expects a name, password and an email in the http request object in JSON format.
    router.post('/signup', function (req, res) {

        //Create a document of User model. Refer app/model/user.model.js
        var user = new User();
        user.name = req.body.name;
        user.password = req.body.password;
        user.email = req.body.email;

        //Validate values passed in the request object.
        if (user.name == null || user.name == '' || user.password == null || user.password == '' || user.email == null || user.email == '') {
            res.json({
                success: false,
                message: 'Feilds missing error'
            });
        } else {
            //Inserts a document to the user collection
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

    return router;
}