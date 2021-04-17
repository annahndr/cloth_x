const express = require("express");
const ObjectId = require("mongodb").ObjectID;

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

  return router;
};

module.exports = createRouter;
