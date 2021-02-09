//in form of /api/beacon_info?groupId=123&beaconId=123
import SFirestore from "../../backend/services/FirebaseInstance";

const FirebaseInstance = SFirestore.getInstance();

export default async function handler(req, res) {
  // Get data from your database
  if (req.method === "GET") {
    // Process a GET request
    const results = await FirebaseInstance.getLocalizations();

    res.status(200).json({ results });
  } else {
    // Handle any other HTTP method
    res.status(404).json({ Error: "That's an error." });
  }
}
