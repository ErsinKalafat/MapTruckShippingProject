import { useState } from 'react';

import type { Location } from '../types/location';

export function useRoute() {
    const [origin, setOrigin] = useState<Location | null>(null);
    const [destination, setDestination] = useState<Location | null>(null);

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

    return { origin, destination, setOrigin, setDestination, selectByMap, reset };
}
