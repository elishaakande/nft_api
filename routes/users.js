import express from "express";
import {
  deleteUser,
  getNFTUserDetails,
  getUser,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/:id", getUser);
router.get("/", getNFTUserDetails);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
