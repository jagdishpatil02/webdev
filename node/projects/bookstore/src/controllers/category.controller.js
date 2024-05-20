import { Book } from "../models/book.model.js";
import { Category } from "../models/category.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createCategory = asyncHandler(async (req, res) => {
  const { categoryName } = req.body;
  if (!categoryName) {
    throw new ApiError(400, "Category name is required");
  }

  const existedError = await Category.findOne({ $or: [{ categoryName }] });
  if (existedError) {
    throw new ApiError(400, "categoryName already exists");
  }

  const category = await Category.create({ categoryName });

  return res
    .status(200)
    .json(new ApiResponse(200, category, "Category added successfully"));
});

const getAllCategories = asyncHandler(async (req, res) => {
  // Use the correct Mongoose method to find the book
  const book = await Category.find({});
  if (!book) {
    return res
      .status(404)
      .json(new ApiResponse(404, null, "Categories not found"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, book, "Categories fetched successfully"));
});

const getCategoryById = asyncHandler(async (req, res) => {
  const categoryId = req.query.categoryId;
  // Use the correct Mongoose method to find the book
  const book = await Category.findOne({ _id: categoryId });
  if (!book) {
    return res
      .status(404)
      .json(new ApiResponse(404, null, "categoryId not found"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, book, "categoryId fetched successfully"));
});

const updateCategoryById = asyncHandler(async (req, res) => {
  const categoryId = req.query.categoryId;

  const category = await Category.findOne({ _id: categoryId });

  if (!category) {
    return res
      .status(404)
      .json(new ApiResponse(404, category, "Category not found"));
  }

  category.categoryName = req.body.categoryName || category.categoryName;

  const updatedCategory = await category.save();
  return res
    .status(200)
    .json(
      new ApiResponse(200, updatedCategory, "Category updated successfully")
    );
});

const deleteCategoryById = asyncHandler(async (req, res) => {
  const categoryId = req.query.categoryId;
  // Use the correct Mongoose method to find the book
  const category = await Category.deleteOne({ _id: categoryId });
  if (!category) {
    return res
      .status(404)
      .json(new ApiResponse(404, null, "Category not found"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, category, "Category deleted successfully"));
});

const getAllBooksFromCategory = asyncHandler(async (req, res) => {
  const categoryId = req.query.categoryId;
  // Use the correct Mongoose method to find the book
  const book = await Book.find({ category: categoryId });
  if (!book) {
    return res
      .status(404)
      .json(new ApiResponse(404, null, "categoryId not found"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, book, "categoryId fetched successfully"));
});

export {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
  getAllBooksFromCategory,
};
