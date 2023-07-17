// Hack2Skill Assignment Task - 1

const express = require("express");
const cors = require("cors");
const { connection } = require("./Config/db");
const { teamRoute } = require("./Routes/teamRoutes");
require("dotenv").config();
const app = express();


app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Hacke2Skill");
});
app.use("/api" , teamRoute)

app.listen(process.env.port, async () => {
  try {
     connection;
    console.log(`Connected to the database at ${process.env.port}`);
  } catch (error) {
    console.log(error);
  }
});
