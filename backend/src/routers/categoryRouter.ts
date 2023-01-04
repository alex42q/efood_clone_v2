import { Router } from "express";
const router = Router();
import { AddCreateNewCategory, GetAllCategories } from "../controllers/categoryController";

router.post("/api/v1/category/create", AddCreateNewCategory);
router.get("/api/v1/categories", GetAllCategories)

export default router;