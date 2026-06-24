import {
    Camera,
    GeoJSONSource,
    Layer,
    Map,
    type CameraRef,
    type MapRef,
    type PressEvent,
} from '@maplibre/maplibre-react-native';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import type { NativeSyntheticEvent } from 'react-native';

import {
    INITIAL_LATITUDE,
    INITIAL_LONGITUDE,
    INITIAL_ZOOM,
    MAP_FIT_PADDING,
    OSM_TILE_SIZE,
    OSM_TILE_URL,
    ROUTE_STROKE_WIDTH,
} from '../../constants';
import { colors } from '../../theme/colors';
import { createLocation } from '../../utils/createLocation';
import { styles } from './styles';
import type { OsmMapHandle, OsmMapProps } from './types';

// Android: boş tuval + sadece OpenStreetMap karoları. Google yok, API key gerekmez.
const OsmMap = forwardRef<OsmMapHandle, OsmMapProps>(({ onLongPress, route }, ref) => {
    const mapRef = useRef<MapRef>(null);
    const cameraRef = useRef<CameraRef>(null);

    const zoomBy = async (delta: number) => {
        const zoom = await mapRef.current?.getZoom();
        if (zoom === undefined) {
            return;
        }
        cameraRef.current?.zoomTo(zoom + delta);
    };

    useImperativeHandle(ref, () => ({
        zoomIn: () => zoomBy(1),
        zoomOut: () => zoomBy(-1),
        fitToRoute: points => {
            if (points.length === 0) {
                return;
            }
            const lngs = points.map(([longitude]) => longitude);
            const lats = points.map(([, latitude]) => latitude);
            cameraRef.current?.fitBounds(
                [Math.min(...lngs), Math.min(...lats), Math.max(...lngs), Math.max(...lats)],
                {
                    padding: {
                        top: MAP_FIT_PADDING,
                        right: MAP_FIT_PADDING,
                        bottom: MAP_FIT_PADDING,
                        left: MAP_FIT_PADDING,
                    },
                },
            );
        },
    }));

    const handleLongPress = async (event: NativeSyntheticEvent<PressEvent>) => {
        const [longitude, latitude] = event.nativeEvent.lngLat;
        onLongPress(await createLocation(latitude, longitude));
    };

    return (
        <Map
            ref={mapRef}
            style={styles.map}
            onLongPress={handleLongPress}
            mapStyle={{
                version: 8,
                sources: {
                    osm: {
                        type: 'raster',
                        tiles: [OSM_TILE_URL],
                        tileSize: OSM_TILE_SIZE,
                    },
                },
                layers: [{ id: 'osm', type: 'raster', source: 'osm' }],
            }}>
            <Camera
                ref={cameraRef}
                center={[INITIAL_LONGITUDE, INITIAL_LATITUDE]}
                zoom={INITIAL_ZOOM}
            />
            {route.length > 0 && (
                <GeoJSONSource
                    id="route"
                    data={{
                        type: 'Feature',
                        properties: {},
                        geometry: { type: 'LineString', coordinates: route },
                    }}>
                    <Layer
                        id="route-line"
                        type="line"
                        source="route"
                        paint={{
                            'line-color': colors.route,
                            'line-width': ROUTE_STROKE_WIDTH,
                        }}
                    />
                </GeoJSONSource>
            )}
        </Map>
    );
});

export default OsmMap;
