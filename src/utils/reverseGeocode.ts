import type { NominatimResponse } from './types/nominatim';

// Koordinatı OpenStreetMap Nominatim ile ters geocode eder.
// O koordinattaki "İlçe, İl" metnini döndürür.
export async function reverseGeocode(
    latitude: number,
    longitude: number,
): Promise<string> {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1&accept-language=tr`;

    try {
        const response = await fetch(url, {
            headers: { 'User-Agent': 'MapTruckShippingProject' },
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
