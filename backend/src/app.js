import express from "express";
import {createServer} from "node:http";
import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";
import cors from "cors";
import userRoutes from "./routes/users.routes.js"

const app = express();
const server = createServer(app);
connectToSocket(server);

app.set("port", (process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({limit: "40kb", extended: true}));

app.use("/api/v1/users", userRoutes);

const start = async() => {
    const connectionDb =  await mongoose.connect("mongodb+srv://luffykitey:ZoomApp15@zoom.2ekc6.mongodb.net/")
    console.log(`MONGO Connected DB host: ${connectionDb.connection.host}`);
    server.listen(app.get("port"), () => {
        console.log("app is listening on port 8000");
    });
}

start();