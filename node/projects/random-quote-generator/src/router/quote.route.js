import { Router } from "express";
import {
  addRandomQuote,
  getAllQuotes,
  getRandomQuote,
  getRandomQuoteById,
} from "../controllers/randomquote.controller.js";
const router = Router();
/**
 * @swagger
 * /api/v1/quote/addQuote:
 *   post:
 *     summary: Add a new quote
 *     description: Endpoint to add a new quote.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The quote text.
 *
 *     responses:
 *       200:
 *         description: Success message indicating the quote was added successfully.
 *       400:
 *         description: Error message indicating the request was malformed or invalid.
 */
router.route("/addQuote").post(addRandomQuote);

/**
 * @swagger
 * /api/v1/quote/randomquote:
 *   get:
 *     summary: Get a random quote
 *     description: Endpoint to get a random quote.
 *     responses:
 *       200:
 *         description: Success message indicating the quote was fetched successfully.
 *       400:
 *         description: Error message indicating the request was malformed or invalid.
 */

router.route("/randomquote").get(getRandomQuote);

/**
 * @swagger
 * /api/v1/quote/getQuoteById:
 *   get:
 *     summary: Get a quote by ID
 *     description: Retrieve a quote by its ID.
 *     parameters:
 *       - in: query
 *         name: quoteId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the quote to retrieve.
 *     responses:
 *       200:
 *         description: Successfully retrieved the quote.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A success message.
 *                 quote:
 *                   type: object
 *                   description: The retrieved quote object.
 *       400:
 *         description: Invalid request or quoteId not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message indicating the issue.
 */

router.route("/getQuoteById").get(getRandomQuoteById);

/**
 * @swagger
 * /api/v1/quote/allquote:
 *   get:
 *     summary: Get a all quotes
 *     description: Endpoint to get all quotes.
 *     responses:
 *       200:
 *         description: Success message indicating the quote was fetched successfully.
 *       400:
 *         description: Error message indicating the request was malformed or invalid.
 */

router.route("/allquote").get(getAllQuotes);

export default router;
