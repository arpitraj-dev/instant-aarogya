import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { UserRouter } from "./routes/user.js";
import cookieParser from "cookie-parser";
import { connect, ProductRouter } from "./routes/products.js";
import { DoctorRouter } from "./routes/doctor.js";
import { AmbulanceRouter } from "./routes/ambulance.js";
import { LabRouter } from "./routes/lab.js";

dotenv.config();
const corsOptions = {
  origin: true,
  credentials: true,
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use("/auth", UserRouter);
app.use("/products", ProductRouter);
app.use("/doctor", DoctorRouter);
app.use("/ambulance", AmbulanceRouter);
app.use("/lab", LabRouter);
app.use(cookieParser());
mongoose.connect(process.env.MONGO_URI);

app.listen(process.env.PORT, async () => {
  await connect();
  console.log(`server running in the ${process.env.PORT}`);
});
