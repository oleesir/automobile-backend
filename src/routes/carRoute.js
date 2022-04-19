import { Router } from "express";
import { createAdvert, getAdvert, removeAdvert } from "../controllers/carController.js";
import { uploadFile } from "../helper/multer.js";

const router = Router();

router.post("/", uploadFile.single("photo"), createAdvert);
router.get("/:id", getAdvert);
router.delete("/:id", removeAdvert);

export default router;
