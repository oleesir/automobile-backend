import { Router } from "express";
import seedCarsRoute from "./seedCarsRoute.js";
import carRoute from "./carRoute.js";

const router = Router();

// router.use("/seed", seedCarsRoute);
router.use("/advert", carRoute);

export default router;
