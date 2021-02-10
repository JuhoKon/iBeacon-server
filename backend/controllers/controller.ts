import { LOCALIZATION } from "../../lib/Constants";
import SFirestore from "../DAL/FirebaseInstance";
import SRedis from "../DAL/RedisInstance";

const RedisInstance = SRedis.getInstance();
const FirebaseInstance = SFirestore.getInstance();

export const getLocalizations = async () => {
  const resultsFromCache = await RedisInstance.getValue(LOCALIZATION);
  if (resultsFromCache) {
    console.log("Returning cache value.");
    return resultsFromCache;
  }
  console.log("Loading from DB.");
  const results = await FirebaseInstance.getLocalizations();
  RedisInstance.setKey(LOCALIZATION, results);
  return results;
};
