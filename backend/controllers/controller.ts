import { LOCALIZATION, TOURS } from "../../lib/Constants";
import SFirestore from "../DAL/FirebaseInstance";
import SRedis from "../DAL/RedisInstance";

const RedisInstance = SRedis.getInstance();
const FirebaseInstance = SFirestore.getInstance();

export const getLocalizations = async () => {
  const resultsFromCache = await RedisInstance.getValue(LOCALIZATION);
  if (resultsFromCache) {
    console.log(`Returning cache value for ${LOCALIZATION}`);
    return resultsFromCache;
  }
  console.log("Loading from DB.");
  const results = await FirebaseInstance.getLocalizations();
  RedisInstance.setKey(LOCALIZATION, results);
  return results;
};

export const getTours = async () => {
  const resultsFromCache = await RedisInstance.getValue(TOURS);
  if (resultsFromCache) {
    console.log(`Returning cache value for ${TOURS}`);
    return resultsFromCache;
  }
  console.log("Loading from DB.");
  const results = await FirebaseInstance.getTours();
  RedisInstance.setKey(TOURS, results);
  return results;
};

export const getBeaconInfoFull = async (groupId: string, beaconId: string) => {
  console.log(groupId, beaconId);
  const cacheKey = `g:${groupId}b:${beaconId}:full`;
  const resultsFromCache = await RedisInstance.getValue(cacheKey);
  if (resultsFromCache) {
    console.log(`Returning cache value for ${cacheKey}`);
    return resultsFromCache;
  }
  console.log("Loading from DB.");
  const results = await FirebaseInstance.getBeaconInfoFull(groupId, beaconId);
  RedisInstance.setKey(cacheKey, results);
  return results;
};

export const getBeaconInfoShort = async (groupId: string, beaconId: string) => {
  const cacheKey = `g:${groupId}b:${beaconId}:short`;
  const resultsFromCache = await RedisInstance.getValue(cacheKey);
  if (resultsFromCache) {
    console.log(`Returning cache value for ${cacheKey}`);
    return resultsFromCache;
  }
  console.log("Loading from DB.");
  const results = await FirebaseInstance.getBeaconInfoShort(groupId, beaconId);
  RedisInstance.setKey(cacheKey, results);
  return results;
};
