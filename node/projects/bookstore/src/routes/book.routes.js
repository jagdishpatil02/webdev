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

router.route("/addBook").post(addBookHandler);
router.route("/getBook").get(getBookHandler);
router.route("/deleteBookbyId").put(deleteBookHandler);
router.route("/updateBookbyId").delete(updateBookHandler);
router.route("/searchBook").get(searchBookHandler);
router.route("/getBooks").get(getAllBooksHandler);
router.route("/getBooksFromCategoryId").get(getAllBooksFromCategory);

// categories
router.route("/createCategory").post(createCategory);
router.route("/getCategories").get(getAllCategories);
router.route("/getCategoriesbyId").get(getCategoryById);
router.route("/updateCategorybyId").put(updateCategoryById);
router.route("/deleteCategorybyId").delete(deleteCategoryById);

export default router;
