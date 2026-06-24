import { Text, View } from 'react-native';

import { CURRENCY, USER_NAME } from '../../constants';
import { withSafeAreaPanel } from '../../hocs/withSafeAreaPanel';
import { estimateCost } from '../../utils/estimateCost';
import { formatDuration } from '../../utils/formatDuration';
import { styles } from './styles';
import type { JourneyInfoProps } from './types';

// Haritanın üstünde, alt kısımda absolute duran yolculuk bilgisi alanı.
function JourneyInfo({
    origin,
    destination,
    durationSeconds,
    distanceMeters,
}: JourneyInfoProps) {
    const hasRoute = Boolean(origin && destination);
    const duration = hasRoute ? formatDuration(durationSeconds) : '-';
    const cost = hasRoute ? `${estimateCost(distanceMeters)} ${CURRENCY}` : '-';

    return (
        <View style={styles.card}>
            <Text style={styles.greeting}>Merhaba, {USER_NAME}</Text>
            <Text style={styles.row}>Kalkış: {origin?.name ?? '-'}</Text>
            <Text style={styles.row}>Varış: {destination?.name ?? '-'}</Text>
            <Text style={styles.row}>Tahmini süre: {duration}</Text>
            <Text style={styles.row}>Tahmini maliyet: {cost}</Text>
        </View>
    );
}

// Alt güvenli alana yaslanan panel olarak dışa aktarılır.
export default withSafeAreaPanel(JourneyInfo, 'bottom');
