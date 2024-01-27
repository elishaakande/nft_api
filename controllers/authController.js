import UserModel from "../models/userModel.js";

export const auth = async (req, res) => {
  const { wallet } = req.body;

  const walletL = await wallet.toLowerCase();

  const newUser = new UserModel({
    wallet: walletL,
  });

  try {
    const user = await UserModel.findOne({ wallet: walletL });

    if (user) {
      res.status(200).json(user);
      console.log("user found");
      console.log(user);
    } else {
      const userNew = await newUser.save();
      res.status(200).json(userNew);
      console.log("new user created");
      console.log(user);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error.message);
  }
};
