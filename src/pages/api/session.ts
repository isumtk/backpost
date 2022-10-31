import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    /* Code for login, generate a session */
  } else if (req.method === "DELETE") {
    /* Code for logout, destroy the session */
  }
};

export default handler;
