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

  return router;
};

module.exports = createRouter;
