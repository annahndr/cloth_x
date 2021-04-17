
// const User = require("../models/UserModel");

// const lizzie = new User({
//         "firstName": "Lizzie",
//         "lastName": "Bennett",
//         "email": "lb@email.com",
//         "password": "qwerty",
//         "created": Date.now(),
//         "verified": True
// })
// lizzie.save().then(console.log("lizzie has been saved"));

use clothxDB;

db.dropDatabase();

db.users.insertMany([
  {
    firstName: "Lizzie",
    lastName: "Bennett",
    email: "lb@email.com",
    password: "qwerty",
    created: Date.now(),
    verified: true
  },

  {
    firstName: "Charles",
    lastName: "Bingley",
    email: "cb@email.com",
    password: "Passw0rd!",
    created: Date.now(),
    verified: false
  }
]);
