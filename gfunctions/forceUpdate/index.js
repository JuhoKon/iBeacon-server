const redis = require("redis");

const REDISHOST = process.env.REDIS_HOST || "localhost";
const REDISPORT = process.env.REDIS_PORT || 6379;

const redisClient = redis.createClient(REDISPORT, REDISHOST);
redisClient.on("error", (err) => console.error("ERR:REDIS:", err));

exports.forceUpdate = async (req, res) => {
  try {
    redisClient.flushall();
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`OK`);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};
