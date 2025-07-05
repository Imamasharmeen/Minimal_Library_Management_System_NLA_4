import dotenv  from 'dotenv';

import app from './app';
import mongoose from "mongoose";

dotenv.config();

const port = process.env.PORT;
// const url = process.env.DATABASE_URL as string;
const url = "mongodb://localhost:27017/Library_Management"; 


mongoose.connect(url)
    .then(() => {
        console.log("Database connected successfully");
        app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error("Database connection failed:", error);
    });
