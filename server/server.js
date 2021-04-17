const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/createRouter");

app.use(cors());
app.use(bodyParser.json());

MongoClient.connect("mongodb://localhost:27017", { useUnifiedTopology: true })
  .then(client => {
    const db = client.db("clothxDB");

    const usersCollection = db.collection("users");
    const usersRouter = createRouter(usersCollection);
    app.use("/api/users", usersRouter);

    const productsCollection = db.collection("products");
    const productsRouter = createRouter(productsCollection);
    app.use("/api/products", productsRouter);

  })
  .catch(console.error);
app.listen(5000, function() {
  console.log(`clothX server running on port ${this.address().port}`);
});
