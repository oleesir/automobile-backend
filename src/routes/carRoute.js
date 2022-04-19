import { Router } from "express";
import { createAdvert } from "../controllers/carController.js";
import { uploadFile } from "../helper/multer.js";

const router = Router();

router.post("/", uploadFile.single("photo"), createAdvert);

export default router;
