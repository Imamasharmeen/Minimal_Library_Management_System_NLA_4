import { Router } from "express";
import {createUser} from "../controllers/user.controllers";

const userRoutes = Router();

userRoutes.post("/create", createUser);


export default userRoutes;