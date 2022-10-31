import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../utils/connectDB";
import User from "../../../utils/models/user";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    connectDB();
    try {
      const body = req.body;
      console.log(body);
      const user = await User.create(req.body);
      if (!user) {
        return res.json("User not created");
      }
      res.json({ message: "User Create Successfully", userId: user._id });
    } catch (error) {
      res
        .status(400)
        .send({ message: "Not able to create the user", error: error });
    }
  }
};

export default handler;
