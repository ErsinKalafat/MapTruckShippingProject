import type { Location } from '../../types/location';

export type OsmMapProps = {
    // Haritaya basılı tutulunca seçilen konumu bildirir.
    onLongPress: (location: Location) => void;
};

// Dışarıdan (butonlarla) haritayı kontrol etmek için imperatif arayüz.
export type OsmMapHandle = {
    zoomIn: () => void;
    zoomOut: () => void;
};
