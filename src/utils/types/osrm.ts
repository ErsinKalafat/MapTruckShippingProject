import type { RoutePoint } from '../../types/route';

// OSRM public API'sinin geometries=geojson yanıtının ilgili kısmı.
export type OsrmRoute = {
    geometry: {
        coordinates: RoutePoint[];
    };
};

export type OsrmResponse = {
    routes: OsrmRoute[];
};
