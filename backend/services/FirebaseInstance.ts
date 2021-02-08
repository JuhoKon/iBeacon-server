import { Firestore } from "@google-cloud/firestore";
import { LOCALIZATION } from "../../lib/Constants";
import SRedis from "./RedisInstance";

class SFirestore {
  private static instance: SFirestore;
  private firestore: Firestore;
  private redisClient: SRedis;

  private constructor() {
    const firestore = new Firestore();
    const RedisInstance = SRedis.getInstance();
    this.firestore = firestore;
    this.redisClient = RedisInstance;
  }

  public static getInstance(): SFirestore {
    if (!SFirestore.instance) {
      SFirestore.instance = new SFirestore();
    }
    return SFirestore.instance;
  }

  public async getLocalizations(): Promise<any> {
    // TODO error handling
    const valueFromCache = await this.redisClient.getValue(LOCALIZATION);
    if (valueFromCache) {
      console.log("Serving from cache");
      return { valueFromCache };
    }
    const snapshot = await this.firestore.collection(LOCALIZATION).get();
    const data = snapshot.docs.map((doc) => {
      return { localizationId: doc.id, ...doc.data() };
    });
    this.redisClient.setKey(LOCALIZATION, data);
    return data;
  }

  // setup listener for changes in documents by collections
  // also can update redis-keys for them
}
export default SFirestore;
