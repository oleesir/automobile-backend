import { Router } from "express";
import seedCarsRoute from "./seedCarsRoute.js";

const router = Router();

router.use("/seed", seedCarsRoute);

export default router;
