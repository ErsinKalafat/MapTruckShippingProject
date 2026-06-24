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
            <Text style={styles.subtitle}>Yolculuk özeti</Text>

            <View style={styles.divider} />

            <View style={styles.row}>
                <Text style={styles.label}>Kalkış</Text>
                <Text style={styles.value}>{origin?.name ?? '-'}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Varış</Text>
                <Text style={styles.value}>{destination?.name ?? '-'}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Tahmini süre</Text>
                <Text style={styles.value}>{duration}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Tahmini maliyet</Text>
                <Text style={styles.cost}>{cost}</Text>
            </View>
        </View>
    );
}

// Alt güvenli alana yaslanan panel olarak dışa aktarılır.
export default withSafeAreaPanel(JourneyInfo, 'bottom');
