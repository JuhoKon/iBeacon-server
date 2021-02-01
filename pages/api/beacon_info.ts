//in form of /api/beacon_info?groupId=123&beaconId=123

export default function handler(req, res) {
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
    console.log(groupId, beaconId);
    console.log(process.env.DB_HOST);
    res.status(200).json({ OK: process.env.DB_HOST });
  } else {
    // Handle any other HTTP method
    res.status(404).json({ Error: "That's an error." });
  }
}
