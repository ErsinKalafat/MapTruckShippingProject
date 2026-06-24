import { forwardRef, useImperativeHandle, useRef } from 'react';
import MapView, { Polyline, UrlTile, type LongPressEvent } from 'react-native-maps';

import {
    INITIAL_LATITUDE,
    INITIAL_LATITUDE_DELTA,
    INITIAL_LONGITUDE,
    INITIAL_LONGITUDE_DELTA,
    MAP_FIT_PADDING,
    OSM_TILE_URL,
    ROUTE_STROKE_WIDTH,
} from '../../constants';
import { colors } from '../../theme/colors';
import { createLocation } from '../../utils/createLocation';
import { styles } from './styles';
import type { OsmMapHandle, OsmMapProps } from './types';

// iOS: mapType="none" -> Apple karoları çizilmez, sadece OpenStreetMap döşenir.
const OsmMap = forwardRef<OsmMapHandle, OsmMapProps>(({ onLongPress, route }, ref) => {
    const mapRef = useRef<MapView>(null);

    // Apple Maps "zoom" yerine "altitude" (kamera yüksekliği) kullanır.
    // Yüksekliği yarıya indirmek yakınlaştırır, iki katına çıkarmak uzaklaştırır.
    const zoomBy = async (factor: number) => {
        const camera = await mapRef.current?.getCamera();
        if (!camera?.altitude) {
            return;
        }
        mapRef.current?.animateCamera({ altitude: camera.altitude * factor });
    };

    useImperativeHandle(ref, () => ({
        zoomIn: () => zoomBy(0.5),
        zoomOut: () => zoomBy(2),
        fitToRoute: points => {
            mapRef.current?.fitToCoordinates(
                points.map(([longitude, latitude]) => ({ latitude, longitude })),
                {
                    edgePadding: {
                        top: MAP_FIT_PADDING,
                        right: MAP_FIT_PADDING,
                        bottom: MAP_FIT_PADDING,
                        left: MAP_FIT_PADDING,
                    },
                    animated: true,
                },
            );
        },
    }));

    const handleLongPress = async (event: LongPressEvent) => {
        const { latitude, longitude } = event.nativeEvent.coordinate;
        onLongPress(await createLocation(latitude, longitude));
    };

    return (
        <MapView
            ref={mapRef}
            style={styles.map}
            mapType="none"
            onLongPress={handleLongPress}
            initialRegion={{
                latitude: INITIAL_LATITUDE,
                longitude: INITIAL_LONGITUDE,
                latitudeDelta: INITIAL_LATITUDE_DELTA,
                longitudeDelta: INITIAL_LONGITUDE_DELTA,
            }}>
            <UrlTile urlTemplate={OSM_TILE_URL} />
            {route.length > 0 && (
                <Polyline
                    coordinates={route.map(([longitude, latitude]) => ({
                        latitude,
                        longitude,
                    }))}
                    strokeColor={colors.route}
                    strokeWidth={ROUTE_STROKE_WIDTH}
                />
            )}
        </MapView>
    );
});

export default OsmMap;
