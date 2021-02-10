import { CORS } from "../../backend/middleware/cors";

/**
 * @api {get}/api/beacon_info Request Beacon information
 * @apiName get beaconInfo
 * @apiGroup Beacon_Info
 *
 * @apiParam {String} groupId Group ID
 * @apiParam {String} beaconId Beacon ID
 * @apiParam {number{0-1}} [template] Number if we're rendering a template (extra information)
 * @apiExample {curl} Example usage:
 *    curl -i http://localhost:8080/api/beacon_info?groupId=123&beaconId=123&template=true
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "results": {
 *           "title" : "Beacon title",
 *           "desc" : "Beacon description..."
 *        }
 *
 *     }
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
    if (template == 1) {
      return res.status(200).json({
        results: { groupId, beaconId, template: "Extra stuff for you." },
      });
    }
    res.status(200).json({ data: { groupId, beaconId } });
  } else {
    // Handle any other HTTP method
    res.status(404).json({ Error: "That's an error." });
  }
}
