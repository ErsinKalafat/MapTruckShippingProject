import type { Location } from '../../types/location';

export type OsmMapProps = {
    // Haritaya basılı tutulunca seçilen konumu bildirir.
    onLongPress: (location: Location) => void;
};
