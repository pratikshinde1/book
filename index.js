import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
// const URI = process.env.MongoDBURI;

// connect to mongoDB
mongoose.connect("mongodb+srv://ps2753:Yk9t7Obo5BrKtXFw@cluster0.6tvkg.mongodb.net/bookShops?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("Connected To DB Sucessfully....")
})
.catch((err) => {
    console.log(err)
})


// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});