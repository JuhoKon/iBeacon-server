import * as Controller from "../../backend/controllers/controller";
import { CORS } from "../../backend/middleware/cors";
import ErrorHandler from "../../lib/HandleError";

/**
 * @api {get}/api/beacon_info Request Beacon information
 * @apiName get beaconInfo
 * @apiGroup Beacon_Info
 *
 * @apiParam {String} groupId Group ID
 * @apiParam {String} beaconId Beacon ID
 * @apiExample {curl} Example usage:
 *    curl -i http://localhost:8080/api/beacon_info?groupId=3&beaconId=789
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *{
 *   "result":[
 *      {
 *         "id":1,
 *         "location":{
 *            "en":"Giants stairs",
 *            "fi":"Jättiläisten portaat"
 *         },
 *         "notification":{
 *            "en":"This is notification",
 *            "fi":"Tässä ilmoitus"
 *         },
 *         "conditions":[
 *
 *         ],
 *         "isExit":false
 *      },
 *      {
 *         "id":2,
 *         "location":{
 *            "fi":"Jättiläisten portaat toiseen kertaan ja exit",
 *            "en":"Giants stairs second time and exit"
 *         },
 *         "notification":{
 *            "en":"This is notification",
 *            "fi":"Tässä ilmoitus"
 *         },
 *         "conditions":[
 *            1,
 *            3
 *         ],
 *         "isExit":true
 *      }
 *   ]
 *}
 *
 */
export default async function handler(req, res) {
  await CORS(req, res);
  // Get data from your database
  if (req.method === "GET") {
    // Process a GET request
    const {
      query: { groupId, beaconId },
    } = req;
    if (!groupId || !beaconId) {
      return res
        .status(400)
        .json({ Error: "All parameters were not provided." });
    }
    try {
      const result = await Controller.getBeaconInfoShort(groupId, beaconId);
      return res.status(200).json({
        result,
      });
    } catch (error) {
      const { status, Error } = ErrorHandler(error);
      return res.status(status).json({ Error });
    }
  }
}
