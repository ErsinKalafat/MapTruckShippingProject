import type { FC } from 'react';
import MapView, { UrlTile, type LongPressEvent } from 'react-native-maps';

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
                latitude: 41.0082,
                longitude: 28.9784,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
            }}>
            <UrlTile urlTemplate="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapView>
    );
};

export default OsmMap;
