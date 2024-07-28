import express from "express";

import { config } from "dotenv";
import { MongoClient } from "mongodb";
config();

const router = express.Router();

const mongodb = new MongoClient(process.env.MONGO_URI);
const db = mongodb.db("test");

router.post("/appointment", async (req, res) => {
  const { location, typeofambulance, timestamp } = req.body;
  const put = await db
    .collection("Ambulances Services")
    .insertOne({ location, typeofambulance, timestamp });
  res.status(200).send({
    status: "success",
    appointment: put.insertedId.toString(),
  });
});

export { router as AmbulanceRouter };
