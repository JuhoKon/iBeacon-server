export interface Tour {
  name: Locale;
  groupId: string;
  beaconInfos?: BeaconInfo[];
  mapUrl?: string;
  feedbackUrl?: string;
  introVideoUrl?: string;
}
export interface BeaconInfo {
  beaconId: string;
  buttonRedirectUrl?: string;
  conditions?: number[];
  id: number;
  imageDescription?: Locale;
  intro?: Locale;
  location?: Locale;
  mediaUrl?: {
    imageUrl?: string;
    videoUrl?: string;
  };
  notification?: Locale;
  videoDescription?: Locale;
  isExit?: boolean;
}

interface Locale {
  en: string;
  fi: string;
}
