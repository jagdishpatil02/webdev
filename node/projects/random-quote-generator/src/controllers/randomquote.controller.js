import mongoose from 'mongoose';
import { randomQuote } from '../models/randomquote.model.js';

const addRandomQuote = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Quote name is required' });
  }

  const quoteExist = await randomQuote.find({ name: name });

  if (quoteExist.length > 0) {
    return res.status(400).json({ error: 'Quote is already exist' });
  }

  const generatedQuote = await randomQuote.create({
    name,
  });

  return res
    .status(201)
    .json({ message: 'Quote generated successfully!', generatedQuote });
};

const getRandomQuote = async (req, res) => {
  const getQuotes = await randomQuote.find({});
  const randomIndex = Math.floor(Math.random() * getQuotes.length);
  const quote = getQuotes[randomIndex];
  return res
    .status(200)
    .json({ message: 'Quote fetched successfully!', quote });
};

const getRandomQuoteById = async (req, res) => {
  const quoteId = req.query.quoteId;

  if (!mongoose.Types.ObjectId.isValid(quoteId)) {
    return res.status(400).json({ error: 'QuoteId not found' });
  }

  const quote = await randomQuote.findById(quoteId);

  return res
    .status(200)
    .json({ message: 'Quote feteched successfully', quote });
};

const getAllQuotes = async (req, res) => {
  let quotes = await randomQuote.find({});

  return res
    .status(200)
    .json({ message: 'Quotes fetched successfully', quotes });
};
export { addRandomQuote, getRandomQuote, getRandomQuoteById, getAllQuotes };
