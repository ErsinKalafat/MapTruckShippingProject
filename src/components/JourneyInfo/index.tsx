import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { USER_NAME } from '../../constants';
import { estimateDuration } from '../../utils/estimateDuration';
import { containerStyle, styles } from './styles';
import type { JourneyInfoProps } from './types';

// Haritanın üstünde, alt kısımda absolute duran yolculuk bilgisi alanı.
function JourneyInfo({ origin, destination }: JourneyInfoProps) {
    const insets = useSafeAreaInsets();
    const duration =
        origin && destination ? estimateDuration(origin, destination) : '-';

    return (
        <View style={containerStyle(insets.bottom)}>
            <Text style={styles.greeting}>Merhaba, {USER_NAME}</Text>
            <Text style={styles.row}>Kalkış: {origin?.name ?? '-'}</Text>
            <Text style={styles.row}>Varış: {destination?.name ?? '-'}</Text>
            <Text style={styles.row}>Tahmini süre: {duration}</Text>
        </View>
    );
}

export default JourneyInfo;
