import { Router } from "express";
import {
  deleteBook,
  getBooks,
  getByIdBooks,
  postBooks,
  updateBooks,
} from "../service/bookService.js";

const bookRouter = new Router();

bookRouter.get("/", async (req, res) => {
  const book = await getBooks();
  res.send(book);
});
bookRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const bookById = await getByIdBooks(id);
  res.send(bookById);
});
bookRouter.post("/", async (req, res) => {
  const body = req.body;
  const newBook = await postBooks(body);
  res.send(newBook);
});
bookRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deleteResult = await deleteBook(id);
  res.send(deleteResult);
});
bookRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updateResult = await updateBooks(id, req.body);
  res.send(updateResult);
});

export default bookRouter;
