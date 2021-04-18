const express = require("express");
const ObjectId = require("mongodb").ObjectID;
const bcrypt = require("bcrypt");

const createRouter = function (collection) {
  const router = express.Router();

  router.get("/", (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((errorResponse) => {
        error.log(errorResponse);
        res.status(500);
        res.json({ status: 500, error: errorResponse });
      });
  });

  // Post a product / shopping cart
  router.post("/", (req, res) => {
    const newData = req.body;
    
    collection
      .insertOne(newData)
      .then((result) => {
        console.log(result);
        res.json(result.ops[0]);
        res.status(500);
      })
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });


  // POST a user
  router.post("/register", async (req, res) => {
    const newUser = req.body;
    const saltRounds = 10;
    const foundUser = await collection.findOne({ email: newUser.email });
    if (!foundUser) {
      bcrypt.hash(newUser.password, saltRounds, function (err, hash) {
        newUser.password = hash;
        newUser.created = Date.now();
        collection
          .insertOne(newUser)
          .then((result) => {
            console.log(result);
            res.json(result.ops[0]);
            res.status(500);
          })
          .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
          });
      });
    } else {
      res.status(400);
      res.json({ status: 400, error: " User already exists" });
    }
  });

  router.post("/login", async (req, res) => {
    const user = req.body;
    const foundUser = await collection.findOne({ email: user.email });

    if (foundUser) {
      const validPassword = await bcrypt.compare(user.password, foundUser.password);

      if (validPassword) {
        res.status(200).json({ message: "Valid Password", status: 200 });
      } else {
        res.status(400).json({ error: "Invalid password", status: 400 });
      }
      // if user not found:
    } else {
      res.status(401).json({ error: "User does not exist", status: 401 });
    }
  });

  // GET all products by user id
  router.get("/user/:id", (req, res) => {
    const id = ObjectId(req.params.id); //id is the userId in the products collection
    console.log("id:", id);
    
   const products =  collection.find({ userId: id })
   console.log("products:", products);
   products
      .toArray()
      .then(docs => res.json(docs))
      .catch(error => {
        console.error(error);
        res.status(500);
        res.json({ status: 500, error: error });
      });
  });

  // GET users/products
  router.get("/:id", (req, res) => {
    const id = ObjectId(req.params.id);
    collection
      .findOne({ _id: id })
      .then((docs) => res.json(docs))
      .catch((error) => {
        console.error(error);
        res.status(500);
        res.json({ status: 500, error: error });
      });
  });

  // UPDATE user/product/shopping cart
  router.put('/:id', (req, res) => {
    const id = ObjectId(req.params.id);
    const updatedData = req.body;
    delete updatedData._id;

    collection
    .updateOne({ _id: id }, { $set: updatedData })
    .then(result => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500);
      res.json({ status: 500, error: err });
    });
  });

  // Update many products
  router.put('/', (req, res) =>{
    const newData = req.body.products;

    newData.forEach(id => {
      id = ObjectId(id);
      console.log(typeof id);
    });
    console.log('NewData:', newData)
    
  // assuming new data is an array of product ids
    collection.updateMany(
      {
        _id:
        {
          $in:
            newData
        }
      },
      {
        $inc: { status: 'Reserved' }
      }).then(result => {
        res.json(result);
      })
      .catch((err) => {
        res.status(500);
        res.json({ status: 500, error: err });
      });
  })  

  return router;
};

module.exports = createRouter;
