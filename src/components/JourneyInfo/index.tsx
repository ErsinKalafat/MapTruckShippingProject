import { Text, View } from 'react-native';

import { USER_NAME } from '../../constants';
import { withSafeAreaPanel } from '../../hocs/withSafeAreaPanel';
import { formatDuration } from '../../utils/formatDuration';
import { styles } from './styles';
import type { JourneyInfoProps } from './types';

// Haritanın üstünde, alt kısımda absolute duran yolculuk bilgisi alanı.
function JourneyInfo({ origin, destination, durationSeconds }: JourneyInfoProps) {
    const duration =
        origin && destination ? formatDuration(durationSeconds) : '-';

    return (
        <View style={styles.card}>
            <Text style={styles.greeting}>Merhaba, {USER_NAME}</Text>
            <Text style={styles.row}>Kalkış: {origin?.name ?? '-'}</Text>
            <Text style={styles.row}>Varış: {destination?.name ?? '-'}</Text>
            <Text style={styles.row}>Tahmini süre: {duration}</Text>
        </View>
    );
}

// Alt güvenli alana yaslanan panel olarak dışa aktarılır.
export default withSafeAreaPanel(JourneyInfo, 'bottom');
