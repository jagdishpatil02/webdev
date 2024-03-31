import express from "express";
import connectDB from "./db";
import dotenv from "dotenv";
connectDB();

dotenv.config({
  path: "./en",
});

/*
const app = express()(async function () {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
})();
*/
