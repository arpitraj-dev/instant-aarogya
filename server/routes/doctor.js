import express from "express";

import { config } from "dotenv";
import { MongoClient } from "mongodb";
config();

const router = express.Router();

const mongodb = new MongoClient(process.env.MONGO_URI);
const db = mongodb.db("test");

router.post("/appointment", async (req, res) => {
  const { disease, location, doctor, timestamp } = req.body;
  const put = await db
    .collection("Doctors Appointment")
    .insertOne({ disease, location, doctor, timestamp });
  res.status(200).send({
    status: "success",
    appointment: put.insertedId.toString(),
  });
});

export { router as DoctorRouter };
