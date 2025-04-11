import express from "express";
import bcrypt from "bcryptjs";
import prisma from "../prismaClient.js";
import { date, z } from "zod";
const router = express.Router();

const signupSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  password: z.string().min(6).max(15).nullable().optional(),
});

const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(15),
});

router.post("/signup/:provider", async (req, res) => {
  const { provider } = req.params;
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
    if (provider === "credentials") {
      const userExists = await prisma.user.findUnique({
        where: {
          email,
          provider,
        },
      });
      if (userExists) {
        return res.status(400).json({ message: "User already exists" });
      }

      // need to hash the password here cant store password in plain text
      const hashedPassword = password ? bcrypt.hashSync(password, 10) : null;
      await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          provider,
        },
      });
      return res.status(201).json({ message: "User created successfully" });
    } else if (provider === "google") {
      const userExists = await prisma.user.findUnique({
        where: {
          email,
          provider,
        },
      });
      if (userExists) {
        return res.status(400).json({ message: "User already exists" });
      }
      // need to hash the password here cant store password in plain text
      await prisma.user.create({
        data: {
          name,
          email,
          password,
          provider,
        },
      });
      return res.status(201).json({ message: "User created successfully" });
    }
  } catch (error) {
    console.log("error", error);
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
        provider: "credentials",
      },
    });
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
      .json({ message: "User logged in successfully", userData: foundUser });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong, Internal Server Error" });
  }
});

export default router;
