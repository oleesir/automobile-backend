import "core-js/stable";
import "regenerator-runtime/runtime";
import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import { database } from "./database/index";
import sendError from "./helper/sendError.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

// const corsOptions = { credentials: true, origin: "http://localhost:3000" };

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

database();
//API
app.use("/api/v1", routes);

app.get("/", async (req, res) => {
	return res.status(200).send({
		message: "AUTOMOBILE BACKEND",
	});
});
app.use(sendError);

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
