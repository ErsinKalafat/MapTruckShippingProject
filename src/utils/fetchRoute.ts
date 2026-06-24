import { OSRM_ROUTE_URL } from '../constants';
import type { Location } from '../types/location';
import type { RoutePoint } from '../types/route';
import type { OsrmResponse } from './types/osrm';

// OSRM public API'sinden A->B sürüş rotasının nokta dizisini çeker.
// İstek: /{başBoylam},{başEnlem};{bitişBoylam},{bitişEnlem}?geometries=geojson
export async function fetchRoute(
    origin: Location,
    destination: Location,
): Promise<RoutePoint[]> {
    const coordinates = `${origin.longitude},${origin.latitude};${destination.longitude},${destination.latitude}`;
    const url = `${OSRM_ROUTE_URL}/${coordinates}?geometries=geojson`;

    try {
        const response = await fetch(url);
        const data: OsrmResponse = await response.json();
        return data.routes[0]?.geometry.coordinates ?? [];
    } catch {
        return [];
    }
}
