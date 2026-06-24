import { APP_USER_AGENT, NOMINATIM_REVERSE_URL } from '../constants';
import type { NominatimResponse } from './types/nominatim';

// Koordinatı OpenStreetMap Nominatim ile ters geocode eder.
// O koordinattaki "İlçe, İl" metnini döndürür.
export async function reverseGeocode(
    latitude: number,
    longitude: number,
): Promise<string> {
    const url = `${NOMINATIM_REVERSE_URL}?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1&accept-language=tr`;

    try {
        const response = await fetch(url, {
            headers: { 'User-Agent': APP_USER_AGENT },
        });
        const data = (await response.json()) as NominatimResponse;
        const address = data.address ?? {};

        const district =
            address.town ??
            address.municipality ??
            address.city_district ??
            address.district ??
            address.county ??
            address.suburb ??
            address.village;
        const province = address.province ?? address.state ?? address.city;

        return [district, province].filter(Boolean).join(', ') || 'Konum bulunamadı';
    } catch {
        return 'Konum bulunamadı';
    }
}
