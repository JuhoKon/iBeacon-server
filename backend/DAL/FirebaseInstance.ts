import { Firestore } from "@google-cloud/firestore";
import { LOCALIZATION } from "../../lib/Constants";

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

  // setup listener for changes in documents by collections
  // also can update redis-keys for them
}
export default SFirestore;
