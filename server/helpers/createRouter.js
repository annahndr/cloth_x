const express = require("express");
const ObjectId = require("mongodb").ObjectID;
const bcrypt = require("bcrypt");

const createRouter = function(collection) {
  const router = express.Router();

  router.get("/", (req, res) => {
    collection
      .find()
      .toArray()
      .then(docs => res.json(docs))
      .catch(errorResponse => {
        error.log(errorResponse);
        res.status(500);
        res.json({ status: 500, error: errorResponse });
      });
  });

  router.post("/register", (req, res)=> {
    const newUser = req.body;
    const saltRounds = 10;
    bcrypt.hash(newUser.password, saltRounds, function(err, hash) {
      newUser.password = hash;
      collection
      .insertOne(newUser)
      .then((result) => {
      console.log(result);
      res.json(result.ops[0])
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  });
  });

  router.post("/login", async (req, res) => {
    const user = req.body;
    console.log("user:", user);

    const foundUser = await collection.findOne({email: user.email})
    console.log("found user:", foundUser);

    if (foundUser){
      const validPassword = bcrypt.compare(user.password, foundUser.password)

      if(validPassword){
        res.status(200).json({message:"Valid Password", status: 200})
      }
      else { 
        res.status(400).json({error: "Invalid password", status: 400})
      }
    // if user not found:
    } else {
      res.status(401).json({error: "User does not exist", status:401})
    }
  })

  return router;
};

module.exports = createRouter;