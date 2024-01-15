import mongoose from "mongoose";

export const connectDB = ()=>{

    mongoose.connect("mongodb://localhost:27017", {
        dbName: "taskbackend"
    }).then(() => {
        console.log("Database connected...");
    }).catch((e) => {
        console.log(e);
    })
}