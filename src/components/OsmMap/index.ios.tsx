import type { FC } from 'react';
import MapView, { UrlTile, type LongPressEvent } from 'react-native-maps';

import {
    INITIAL_LATITUDE,
    INITIAL_LATITUDE_DELTA,
    INITIAL_LONGITUDE,
    INITIAL_LONGITUDE_DELTA,
    OSM_TILE_URL,
} from '../../constants';
import { createLocation } from '../../utils/createLocation';
import { styles } from './styles';
import type { OsmMapProps } from './types';

// iOS: mapType="none" -> Apple karoları çizilmez, sadece OpenStreetMap döşenir.
const OsmMap: FC<OsmMapProps> = ({ onLongPress }) => {
    const handleLongPress = async (event: LongPressEvent) => {
        const { latitude, longitude } = event.nativeEvent.coordinate;
        onLongPress(await createLocation(latitude, longitude));
    };

    return (
        <MapView
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
        </MapView>
    );
};

export default OsmMap;
