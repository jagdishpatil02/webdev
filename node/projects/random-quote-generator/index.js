import { app } from "./src/app.js";
import connectDB from "./src/db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at ${8000}`);
    });
  })
  .catch((err) => {
    console.log("mongodb connection failed", err);
  });

app.get("/", (req, res) => {
  res.send("random quote generator api");
});
