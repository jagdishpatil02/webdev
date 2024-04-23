import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at ${8000}`);
    });

    app.get("/", (req, res) => {
      res.send("hello world");
    });
  })
  .catch((err) => {
    console.log("mongodb connection failed", err);
  });
