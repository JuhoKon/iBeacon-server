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
      const document = doc.data() as Tour;
      const beaconInfos = document["beaconInfos"];
      const beaconInfoIds = beaconInfos.map((beaconInfo: BeaconInfo) => {
        return beaconInfo.id;
      });
      const beaconIds = beaconInfos.map((beaconInfo: BeaconInfo) => {
        return beaconInfo.beaconId;
      });
      return {
        name: document.name,
        groupId: document.groupId,
        mapUrl: document.mapUrl,
        feedbackUrl: document.feedbackUrl,
        beaconIds: beaconIds,
        beaconInfoIds: beaconInfoIds,
        introVideoUrl: document.introVideoUrl,
      };
    });
    return data;
  }
  public async getBeaconInfoFull(
    groupId: string,
    beaconInfoId: string
  ): Promise<BeaconInfo> {
    const snapshot = await this.firestore
      .collection(TOURS)
      .where("groupId", "==", groupId)
      .get();
    if (snapshot.docs[0]) {
      const document = snapshot.docs[0].data() as Tour;
      const beaconInfo = document.beaconInfos.find(
        (beaconInfo) => beaconInfo.id.toString() === beaconInfoId
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
      const beaconInfos = document.beaconInfos.filter(
        (beaconInfo) => beaconInfo.beaconId === beaconId
      );
      const beaconInfo = beaconInfos.map((beaconInfo) => {
        return {
          id: beaconInfo.id,
          location: beaconInfo.location,
          notification: beaconInfo.notification,
          conditions: beaconInfo.conditions,
          isExit: beaconInfo.isExit,
        };
      });
      if (beaconInfo && beaconInfo.length > 0) {
        return beaconInfo;
      }
    }
    throw Error(NOT_FOUND);
  }
}
export default SFirestore;
