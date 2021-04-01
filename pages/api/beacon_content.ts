import * as Controller from "../../backend/controllers/controller";
import { CORS } from "../../backend/middleware/cors";
import ErrorHandler from "../../lib/HandleError";

/**
 * @api {get}/api/beacon_content Request Beacon content
 * @apiName get beaconContent
 * @apiGroup Beacon_content
 *
 * @apiParam {String} groupId Group ID
 * @apiParam {String} beaconInfoId BeaconInfoID
 * @apiExample {curl} Example usage:
 *    curl -i http://localhost:8080/api/beacon_content?groupId=3&beaconInfoId=1
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *{
 *   "result":{
 *      "notification":{
 *         "en":"This is notification",
 *         "fi":"Tässä ilmoitus"
 *      },
 *      "buttonRedirectUrl":"https://www.imatra.fi/kylät-ja-kaupunginosat/mansikkala",
 *      "videoDescription":{
 *         "fi":"Videon kuvausteksti. Nam sapien urna, pharetra vel diam a, tempor placerat massa. Phasellus laoreet pellentesque magna ac porta. Duis consequat lectus et tellus sagittis blandit. In aliquam malesuada est, nec volutpat neque varius id. Nulla id sem dui. Praesent lobortis massa rutrum leo consequat feugiat. Nulla egestas bibendum placerat. Aenean at congue justo. Praesent elementum consequat ipsum. Vestibulum et efficitur justo, et pellentesque risus.",
 *         "en":"Video description. Nam sapien urna, pharetra vel diam a, tempor placerat massa. Phasellus laoreet pellentesque magna ac porta. Duis consequat lectus et tellus sagittis blandit. In aliquam malesuada est, nec volutpat neque varius id. Nulla id sem dui. Praesent lobortis massa rutrum leo consequat feugiat. Nulla egestas bibendum placerat. Aenean at congue justo. Praesent elementum consequat ipsum. Vestibulum et efficitur justo, et pellentesque risus."
 *      },
 *      "id":2,
 *      "introVideoUrl":"https://www.youtube.com/watch?v=6LZy9gPwugk",
 *      "location":{
 *         "en":"Giants stairs second time and exit",
 *         "fi":"Jättiläisten portaat toiseen kertaan ja exit"
 *      },
 *      "isExit":true,
 *      "mediaUrl":{
 *         "imageUrl":"https://storage.googleapis.com/imatra_media/images/j_portaat.jpg",
 *         "videoUrl":"https://www.youtube.com/embed/6LZy9gPwugk"
 *      },
 *      "beaconId":"789",
 *      "intro":{
 *         "en":"Intro text for page. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur lobortis lectus vel sollicitudin.",
 *         "fi":"Introteksti sivulle. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur lobortis lectus vel sollicitudin."
 *      },
 *      "conditions":[
 *         1,
 *         3
 *      ],
 *      "imageDescription":{
 *         "en":"Welcome to giants stairs! Donec mattis risus massa, ac tempor nisi suscipit et. Integer pharetra ac nisi eu congue. Fusce feugiat tortor at elit posuere, id scelerisque purus ultrices. In felis arcu, volutpat sit amet ligula nec, venenatis molestie quam. Duis ut pellentesque diam. Suspendisse potenti. Donec mattis nunc nec eros sodales, ut imperdiet ex tempus",
 *         "fi":"Tervetuloa jättiläisten portaille! Donec mattis risus massa, ac tempor nisi suscipit et. Integer pharetra ac nisi eu congue. Fusce feugiat tortor at elit posuere, id scelerisque purus ultrices. In felis arcu, volutpat sit amet ligula nec, venenatis molestie quam. Duis ut pellentesque diam. Suspendisse potenti. Donec mattis nunc nec eros sodales, ut imperdiet ex tempus."
 *      }
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
      query: { groupId, beaconInfoId },
    } = req;
    if (!groupId || !beaconInfoId) {
      return res
        .status(400)
        .json({ Error: "All parameters were not provided." });
    }
    try {
      const result = await Controller.getBeaconInfoFull(groupId, beaconInfoId);
      return res.status(200).json({
        result,
      });
    } catch (error) {
      const { status, Error } = ErrorHandler(error);
      return res.status(status).json({ Error });
    }
  }
}
