import express, { Request, Response } from 'express';
import { router } from './routes/index';
import { connectDB } from './database';
const app = express();
app.use(express.json());
app.use("/api/v1", router);

app.listen(2908, "localhost")
    .on("listening", () => {
        console.log("Server is running on port 2908")
    })
    .on("error", (err) => {
        console.log("Error: ", err)
    })
    .on("close", () => {
        console.log("Server is closed")
    })
    .on("connection", () => {
        console.log("Connection established")
    })
    .on("request", (request: Request, response: Response) => {
        console.log("Request received")
    })
    .on("upgrade", (request: Request, socket, head) => {
        console.log("Upgrade request received")
    })
    .on("clientError", (err, socket) => {
        console.log("Client error: ", err)
    })
    .on("checkContinue", (request: Request, response: Response) => {
        console.log("Check continue")
    })
    .on("connect", (request: Request, socket, head) => {
        console.log("Connect request")
    })


connectDB()