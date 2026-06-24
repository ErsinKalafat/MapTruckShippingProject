import type { Location } from '../../types/location';

export type JourneyInfoProps = {
    origin: Location | null;
    destination: Location | null;
    // OSRM'den gelen gerçek sürüş süresi (saniye).
    durationSeconds: number;
};
