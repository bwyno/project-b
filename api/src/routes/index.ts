import express from "express";
import { add } from "../controllers/product/AddProductController";
import { get } from "../controllers/product/GetAllProductController";
import { getById } from "../controllers/product/GetProductController";
import { deleteById } from "../controllers/product/DeleteProductController";
import { updateById } from "../controllers/product/UpdateProductController";
export const router = express.Router();
router.use(express.json());

router.post("/products", add);
router.get("/products", get);
router.get("/products/:id", getById);
router.delete("/products/:id", deleteById);
router.put("/products/:id", updateById);
