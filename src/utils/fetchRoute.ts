import { OSRM_ROUTE_URL } from '../constants';
import type { Location } from '../types/location';
import type { RouteResult } from '../types/route';
import type { OsrmResponse } from './types/osrm';

// OSRM public API'sinden A->B sürüş rotasını (noktalar + süre) çeker.
// İstek: /{başBoylam},{başEnlem};{bitişBoylam},{bitişEnlem}?geometries=geojson
export async function fetchRoute(
    origin: Location,
    destination: Location,
): Promise<RouteResult> {
    const coordinates = `${origin.longitude},${origin.latitude};${destination.longitude},${destination.latitude}`;
    const url = `${OSRM_ROUTE_URL}/${coordinates}?geometries=geojson`;

    try {
        const response = await fetch(url);
        const data: OsrmResponse = await response.json();
        const route = data.routes[0];
        return {
            coordinates: route?.geometry.coordinates ?? [],
            durationSeconds: route?.duration ?? 0,
        };
    } catch {
        return { coordinates: [], durationSeconds: 0 };
    }
}
