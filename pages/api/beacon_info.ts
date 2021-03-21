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
 *   "id": 1,
 *   "imageDescription": {
 *       "en": "Welcome to giants stairs! Donec mattis risus massa, ac tempor nisi suscipit et. Integer pharetra ac nisi eu congue. Fusce feugiat tortor at elit posuere, id scelerisque purus ultrices. In felis arcu, volutpat sit amet ligula nec, venenatis molestie quam. Duis ut pellentesque diam. Suspendisse potenti. Donec mattis nunc nec eros sodales, ut imperdiet ex tempus",
 *       "fi": "Tervetuloa jättiläisten portaille! Donec mattis risus massa, ac tempor nisi suscipit et. Integer pharetra ac nisi eu congue. Fusce feugiat tortor at elit posuere, id scelerisque purus ultrices. In felis arcu, volutpat sit amet ligula nec, venenatis molestie quam. Duis ut pellentesque diam. Suspendisse potenti. Donec mattis nunc nec eros sodales, ut imperdiet ex tempus."
 *   },
 *   "buttonRedirectUrl": "https://www.imatra.fi/kylät-ja-kaupunginosat/mansikkala",
 *   "conditions": [],
 *   "notification": {
 *       "fi": "Tässä ilmoitus",
 *       "en": "This is notification"
 *   },
 *   "mediaUrl": {
 *       "videoUrl": "https://www.youtube.com/embed/6LZy9gPwugk",
 *       "imageUrl": "https://storage.googleapis.com/beaconinfomedia/images/638A9916.jpg"
 *   },
 *   "beaconId": "789",
 *   "videoDescription": {
 *       "en": "Video description. Nam sapien urna, pharetra vel diam a, tempor placerat massa. Phasellus laoreet pellentesque magna ac porta. Duis consequat lectus et tellus sagittis blandit. In aliquam malesuada est, nec volutpat neque varius id. Nulla id sem dui. Praesent lobortis massa rutrum leo consequat feugiat. Nulla egestas bibendum placerat. Aenean at congue justo. Praesent elementum consequat ipsum. Vestibulum et efficitur justo, et pellentesque risus.",
 *       "fi": "Videon kuvausteksti. Nam sapien urna, pharetra vel diam a, tempor placerat massa. Phasellus laoreet pellentesque magna ac porta. Duis consequat lectus et tellus sagittis blandit. In aliquam malesuada est, nec volutpat neque varius id. Nulla id sem dui. Praesent lobortis massa rutrum leo consequat feugiat. Nulla egestas bibendum placerat. Aenean at congue justo. Praesent elementum consequat ipsum. Vestibulum et efficitur justo, et pellentesque risus."
 *   },
 *   "location": {
 *       "en": "Giants stairs",
 *       "fi": "Jättiläisten portaat"
 *   },
 *   "intro": {
 *       "en": "Intro text for page. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur lobortis lectus vel sollicitudin.",
 *       "fi": "Introteksti sivulle. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur lobortis lectus vel sollicitudin."
 *   },
 *   "isExit": false
 *
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
