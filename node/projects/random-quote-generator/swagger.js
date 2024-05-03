import swaggerJSDoc from "swagger-jsdoc";
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Random quote generator apis",
    version: "1.0.0",
    description:
      "This API provides endpoints to generate and manage random quotes. Users can retrieve all random quotes, add new quotes, get a random quote by ID",
  },
  servers: [
    {
      url: "http://localhost:8000",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./src/router/quote.route.js"], // Path to the API routes in your Node.js application
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;
