import express from "express";
export const app = express();
import userRouter from "./routes/user.js"


// Added Middlewares
app.use(express.json());
app.use("/users", userRouter);


app.get("/", (req, res) => {
    res.send("Nice working")
})

