import express from "express";
import bcrypt from "bcryptjs";
import prisma from "../prismaClient.js";
import { z } from "zod";
const router = express.Router();

const signupSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  password: z.string().min(6).max(15),
});

const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(15),
});

router.post("/signup", async (req, res) => {
  console.log(req.body);
  const validatedData = signupSchema.safeParse(req.body);

  if (!validatedData.success) {
    console.log(
      "Zod validation signup error : ",
      validatedData.error.issues[0]
    );
    return res.status(400).json({
      message: "Validation Failed!",
      error: validatedData.error.issues[0].message,
    });
  }

  const { name, email, password } = req.body;

  try {
    // checks if user already exists
    const userExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // need to hash the password here cant store password in plain text
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newuser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    console.log(newuser);
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong, Internal Server Error" });
  }
});

router.post("/signin", async (req, res) => {
  const validatedData = signinSchema.safeParse(req.body);
  if (!validatedData) {
    console.log(
      "Zod validation signin error : ",
      validatedData.error.issues[0]
    );
    return res.status(400).json({
      message: "Validation Failed!",
      error: validatedData.error.issues[0].message,
    });
  }

  const { email, password } = req.body;
  try {
    const foundUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    console.log(foundUser);
    if (!foundUser) {
      return res
        .status(404)
        .json({ message: "User not found with such email" });
    }
    const comparePass = bcrypt.compareSync(password, foundUser.password);
    if (!comparePass) {
      return res.status(400).json({ message: "Password is incorrect" });
    }
    return res
      .status(200)
      .json({ message: "User logged in successfully", data: foundUser });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong, Internal Server Error" });
  }
});

export default router;
