// here we will create a new route to get all the data from both collections

const express = require("express");
const { userModel } = require("../Model/userModel");
const { teamModel } = require("../Model/teamModel");

const teamRoute = express.Router();

// now get the data from both collections

teamRoute.get("/retrive_data", async (req, res) => {
  try {
    const teamData = await userModel.aggregate([
        {
          $lookup: {
            from: "teams",
            localField: "email",
            foreignField: "email",
            as: "teamData",
          },
        },
        {
          $project: {
            _id: 0,
            full_name: 1,
            email: 1,
            number: 1,
            city: 1,
            url: 1,
            Team_name :  { $arrayElemAt: ["$teamData.team_name", 0] },
          },
        },
      ]);
      res.status(200).send(teamData)
  } catch (error) {
    res.status(500).send({msg : error.message});
  }
});

module.exports = {
  teamRoute,
};
