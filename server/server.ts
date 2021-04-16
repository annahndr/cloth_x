import express from "express";
import mongoose from "mongoose";

const app = express();

const userDB: string = "mongodb://localhost:27017/userDB";

mongoose
  .connect(userDB, { useNewUrlParser: true, useUnifiedTopology: true })
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