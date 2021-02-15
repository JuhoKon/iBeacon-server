import { Firestore } from "@google-cloud/firestore";
import { LOCALIZATION, NOT_FOUND, TOURS } from "../../lib/Constants";
import { BeaconInfo, Tour } from "../../lib/Types";

class SFirestore {
  private static instance: SFirestore;
  private firestore: Firestore;

  private constructor() {
    const firestore = new Firestore();
    this.firestore = firestore;
  }

  public static getInstance(): SFirestore {
    if (!SFirestore.instance) {
      SFirestore.instance = new SFirestore();
    }
    return SFirestore.instance;
  }

  public async getLocalizations(): Promise<Record<string, string>> {
    // TODO error handling and typing
    let obj = {};
    const snapshot = await this.firestore.collection(LOCALIZATION).get();

    snapshot.docs.forEach((doc) => {
      obj[doc.id] = doc.data();
    });
    return obj;
  }
  public async getTours(): Promise<any> {
    const snapshot = await this.firestore.collection(TOURS).get();
    const data = snapshot.docs.map((doc) => {
      const document = doc.data();
      return {
        name: document["name"],
        groupId: document["groupId"],
      };
    });
    return data;
  }
  public async getBeaconInfoFull(
    groupId: string,
    beaconId: string
  ): Promise<BeaconInfo> {
    const snapshot = await this.firestore
      .collection(TOURS)
      .where("groupId", "==", groupId)
      .get();
    if (snapshot.docs[0]) {
      const document = snapshot.docs[0].data() as Tour;
      const beaconInfo = document.beaconInfos.find(
        (beaconInfo) => beaconInfo.beaconId === beaconId
      );
      if (beaconInfo) {
        return beaconInfo;
      }
    }
    throw Error(NOT_FOUND);
  }
  public async getBeaconInfoShort(
    groupId: string,
    beaconId: string
  ): Promise<any> {
    const snapshot = await this.firestore
      .collection(TOURS)
      .where("groupId", "==", groupId)
      .get();
    if (snapshot.docs[0]) {
      const document = snapshot.docs[0].data() as Tour;
      const beaconInfo = document.beaconInfos.find(
        (beaconInfo) => beaconInfo.beaconId === beaconId
      );
      if (beaconInfo) {
        return {
          title: beaconInfo.title,
          shortDescription: beaconInfo.shortDescription,
          beaconId: beaconInfo.beaconId,
          conditions: beaconInfo.conditions,
        };
      }
    }
    throw Error(NOT_FOUND);
  }
  // setup listener for changes in documents by collections
  // also can update redis-keys for them
}
export default SFirestore;
