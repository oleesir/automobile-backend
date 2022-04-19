import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import { database } from "./database/index";
import connect from "./database/index";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
// connect(process.env.MONGO_URI);
database();
//API
app.use("/api/v1", routes);

app.get("/", async (req, res) => {
	return res.status(200).send({
		message: "AUTOMOBILE BACKEND",
	});
});

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
