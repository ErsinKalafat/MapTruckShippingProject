import { AVERAGE_SPEED_KMH, EARTH_RADIUS_KM } from '../constants';
import type { Location } from '../types/location';

// İki konum arası kuş uçuşu mesafe (haversine), km cinsinden.
function distanceKm(origin: Location, destination: Location): number {
    const toRad = (value: number) => (value * Math.PI) / 180;
    const dLat = toRad(destination.latitude - origin.latitude);
    const dLon = toRad(destination.longitude - origin.longitude);
    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(toRad(origin.latitude)) *
        Math.cos(toRad(destination.latitude)) *
        Math.sin(dLon / 2) ** 2;
    return EARTH_RADIUS_KM * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// Mesafe ve ortalama hızdan tahmini süreyi "sa/dk" metni olarak döndürür.
export function estimateDuration(origin: Location, destination: Location): string {
    const totalMinutes = Math.round((distanceKm(origin, destination) / AVERAGE_SPEED_KMH) * 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return hours > 0 ? `${hours} sa ${minutes} dk` : `${minutes} dk`;
}
