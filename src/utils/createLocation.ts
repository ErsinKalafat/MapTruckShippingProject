import type { Location } from '@app-types';
import { reverseGeocode } from './reverseGeocode';

// Haritadan seçilen koordinatı, en yakın ilçe/il adıyla birlikte Location'a çevirir.
export async function createLocation(
    latitude: number,
    longitude: number,
): Promise<Location> {
    const name = await reverseGeocode(latitude, longitude);
    return {
        id: `${latitude},${longitude}`,
        name,
        latitude,
        longitude,
    };
}
