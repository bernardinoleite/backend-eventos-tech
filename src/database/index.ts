import { connect } from "mongoose";

export const connectDB = async () => {

    await connect(process.env.MONGO_URL)
        .then(() => {
            console.log("Database connected")
        }).catch((err) => {
            console.log("Error In DB: ", err)
        })
}
