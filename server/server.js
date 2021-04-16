const express = require("express");
const mongoose = require("mongoose");

const app = express();

const clothxDB = "mongodb://localhost:27017/clothxDB";

mongoose
  .connect(clothxDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(_ => console.log("Connected to DB"))
  .catch(error => console.error("ERROR", error));

const PORT = 8080;

app.use(express.json());
app.get("/", (request, response) =>
  response.send("Express + TypeScript Server")
);

app.listen(PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${PORT}`);
});
