const User = require("../models/UserModel");

const lizzie = new User({
        "firstName": "Lizzie",
        "lastName": "Bennett",
        "email": "lb@email.com",
        "password": "qwerty",
        "created": Date.now(),
        "verified": True
})
lizzie.save().then(console.log("lizzie has been saved"));

