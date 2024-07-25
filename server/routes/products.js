import express from "express";

import { MongoClient } from "mongodb";
import { config } from "dotenv";
config();

const router = express.Router();

const mongodb = new MongoClient(process.env.MONGO_URI);
const db = mongodb.db("InstantArogya");

export const connect = async () => {
  await mongodb.connect();
};

router.get("/arogya", async (req, res) => {
  const products = await db.collection("ArogyaProducts").find({}).toArray();
  return res.status(200).send({
    products,
  });
});

router.get("/babycare", async (req, res) => {
  const products = await db.collection("BabyCare").find({}).toArray();
  return res.status(200).send({
    products,
  });
});

router.get("/nutritionaldrinksandsupplements", async (req, res) => {
  const products = await db
    .collection("Nutritional Drinks and Supplements")
    .find({})
    .toArray();
  return res.status(200).send({
    products,
  });
});

router.get("/womencare", async (req, res) => {
  const products = await db
    .collection("WomenCare")
    .find({})
    .toArray();
  return res.status(200).send({
    products,
  });
});

router.get("/personalcare", async (req, res) => {
  const products = await db.collection("PersonalCare").find({}).toArray();
  return res.status(200).send({
    products,
  });
});

router.get("/ayurveda", async (req, res) => {
  const products = await db.collection("Ayurveda").find({}).toArray();
  return res.status(200).send({
    products,
  });
});

router.get("/healthdevices", async (req, res) => {
  const products = await db.collection("HealthDevices").find({}).toArray();
  return res.status(200).send({
    products,
  });
});

router.get("/healthcondition", async (req, res) => {
  const products = await db.collection("HealthCondition").find({}).toArray();
  return res.status(200).send({
    products,
  });
});

export { router as ProductRouter };
