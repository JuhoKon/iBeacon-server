import { Firestore } from "@google-cloud/firestore";
import { LOCALIZATION } from "../../lib/Constants";
import SRedis from "./RedisInstance";

class SFirestore {
  private static instance: SFirestore;
  private firestore: Firestore;
  private redisInstance: SRedis;

  private constructor() {
    const firestore = new Firestore();
    const RedisInstance = SRedis.getInstance();
    this.firestore = firestore;
    this.redisInstance = RedisInstance;
  }

  public static getInstance(): SFirestore {
    if (!SFirestore.instance) {
      SFirestore.instance = new SFirestore();
    }
    return SFirestore.instance;
  }

  public async getLocalizations(): Promise<any> {
    // TODO error handling
    const valueFromCache = await this.redisInstance
      .getValue(LOCALIZATION)
      .catch((e) => {
        console.log(e);
      });
    if (valueFromCache) {
      console.log("Serving from cache");
      return valueFromCache;
    }
    let obj = {};
    const snapshot = await this.firestore.collection(LOCALIZATION).get();
    /*     const data = snapshot.docs.map((doc) => {
      return { localization: doc.id, ...doc.data() };
    }); */
    snapshot.docs.forEach((doc) => {
      obj[doc.id] = doc.data();
    });
    this.redisInstance.setKey(LOCALIZATION, obj);
    return obj;
  }

  // setup listener for changes in documents by collections
  // also can update redis-keys for them
}
export default SFirestore;
