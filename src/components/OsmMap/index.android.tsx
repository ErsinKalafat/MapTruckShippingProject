import { Camera, Map, type PressEvent } from '@maplibre/maplibre-react-native';
import type { FC } from 'react';
import type { NativeSyntheticEvent } from 'react-native';

import {
    INITIAL_LATITUDE,
    INITIAL_LONGITUDE,
    INITIAL_ZOOM,
    OSM_TILE_SIZE,
    OSM_TILE_URL,
} from '../../constants';
import { createLocation } from '../../utils/createLocation';
import { styles } from './styles';
import type { OsmMapProps } from './types';

// Android: boş tuval + sadece OpenStreetMap karoları. Google yok, API key gerekmez.
const OsmMap: FC<OsmMapProps> = ({ onLongPress }) => {
    const handleLongPress = async (event: NativeSyntheticEvent<PressEvent>) => {
        const [longitude, latitude] = event.nativeEvent.lngLat;
        onLongPress(await createLocation(latitude, longitude));
    };

    return (
        <Map
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
            <Camera center={[INITIAL_LONGITUDE, INITIAL_LATITUDE]} zoom={INITIAL_ZOOM} />
        </Map>
    );
};

export default OsmMap;
