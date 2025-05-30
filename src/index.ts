import express, { Request, Response } from "express";
import prisma from "./primsa";

const app = express();

app.get("/", async (req: Request, res: Response) => {
  const user = await prisma.user.findMany();
  res.status(200).json({
    message: "Data fetched successfully!",
    data: user,
  });
});

app.post("/", async (req: Request, res: Response) => {
  try {
    const { email, name } = req.body;
    const user = await prisma.user.create({
      data: {
        email,
        name,
      },
    });

    res.status(201).json({
      message: "Data received successfully!",
      data: user,
    });
  } catch (error) {}
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
