import express from "express";
import prisma from "../prismaClient.js";
const router = express.Router();

router.post("/userInfo", async (req, res) => {
    console.log("entered here")

  const { email } = req.body;
  console.log("email", email)
  try {
    const userExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    console.log("userExists", userExists)
    if (!userExists) {
      return res
        .status(400)
        .json({ message: "User not found with such Email" });
    }
    return res.status(200).json({ message: "User found", data: userExists });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
