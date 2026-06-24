import type { RoutePoint } from '../../types/route';

// OSRM public API'sinin geometries=geojson yanıtının ilgili kısmı.
export type OsrmRoute = {
    geometry: {
        coordinates: RoutePoint[];
    };
    // Gerçek yol üzerinden tahmini sürüş süresi (saniye).
    duration: number;
    // Gerçek yol mesafesi (metre).
    distance: number;
};

export type OsrmResponse = {
    routes: OsrmRoute[];
};
