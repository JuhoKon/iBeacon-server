import redis from "redis";
import { CACHE_TTL_SECONDS } from "../../lib/Constants";

function log(type) {
  return function () {
    console.log(type, arguments);
  };
}
class SRedis {
  private static instance: SRedis;
  private redisClient: redis.RedisClient;

  private constructor() {
    const redisPort = parseInt(process.env.REDIS_PORT);
    const redisHost = process.env.REDIS_HOST;
    const redisClient = redis.createClient(redisPort, redisHost);
    redisClient.on("ready", log("ready"));
    redisClient.on("error", log("error"));
    this.redisClient = redisClient;
  }

  public static getInstance(): SRedis {
    if (!SRedis.instance) {
      SRedis.instance = new SRedis();
    }
    return SRedis.instance;
  }

  public setKey(id: string, value: any) {
    this.redisClient.SETEX(id, CACHE_TTL_SECONDS, JSON.stringify(value));
  }

  public async getValue(id: string): Promise<unknown> {
    return new Promise((resolve, reject) => {
      this.redisClient.GET(id, (err: Error, reply: string) => {
        if (reply) {
          resolve(JSON.parse(reply));
        }
        if (err) {
          reject(err);
        }
        // no key yet on this ID
        resolve(null);
      });
    });
  }
}
export default SRedis;
