import { Camera, Map, type PressEvent } from '@maplibre/maplibre-react-native';
import type { FC } from 'react';
import type { NativeSyntheticEvent } from 'react-native';

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
                        tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
                        tileSize: 256,
                    },
                },
                layers: [{ id: 'osm', type: 'raster', source: 'osm' }],
            }}>
            <Camera center={[28.9784, 41.0082]} zoom={11} />
        </Map>
    );
};

export default OsmMap;
