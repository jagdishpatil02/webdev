import { Router } from "express";
import {
  addBookHandler,
  deleteBookHandler,
  getAllBooksHandler,
  getBookHandler,
  searchBookHandler,
  updateBookHandler,
} from "../controllers/book.controller.js";
import {
  createCategory,
  deleteCategoryById,
  getAllBooksFromCategory,
  getAllCategories,
  getCategoryById,
  updateCategoryById,
} from "../controllers/category.controller.js";

const router = Router();

router.route("/addbook").post(addBookHandler);
router.route("/getbook").get(getBookHandler);
router.route("/deletebook").put(deleteBookHandler);
router.route("/updatebook").delete(updateBookHandler);
router.route("/searchbook").get(searchBookHandler);
router.route("/getbooks").get(getAllBooksHandler);
router.route("/getbooksByCategory").get(getAllBooksFromCategory);

// categories
router.route("/addCategory").post(createCategory);
router.route("/getCategories").get(getAllCategories);
router.route("/getCategory").get(getCategoryById);
router.route("/updateCategory").put(updateCategoryById);
router.route("/deleteCategory").delete(deleteCategoryById);

export default router;
