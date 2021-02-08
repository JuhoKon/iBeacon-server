import redis from "redis";

class SRedis {
  private static instance: SRedis;
  private redisClient: redis;

  private constructor() {
    const settings = {
      port: process.env.REDIS_PORT,
      host: process.env.REDIS_HOST,
    };

    const redisClient = redis.createClient(settings);
    this.redisClient = redisClient;
  }

  public static getInstance(): SRedis {
    if (!SRedis.instance) {
      SRedis.instance = new SRedis();
    }
    return SRedis.instance;
  }

  public setKey(id: string, value: any) {
    const timeToStoreSeconds = 60;
    this.redisClient.set(id, timeToStoreSeconds, JSON.stringify(value));
  }
  public async getValue(id: string): Promise<Record<string, string>> {
    return new Promise((resolve, reject) => {
      this.redisClient.get(id, (err: Error, reply: string) => {
        if (reply) {
          resolve(JSON.parse(reply));
        }
        if (err) {
          reject(err);
        }
      });
    });
  }
}
export default SRedis;
