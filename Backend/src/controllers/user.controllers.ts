import { Request, Response } from "express";
import { User } from "../models/user.models";

// create a single user
export const createUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists");

      return;
    }

    const result = await User.create(req.body);
  } catch (error) {
    
  }
};
