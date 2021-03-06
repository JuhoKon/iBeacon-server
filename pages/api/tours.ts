import * as Controller from "../../backend/controllers/controller";
import { CORS } from "../../backend/middleware/cors";
/**
 * @api {get}/api/tours Request tours
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
 *              "name": {
 *                 "en": "Rakennuttaja",
 *                 "fi": "Constructor"
 *               },
 *              "groupId": "3"
 *              "mapUrl": "mapUrl.com",
 *              "feedbackUrl": "feedbackUrl.com",
 *              "beaconInfoIds": [
 *               "789"
 *              ]
 *            },
 *            {
 *              "name": {
 *                 "fi": "Opettaja",
 *                 "en": "Teacher"
 *               },
 *              "groupId": "2"
 *              "mapUrl": "mapUrl.com",
 *              "feedbackUrl": "feedbackUrl.com",
 *              "beaconInfoIds": [
 *                "123"
 *              ]
 *            },
 *            {
 *              "name": {
 *                  "fi": "Vierailija",
 *                  "en": "Visitor"
 *              },
 *              "groupId": "1"
 *              "mapUrl": "mapUrl.com",
 *              "feedbackUrl": "feedbackUrl.com",
 *              "beaconInfoIds": [
 *                "456"
 *                ]
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
