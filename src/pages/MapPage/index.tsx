import { useEffect, useRef } from 'react';
import { View } from 'react-native';

import {
    HintBanner,
    JourneyInfo,
    MapControls,
    OsmMap,
    RoutePlanner,
    type OsmMapHandle,
} from '@components';
import { MAP_HINT } from '@constants';
import { useRoute } from '@hooks';
import { styles } from './styles';

// Harita platforma göre seçilir (iOS: react-native-maps, Android: MapLibre).
// Haritaya basılı tutarak (selectByMap) veya dropdown ile başlangıç/varış seçilir.
function MapPage() {
    const {
        origin,
        destination,
        route,
        durationSeconds,
        distanceMeters,
        setOrigin,
        setDestination,
        selectByMap,
        reset,
    } = useRoute();
    const mapRef = useRef<OsmMapHandle>(null);

    // Rota geldiğinde haritayı iki noktayı da görecek şekilde uzaklaştır.
    useEffect(() => {
        if (route.length > 0) {
            mapRef.current?.fitToRoute(route);
        }
    }, [route]);

    return (
        <View style={styles.container}>
            <OsmMap ref={mapRef} route={route} onLongPress={selectByMap} />
            <RoutePlanner
                origin={origin}
                destination={destination}
                onSelectOrigin={setOrigin}
                onSelectDestination={setDestination}
            />
            <MapControls
                onZoomIn={() => mapRef.current?.zoomIn()}
                onZoomOut={() => mapRef.current?.zoomOut()}
                onClear={reset}
            />
            <JourneyInfo
                origin={origin}
                destination={destination}
                durationSeconds={durationSeconds}
                distanceMeters={distanceMeters}
            />
            <HintBanner message={MAP_HINT} />
        </View>
    );
}

export default MapPage;
