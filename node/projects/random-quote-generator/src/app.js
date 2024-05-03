import express from "express";
import cors from "cors";
const app = express();
import swaggerUI from "swagger-ui-express";
import swaggerSpec from "../swagger.js";

// Serve Swagger documentation
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

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

import randomQuoteRouter from "./router/quote.route.js";
// routes declaration

app.use("/api/v1/quote", randomQuoteRouter);

/**
 * @swagger
 * /:
 *  get:
 *    summary: This api is used to get get simple hello message
 *    responses:
 *      200:
 *        description: to test get method
 */
app.get("/", (req, res) => {
  res.send("random quote generator apis");
});

export { app };
