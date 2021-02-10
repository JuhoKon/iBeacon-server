import Cors from "cors";
import { runMiddleware } from "../helpers/middleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

export const CORS = async (req, res) => {
  await runMiddleware(req, res, cors);
};
