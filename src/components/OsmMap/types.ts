import type { Location } from '../../types/location';
import type { RoutePoint } from '../../types/route';

export type OsmMapProps = {
    // Haritaya basılı tutulunca seçilen konumu bildirir.
    onLongPress: (location: Location) => void;
    // Haritada çizilecek rota noktaları ([boylam, enlem]).
    route: RoutePoint[];
};

// Dışarıdan (butonlarla) haritayı kontrol etmek için imperatif arayüz.
export type OsmMapHandle = {
    zoomIn: () => void;
    zoomOut: () => void;
};
