import express from "express";
import * as dotenv from "dotenv";
import { db } from "./db.js";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";

const app = express();

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

dotenv.config();
const port = process.env.PORT || 3000;

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);

db.then(() =>
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  })
).catch((error) => console.log(error));
