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
 * @apiParam {number{0-1}} [template] If we want extra information (for BE rendering)
 * @apiExample {curl} Example usage:
 *    curl -i http://localhost:8080/api/beacon_info?groupId=123&beaconId=123&template=1
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *{
 *  "result":{
 *      "shortDescription":{
 *         "fi":"Aula",
 *         "en":"Livingroom"
 *      },
 *      "title":{
 *         "en":"Livingroom",
 *         "fi":"Aula"
 *      },
 *      "conditions":[],
 *      "longDescription":{
 *         "fi":"Oppilaiden olohuone",
 *         "en":"Student's Livingroom"
 *      },
 *      "id":1,
 *      "beaconId":"789"
 *   }
 *}
 *
 */
export default async function handler(req, res) {
  await CORS(req, res);
  // Get data from your database
  if (req.method === "GET") {
    // Process a GET request
    const {
      query: { groupId, beaconId, template },
    } = req;
    if (!groupId || !beaconId) {
      return res
        .status(400)
        .json({ Error: "All parameters were not provided." });
    }
    const getBeaconInfo =
      template == 1
        ? Controller.getBeaconInfoFull
        : Controller.getBeaconInfoShort;
    try {
      const result = await getBeaconInfo(groupId, beaconId);
      return res.status(200).json({
        result,
      });
    } catch (error) {
      const { status, Error } = ErrorHandler(error);
      return res.status(status).json({ Error });
    }
  }
}
