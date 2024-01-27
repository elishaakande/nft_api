import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    wallet: {
      type: String,
      required: [true, "User must have a wallet"],
      unique: true,
    },
    email: String,
    name: String,
    userImage: String,
    bio: String,
    website: String,
    instagram: String,
    facebook: String,
    x: String,
    followers: [{ type: mongoose.Schema.ObjectId }],
    following: [{ type: mongoose.Schema.ObjectId }],
  },
  { timestamps: true }
);

const UserModel = mongoose.model("users", UserSchema);
export default UserModel;
