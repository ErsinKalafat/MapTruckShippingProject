import { useEffect, useState } from 'react';

import type { Location } from '../types/location';
import type { RoutePoint } from '../types/route';
import { fetchRoute } from '../utils/fetchRoute';

export function useRoute() {
    const [origin, setOrigin] = useState<Location | null>(null);
    const [destination, setDestination] = useState<Location | null>(null);
    const [route, setRoute] = useState<RoutePoint[]>([]);

    // A ve B noktası belirlenince OSRM'den rotayı çek; eksikse rotayı temizle.
    useEffect(() => {
        if (origin && destination) {
            fetchRoute(origin, destination).then(setRoute);
        } else {
            setRoute([]);
        }
    }, [origin, destination]);

    // Haritaya basılı tutarak seçim mantığı:
    // - origin boşsa -> seçilen yer origin olur.
    // - origin dolu, destination boşsa -> seçilen yer destination olur.
    // - ikisi de doluysa -> stateler sıfırlanır, seçilen yer yeni origin olur.
    const selectByMap = (location: Location) => {
        if (!origin) {
            setOrigin(location);
        } else if (!destination) {
            setDestination(location);
        } else {
            setOrigin(location);
            setDestination(null);
        }
    };

    // Başlangıç ve varışı temizler.
    const reset = () => {
        setOrigin(null);
        setDestination(null);
    };

    return { origin, destination, route, setOrigin, setDestination, selectByMap, reset };
}
