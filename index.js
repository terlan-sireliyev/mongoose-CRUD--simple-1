import express from "express";
import envConnection from "./utils/connect.js";
import bookRouter from "./routers/bookRouter.js";
import { connectDB } from "./utils/connect.js";
const app = express();
app.use(express.json());
connectDB();
app.use("/books", bookRouter);
app.listen(envConnection, () => {
  console.log("server is up");
});
