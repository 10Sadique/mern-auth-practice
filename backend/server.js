import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRouter.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import path from "path";

dotenv.config();

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

if (process.env.NODE_ENV === "production") {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, "frontend/dist")));

    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
    );
} else {
    app.get("/", (req, res) => {
        res.send("API running");
    });
}

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
