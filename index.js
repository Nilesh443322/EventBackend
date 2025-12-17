import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import patient from "./modules/patients.js";
import doctor from "./modules/doctors.js";
import pas from "./modules/newpass.js";
import enq from "./modules/equiry.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

/* -------------------- MongoDB -------------------- */
async function connectToMongoDB() {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(" MongoDB connected");
  } catch (err) {
    console.error(" MongoDB connection failed:", err.message);
  }
}

connectToMongoDB();

/* -------------------- Routes -------------------- */

app.post("/adds", async (req, res) => {
  try {
    const data = await patient.create(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post("/addDs", async (req, res) => {
  try {
    const data = await doctor.create(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get("/show", async (req, res) => {
  const data = await patient.find();
  res.json(data);
});

app.get("/showdoct", async (req, res) => {
  const data = await doctor.find();
  res.json(data);
});

app.get("/details/:id", async (req, res) => {
  const data = await patient.findById(req.params.id);
  res.json(data);
});

app.get("/detailsdoc/:id", async (req, res) => {
  const data = await doctor.findById(req.params.id);
  res.json(data);
});

app.put("/addmadicine/:id", async (req, res) => {
  const data = await patient.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(data);
});

app.put("/docaddlistdisease/:id", async (req, res) => {
  const data = await doctor.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(data);
});

app.delete("/delete/:id", async (req, res) => {
  await patient.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

app.delete("/docdelete/:id", async (req, res) => {
  await doctor.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

app.put("/logins/:id", async (req, res) => {
  const data = await pas.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(data);
});

app.get("/check/:id", async (req, res) => {
  const data = await pas.findById(req.params.id);
  res.json(data);
});

app.post("/enqu", async (req, res) => {
  const data = await enq.create(req.body);
  res.json(data);
});

/* -------------------- EXPORT (ES MODULE) -------------------- */
export default app;





