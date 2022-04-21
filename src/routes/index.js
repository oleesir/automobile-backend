import { Router } from "express";
import advertRoute from "./advertRoute.js";

const router = Router();

router.use("/adverts", advertRoute);

export default router;
