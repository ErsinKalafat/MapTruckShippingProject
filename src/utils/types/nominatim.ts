export type NominatimAddress = {
    town?: string;
    municipality?: string;
    city_district?: string;
    district?: string;
    county?: string;
    suburb?: string;
    village?: string;
    province?: string;
    state?: string;
    city?: string;
};

export type NominatimResponse = {
    address?: NominatimAddress;
};
