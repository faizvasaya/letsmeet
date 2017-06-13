var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    name: { type: String, lowercase: true, required: true},
    password: { type: String, required: true},
    email: { type: String, required: true, lowercase: true, unique: true}
});

UserSchema.pre('save', function(next){
    var user = this;
    bcrypt.hash(user.password, null, null, function(err, hash){
        if(err){
            var err = new Error('Problem with hashing');
            return next(err);
        }
        user.password = hash;
        next();
    });
});

module.exports = mongoose.model('User', UserSchema);