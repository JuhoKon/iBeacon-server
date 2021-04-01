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
 * {
 *   "results":[
 *      {
 *         "name":{
 *            "fi":"Rakennuttaja",
 *            "en":"Contractor"
 *         },
 *         "groupId":"3",
 *         "mapUrl":"https://st.depositphotos.com/1172692/1379/v/950/depositphotos_13793704-stock-illustration-abstract-city-map-vector-illustration.jpg",
 *         "feedbackUrl":"",
 *         "beaconIds":[
 *            "789",
 *            "789",
 *            "3092"
 *         ],
 *         "beaconInfoIds":[
 *            1,
 *            2,
 *            3
 *         ],
 *         "introVideoUrl":"https://www.youtube.com/watch?v=6LZy9gPwugk"
 *      },
 *      {
 *         "name":{
 *            "en":"Parent",
 *            "fi":"Vanhempi"
 *         },
 *         "groupId":"1",
 *         "mapUrl":"https://st.depositphotos.com/1172692/1379/v/950/depositphotos_13793704-stock-illustration-abstract-city-map-vector-illustration.jpg",
 *         "feedbackUrl":"",
 *         "beaconIds":[
 *            "789"
 *         ],
 *         "beaconInfoIds":[
 *            3
 *         ],
 *         "introVideoUrl":"https://www.youtube.com/watch?v=6LZy9gPwugk"
 *      },
 *      {
 *         "name":{
 *            "en":"Teacher",
 *            "fi":"Opettaja"
 *         },
 *         "groupId":"2",
 *         "mapUrl":"https://st.depositphotos.com/1172692/1379/v/950/depositphotos_13793704-stock-illustration-abstract-city-map-vector-illustration.jpg",
 *         "feedbackUrl":"",
 *         "beaconIds":[
 *            "789"
 *         ],
 *         "beaconInfoIds":[
 *            2
 *         ],
 *         "introVideoUrl":"https://www.youtube.com/watch?v=6LZy9gPwugk"
 *      }
 *   ]
 *}
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
