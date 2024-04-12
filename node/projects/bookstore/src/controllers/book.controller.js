
import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiResponse } from '../utils/apiResponse.js'

import { ApiError } from '../utils/apiError.js'
import { Book } from '../models/book.model.js';
import { Category } from '../models/category.model.js';

// add book
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const addBookHandler = asyncHandler(async (req, res) => {

    const { name, author, numberOfCopiesSold, categoryId } = req.body;
    if (!author || !name || !numberOfCopiesSold) {
        throw new ApiError(400, "All fields are required");
    }

    const category = await Category.findById(categoryId);
    if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
    const existedError = await Book.findOne({ $or: [{ name }] });
    if (existedError) {
        throw new ApiError(400, "book already exists")
    }

    const bookId = getRandomNumber(1, 100);
    const booknameMetadata = name.replace(/\s+/g, '').toLowerCase();
    const book = await Book.create({
        bookId, name, author, numberOfCopiesSold, booknameMetadata, category: category._id
    });

    return res
        .status(200)
        .json(new ApiResponse(200, book, "Book added successfully"));
});

// get all books
const getAllBooksHandler = asyncHandler(async (req, res) => {
    // Use the correct Mongoose method to find the book
    const book = await Book.find({ });
    if (!book) {
        return res
            .status(404)
            .json(new ApiResponse(404, null, "Books not found"));
    }

    return res
        .status(200)
        .json(new ApiResponse(200, book, "Books fetched successfully"));
});

// get book by id
const getBookHandler = asyncHandler(async (req, res) => {
    const bookId = req.query.bookId;
    // Use the correct Mongoose method to find the book
    const book = await Book.findOne({ bookId: bookId });
    if (!book) {
        return res
            .status(404)
            .json(new ApiResponse(404, null, "Book not found"));
    }

    return res
        .status(200)
        .json(new ApiResponse(200, book, "Book fetched successfully"));
});

// delete by id
const deleteBookHandler = asyncHandler(async (req, res) => {
    const bookId = req.query.bookId;
    // Use the correct Mongoose method to find the book
    const book = await Book.deleteOne({ bookId: bookId });
    if (!book) {
        return res
            .status(404)
            .json(new ApiResponse(404, null, "Book not found"));
    }

    return res
        .status(200)
        .json(new ApiResponse(200, book, "Book deleted successfully"));
});

// update by id
const updateBookHandler = asyncHandler(async (req, res) => {
    const bookId = req.query.bookId;

    const book = await Book.findOne({ bookId });

    if (!book) {
        return res.status(404).json(new ApiResponse(404, book, "Book not found"))
    }

    // update with new data
    book.name = req.body.name || book.name;
    book.author = req.body.author || book.author;
    book.numberOfCopiesSold = req.body.numberOfCopiesSold || book.numberOfCopiesSold;

    const updatedBook = await book.save();
    return res
        .status(200)
        .json(new ApiResponse(200, updatedBook, "Book updated successfully"));

});

// searchbook by name
const searchBookHandler = asyncHandler(async (req, res) => {
    const bookname = req.query.bookname.replace(/\s+/g, '').toLowerCase();
    // Use the correct Mongoose method to find the book

    var book = await Book.find({ booknameMetadata: bookname });

    if (book.length == 0) {
        return res
            .status(404)
            .json(new ApiResponse(404, null, "Book not found"));
    }
    return res
        .status(200)
        .json(new ApiResponse(200, book, "Book fetched successfully"));

});


export { addBookHandler, getBookHandler, deleteBookHandler, updateBookHandler, searchBookHandler, getAllBooksHandler }
