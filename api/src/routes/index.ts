import express from "express";
import { add } from "../controllers/product/AddProductController";
import { get } from "../controllers/product/GetAllProductController";
import { getById } from "../controllers/product/GetProductController";
import { deleteById } from "../controllers/product/DeleteProductController";
export const router = express.Router();
router.use(express.json());

router.post("/product", add);
router.get("/product", get);
router.get("/product/:id", getById);
router.delete("/product/:id",deleteById)
