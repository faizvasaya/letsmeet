var mongoose = require('mongoose');
//bcrypt-nodejs enables password encrypting using hashing techniques
var bcrypt = require('bcrypt-nodejs');
//Gets an instance of mongoose schema
var Schema = mongoose.Schema;

//Create a schema UserSchema which can be used to create models. Each schema maps to a collection in mongodb.
var UserSchema = new Schema({
    name: { type: String, lowercase: true, required: true},
    password: { type: String, required: true},
    email: { type: String, required: true, lowercase: true, unique: true}
});

//Mongoose db level middleware. It gets executed before every write operation in made to the user collection.
//Created to hash password using bcrypts hash function.
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

//Adding collection level method.
UserSchema.methods.comparePassword = comparePassword;

/**
 * @desc Compares the password using bcrypt's comparesync method to the password in the db.
 * @param {*} password is the argument password passed by the user.
 */
function comparePassword(password){
    //this.password points to the encrypted password in the database.
    return bcrypt.compareSync(password, this.password);
} 

//Export a User model which points to a collection in mongodb.
module.exports = mongoose.model('User', UserSchema);