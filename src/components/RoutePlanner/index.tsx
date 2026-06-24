import { View } from 'react-native';

import { locations } from '../../data/locations';
import Dropdown from '../Dropdown';
import { styles } from './styles';
import type { RoutePlannerProps } from './types';

// Başlangıç metnine basınca altında dropdown açılır ve origin'i set eder.
// Varış metnine basınca altında dropdown açılır ve destination'ı set eder.
function RoutePlanner({
    origin,
    destination,
    onSelectOrigin,
    onSelectDestination,
}: RoutePlannerProps) {
    return (
        <View style={styles.container}>
            <View style={styles.origin}>
                <Dropdown
                    options={locations}
                    placeholder={`Başlangıç: ${origin?.name ?? '-'}`}
                    onSelect={onSelectOrigin}
                />
            </View>
            <View style={styles.destination}>
                <Dropdown
                    options={locations}
                    placeholder={`Varış: ${destination?.name ?? '-'}`}
                    onSelect={onSelectDestination}
                />
            </View>
        </View>
    );
}

export default RoutePlanner;
