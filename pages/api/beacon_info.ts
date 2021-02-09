//in form of /api/beacon_info?groupId=123&beaconId=123

//in form of /api/beacon_info?groupId=123&beaconId=123&template=true

/**
 * @api {get}/api/beacon_info:groupId:beaconId:template Request User information
 * @apiName get beaconInfo
 * @apiGroup Beacon_Info
 *
 * @apiParam {String} groupId Group ID
 * @apiParam {String} beaconId Beacon ID
 * @apiParam {Boolean} template Boolean if we're rendering a template (extra information)
 * @apiExample {curl} Example usage:
 *    curl -i http://localhost:8080/api/beacon_info?groupId=123&beaconId=123&template=true
 * @apiSuccess {String} beacon info...
 */
export default function handler(req, res) {
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
    if (template) {
      res.status(200).json({
        data: { groupId, beaconId, template: "Extra stuff for you." },
      });
    }
    res.status(200).json({ data: { groupId, beaconId } });
  } else {
    // Handle any other HTTP method
    res.status(404).json({ Error: "That's an error." });
  }
}
