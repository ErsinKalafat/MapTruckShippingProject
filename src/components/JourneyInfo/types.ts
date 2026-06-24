import type { Location } from '@app-types';

export type JourneyInfoProps = {
    origin: Location | null;
    destination: Location | null;
    // OSRM'den gelen gerçek sürüş süresi (saniye).
    durationSeconds: number;
    // OSRM'den gelen gerçek yol mesafesi (metre).
    distanceMeters: number;
};
