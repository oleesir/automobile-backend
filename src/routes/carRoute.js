import { Router } from "express";
import { createAdvert, getAdvert, removeAdvert, getAllAdvert } from "../controllers/carController.js";
import { createAdvertSchema } from "../schema/carSchema.js";
import validateResult from "../middleware/validator.js";
import { uploadFile } from "../helper/multer.js";

const router = Router();

router.post("/", uploadFile.single("photo"), createAdvertSchema, validateResult, createAdvert);
router.get("/", getAllAdvert);
router.get("/:id", getAdvert);
router.delete("/:id", removeAdvert);

export default router;
