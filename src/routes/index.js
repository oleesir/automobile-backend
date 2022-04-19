import { Router } from "express";
import carRoute from "./carRoute.js";

const router = Router();

router.use("/advert", carRoute);

export default router;
