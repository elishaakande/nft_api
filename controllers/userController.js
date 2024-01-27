import UserModel from "../models/userModel.js";
import mongoose from "mongoose";

export const getUser = async (req, res) => {
  const wallet = req.params.id;
  const walletL = wallet.toLowerCase();

  try {
    const user = await UserModel.findOne({ wallet: walletL });

    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json("User does not exist");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getNFTUserDetails = async (req, res) => {
  const owner = req.query.owner;
  const seller = req.query.seller;

  try {
    const ownerDetails = owner
      ? await UserModel.findOne({ wallet: owner })
      : null;
    const sellerDetails = seller
      ? await UserModel.findOne({ wallet: seller })
      : null;

    const details = {
      owner: ownerDetails,
      seller: sellerDetails,
    };

    return res.status(200).json({ success: true, data: details });
  } catch (error) {
    console.error("Error in getNFTUserDetails:", error);
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error" });
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, isAdmin } = req.body;

  if (id === currentUserId || isAdmin) {
    try {
      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      res.status(200).json({ success: true, data: user });
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

//Delete User
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  const { currentUserId, isAdmin } = req.body;

  if (currentUserId === id || isAdmin) {
    try {
      await UserModel.findByIdAndDelete(id);
      res
        .status(200)
        .json({ success: true, message: "User Deleted Successfully" });
    } catch (error) {
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.status(404).json({ success: false, error: "Unauthorized access" });
  }
};
