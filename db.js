import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE;

export const db = mongoose.connect(DB, {
  dbName: "NFT_Market",
});
