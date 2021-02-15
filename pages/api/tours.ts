import * as Controller from "../../backend/controllers/controller";
import { CORS } from "../../backend/middleware/cors";
/**
 * @api {get}/api/tours Request localization information
 * @apiName get tours
 * @apiGroup Tours
 *
 * @apiExample {curl} Example usage:
 *    curl -i http://localhost:8080/api/tours
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "results": [
 *            {
 *            "name": {
 *                "en": "Student",
 *                "fi": "Oppilas"
 *             },
 *            "groupId": "3"
 *            },
 *            {
 *            "name": {
 *                "fi": "Opettaja",
 *                "en": "Teacher"
 *            },
 *            "groupId": "2"
 *            },
 *            {
 *            "name": {
 *                "fi": "Vierailija",
 *                "en": "Visitor"
 *            },
 *            "groupId": "1"
 *            }
 *       ]
 *    }
 *
 */
export default async function handler(req, res) {
  // Get data from your database
  if (req.method === "GET") {
    await CORS(req, res);
    // Process a GET request
    const results = await Controller.getTours();

    res.status(200).json({ results });
  }
}
