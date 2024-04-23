import { Router } from "express";
import {
  addRandomQuote,
  getAllQuotes,
  getRandomQuote,
  getRandomQuoteById,
} from "../controllers/randomquote.controller.js";
const router = Router();

router.route("/addQuote").post(addRandomQuote);
router.route("/randomquote").get(getRandomQuote);
router.route("/getQuoteById").get(getRandomQuoteById);
router.route("/allquote").get(getAllQuotes);

export default router;
