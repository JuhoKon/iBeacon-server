export interface Tour {
  name: Locale;
  groupId: string;
  beaconInfos: BeaconInfo[];
}
export interface BeaconInfo {
  title: Locale;
  id: number;
  beaconId: string;
  conditions: number[];
  longDescription: Locale;
  shortDescription: Locale;
}

interface Locale {
  en: string;
  fi: string;
}
