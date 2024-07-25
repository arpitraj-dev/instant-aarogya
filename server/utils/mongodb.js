import { MongoClient } from "mongodb";
import { config } from "dotenv";
config();

const mongodb = new MongoClient(process.env.MONGO_URI);
const db = mongodb.db("InstantArogya");

export const connect = async () => {
  await mongodb.connect();
};

export { db, mongodb };
