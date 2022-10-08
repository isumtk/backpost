import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../utils/connectDB";
import User from "../../../utils/models/user";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  connectDB();
  try {
    const user = await User.create(req.body);
    if (!user) {
      return res.json("User not created");
    }
  } catch (error) {
    res
      .status(400)
      .send({ message: "Not able to create the user", error: error });
  }
};

export { handler as register };
