import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRouter.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
import connectDB from "./config/db.js";

dotenv.config();

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.get("/", (req, res) => {
    res.send("API running");
});

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
