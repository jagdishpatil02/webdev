// import connectDB from "./index";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
const app = express();

dotenv.config({
  path: "./env",
});

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// to limit the json respnse from backend
app.use(
  express.json({
    limit: "16kb",
  })
);

// make express aware of data coming in params
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);

// routes import

import randomQuoteRouter from "./src/router/quote.route.js";
// routes declaration

app.use("/api/v1/quote", randomQuoteRouter);

app.get("/", (req, res) => {
  res.send("random quote generator api");
});

// connectDB();
app.listen(process.env.PORT || 8000, () => {
  console.log(`server is running at ${8000}`);
});
